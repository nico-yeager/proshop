import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 py-3 rounded">
      <a href={`/products/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </a>
      <Card.Body>
        <Card.Title>
          <strong>
            <a href={`/products/${product._id}`}>{product.name}</a>
          </strong>
        </Card.Title>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h4">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
