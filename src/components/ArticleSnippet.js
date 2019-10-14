import React from "react";
import { Card } from "react-bootstrap";

import squarePlaceholder from "../assets/images/square-placeholder.png";

function ArticleSnippet(props) {
  const { title, subtitle, category, date, resume } = props;
  return (
    <Card>
      <Card.Body className="p-0 text-left d-md-flex">
        <Card.Img
          className="d-none d-lg-block"
          style={{ width: "25%" }}
          src={squarePlaceholder}
        />
        <div className="p-4">
          <Card.Text className="text-primary font-weight-light">
            {category}
          </Card.Text>
          <Card.Title className="mb-0">{title}</Card.Title>
          <Card.Text>12 nov</Card.Text>
          <Card.Text>{resume}</Card.Text>
          <Card.Text className="text-primary">Read more...</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ArticleSnippet;
