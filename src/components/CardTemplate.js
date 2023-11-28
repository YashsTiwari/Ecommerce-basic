import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardTemplate({ product }) {
  return (
    <Card key={product.id} className="h-100">
      <div className="text-center">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "130px", width: "100px" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>INR: {product.price}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: "white" }}>
        <Button variant="primary">Add To Cart</Button>
      </Card.Footer>
    </Card>
  );
}

export default CardTemplate;
