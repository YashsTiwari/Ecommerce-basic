import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardTemplate({ product, handleClick, buttonType, buttonText }) {
  return (
    <Card key={product.id} className="h-100 text-center">
      <div className="text-center">
        <Card.Img
          variant="top"
          src={product.images[0]}
          style={{ height: "130px", width: "100px" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>INR: {product.price}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: "white", textAlign: "center" }}>
        <Button
          variant={buttonType}
          onClick={handleClick ? () => handleClick(product) : null}
        >
          {buttonText}
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default CardTemplate;
