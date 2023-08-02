import pretty from "pretty"
import escape from "escape-html"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: any) {
  const baseUrl = request.nextUrl.origin
  const path = "/" + params.path.join("/")
  const res = await fetch(baseUrl + path)

  let html = await res.text()
  html = escape(pretty(html))

  let responseHtml = `<html>
    <style>html,body{margin:0;padding:0;}</style>
    <body>
      <div style="width:100vw;height:100vh;"><pre>${html}</pre></div>
    </body>
  </html>`

  return new Response(responseHtml, {
    status: 200,
    headers: { "content-type": "text/html" },
  })
}
