import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import author from "../assets/images/me-roman.png";
import { P } from "../styles/GenericStyles";
import { AuthorPhoto } from "./AuthorSectionStyle";

export function ArticleContent(props) {
  const {} = props;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">Lorem Ipsum is simply dummy text of the printing and <a href="proba.com" aria-invalid="true">typesetting</a> industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and<strong> scrambled it to make</strong> a type specimen book.</span></p> <p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></p> <blockquote> <p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span></p> </blockquote> <h2><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">Proba titol 2</span></h2> <p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">Lorem Ipsum&nbsp;is simply <strong>dummy text</strong> of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span></p> <pre class="language-ruby"><code>&lt;ShareOption url={"https://www.facebook.com/sharer/sharer.php?u=" + location} icon={&lt;FaFacebook /&gt;} title="Share on Facebook! 💖" className="left-bar" /&gt;</code></pre> <p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></p> <p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;"> <code></code></span></p>'
      }}
    ></div>
  );
}
