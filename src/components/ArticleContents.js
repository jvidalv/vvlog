import React, { useState } from "react";

import { Content, ReadingBarStyled, TagContainer } from "./ArticleContentStyle";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { Link } from "react-router-dom";
/**
 * Article content
 * @param {*} props
 */
export function ArticleContent(props) {
  const {} = props;

  return (
    <Content
      dangerouslySetInnerHTML={{
        __html: `<p> Proba de concepte paragraf 1 </p><pre class="language-javascript"><code> &lt;Container className="py-3"&gt;
      &lt;Row noGutters className="justify-content-center align-items-center"&gt;
        &lt;Col
          className="d-flex align-items-center justify-content-center"
          xs
          md={10}
          lg={8}
        &gt;
          &lt;AuthorPhoto src={author} width="75" height="75" /&gt;
          &lt;div className="ml-3"&gt;
            &lt;P className="mb-0" big&gt;
              Josep Vidal ❤
            &lt;/P&gt;
            &lt;P className="mt-0" color="secondary2" muted&gt;
              Aug 1, 2019 &middot; 11 min read
            &lt;/P&gt;
          &lt;/div&gt;
        &lt;/Col&gt;
      &lt;/Row&gt;
    &lt;/Container&gt;</code></pre><h2>holaa</h2><blockquote>
<p>haahahahah hsuyoooer a sdasd sad adasd</p>
</blockquote><h3> Proba h3 </h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>`
      }}
    ></Content>
  );
}

const tags = ["React", "JavaScript", "Web app development"];
export function Tags() {
  return (
    <TagContainer className="d-flex">
      {tags.map(tag => (
        <Link>{tag}</Link>
      ))}
    </TagContainer>
  );
}

/**
 * Fixed bar on top that grows as the user scroll
 */
export function ReadingTopBar() {
  const [scroll, setScroll] = useState(0);

  const calculateBarWidth = currPos => {
    let totalScrollable = document.body.scrollHeight - window.innerHeight;
    let scrollPerCent = ((100 * currPos.y) / totalScrollable) * -1;

    setScroll(scrollPerCent);
  };

  useScrollPosition(
    ({ currPos }) => calculateBarWidth(currPos),
    [],
    null,
    false,
    0
  );

  return <ReadingBarStyled scroll={scroll} />;
}
