"use client"

import type { ReactNode } from "react"

export const ClientComponent = ({ children }: { children: ReactNode }) => (
  <div>
    This client component has children <code>{"{children}"}</code>:{children}
  </div>
)
