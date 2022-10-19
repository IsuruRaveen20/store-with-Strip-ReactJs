import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../productStore';
import ProductCard from '../components/ProductCard';

function Store() {
    return (
        // JSK Fragment
        <>
            <h1 align="center" className="p-3">Welcome to the Store</h1>
            <Row xs={1} md={3} className="g-4">
                {/* parenthesis use to return jsx elements immediately */}
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;