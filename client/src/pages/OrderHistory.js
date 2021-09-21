import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Nav from "../components/Nav";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <Container>
      <Nav />
      <Row>
        <Col xs={12}>
          <Link to="/shop" id="backLink">
            ← Back to Products
          </Link>
        </Col>
      </Row>

      <Row id="orderHistoryRow">
        <Col xs={12}>
          {user ? (
            <>
              <h2>
                Order History for {user.firstName} {user.lastName}
              </h2>
              {user.orders.map((order) => (
                <div key={order._id} className="my-2">
                  <h3>
                    {new Date(
                      parseInt(order.purchaseDate)
                    ).toLocaleDateString()}
                  </h3>
                  <div className="flex-row">
                    {order.products.map(
                      ({ _id, image, name, price }, index) => (
                        <div key={index} className="card px-1 py-1">
                          <Link to={`/products/${_id}`}>
                            <img
                              alt={name}
                              src={`/images/transparentImages/${image}`}
                            />
                            <p>{name}</p>
                          </Link>
                          <div>
                            <span>${price}</span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}

export default OrderHistory;
