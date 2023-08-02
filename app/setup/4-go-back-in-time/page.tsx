import { Footer } from "@/components"

const GoBackInTime = async () => {
  return (
    <>
      <main>
        <h1>Setup: Go Back In Time</h1>
        <aside>What&apos;s old is new again</aside>
        <pre>
          <code>
            {`<?php
  $author = "Callum Silcock";
  $post_content = @file_get_contents("./posts/hello-world.txt");
?>
<html>
  <head>
    <title>My blog</title>
  </head>
  <body>
    <nav>
      <a href="/">Home</a>
      <hr>
    </nav>
    <article>
      <?php echo htmlspecialchars($post_content); ?>
    </article>
    <footer>
      <hr>
      <p><i>(c) <?php echo htmlspecialchars($author); ?>, <?php echo date("Y"); ?></i></p>
    </footer>
  </body>
</html>`}
          </code>
        </pre>
      </main>
      <Footer nextSlide="/diving-in/1-static-content" />
    </>
  )
}

export default GoBackInTime
