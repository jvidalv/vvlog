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
        __html: `<p>While there is some basic <strong>styling</strong> coming out of the box, everything is completely configurable. The idea with React Native Elements is more about component structure than actual design, meaning less boilerplate in setting up certain elements but full control over their design. This means less time <a href="htts://proba.com"><span style="text-decoration: underline;">reasoning</span> </a>about and repeating basic styles and more time building out your app.</p>
<p>Partidos y entidades soberanistas se manifiestan este s&aacute;bado en Barcelona para expresar de nuevo su rechazo a la sentencia del proc&eacute;s en una marcha convocada por la ANC y &Ograve;mnium que busca ser la movilizaci&oacute;n m&aacute;s "masiva y transversal" contra las condenas a los l&iacute;deres independentistas. Bajo el lema "Llibertat", la manifestaci&oacute;n est&aacute; prevista que comience a las cinco de la tarde en el cruce de la calle Marina con Ramon Turr&oacute;, y avanzar&aacute; hasta el cruce de la primera calle con la avenida Ic&agrave;ria, donde se instalar&aacute; un escenario y se celebrar&aacute; un acto.</p>
<h2>While there is some basic styling</h2>
<p>While there is some basic styling coming out of the box, everything is completely configurable. The idea with React Native Elements is more about <strong>component structure</strong> than actual design, meaning less boilerplate in setting up certain elements but full control over their design. This means less time reasoning about and repeating basic styles and more time building out your app.</p>
<pre class="language-javascript"><code>&lt;Container className="py-3"&gt;
        &lt;Row noGutters className="justify-content-center align-items-center"&gt;
          &lt;Col
            className="d-flex align-items-center justify-content-center"
            xs
            md={10}
            lg={8}
          &gt;
            &lt;AuthorWithImage /&gt;
          &lt;/Col&gt;
        &lt;/Row&gt;
&lt;/Container&gt;</code></pre>
<p>Some documents I can't get the height of the document (to position something absolutely at the very bottom). Additionally, a padding-bottom on seems to do nothing on these pages, but do on the pages where height will return. Case(s) in point.</p>
<blockquote>
<p>Some documents I can't get the height of the document (to position something absolutely at the very bottom). Additionally, a padding-bottom on seems to do nothing on these pages, but do on the pages where height will return. Case(s) in point:</p>
</blockquote>
<h3>Non-Premium Plugins</h3>
<p>After over a year and a half of developing for React Native, I have noticed certain basic design elements that I have needed to create repeatedly. This takes up a lot of my time where as I would have liked to be able to just have a place where I can grab these elements and get a head start on the project, without repeating these styles over and over.</p>
<p>After over a year and a half of developing for React Native, I have noticed certain basic design elements that I have needed to create repeatedly. This takes up a lot of my time where as I would have liked to be able to just have a place where I can grab these <strong>elements</strong> and get a head start on the project, without repeating these styles over and over.</p>
<h2>Changes the markup used for the content.</h2>
<p>Some documents I can't get the height of the document (to position something absolutely at the very bottom). Additionally, a padding-bottom <strong>on seems</strong> to do nothing on these pages, but do on the pages where height will return. Case(s) in point.</p>
<p>Some documents I can't get the height of the document (to position something absolutely at the very bottom). Additionally, a padding-bottom on seems to do nothing on these pages, but do on the pages where height will return. Case(s) in point.</p>
`
      }}
    />
  );
}

const tags = ["React", "JavaScript", "Web app development"];
export function Tags() {
  return (
    <TagContainer className="d-flex">
      {tags.map(tag => (
        <Link className="align-self-baseline">{tag}</Link>
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
