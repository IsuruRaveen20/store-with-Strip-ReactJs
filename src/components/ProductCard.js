import { Card, Button, Form, Row, Col } from 'react-bootstrap';
 
function ProductCard(props){ //props.product is the product we are selling
    
    const product = props.product;

    <Card>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Title>${product.price}</Card.Title>
            <Button variant="primary">Add To Cart</Button>
        </Card.Body>
    </Card>
}

export default ProductCard;