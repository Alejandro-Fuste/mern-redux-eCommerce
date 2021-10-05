import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

import Nav from "../components/Nav";
import CartModal from "../components/CartModal";
import Error from "../components/Error";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;
  console.log(data);

  if (data) {
    user = data.user;
  }

  function showCartButton() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Nav navbarLinks="shopNavLinks" logoName="shopLogoName" />
          <CartModal id="shopCartButton" />
        </>
      );
    } else {
      return (
        <>
          <Nav navbarLinks="shopNavLinks" logoName="shopLogoName" />
        </>
      );
    }
  }

  return (
    <Container fluid id="orderHistoryContainer">
      <header id="header">{showCartButton()}</header>

      <Row id="orderHistoryRow">
        <Col xs={12}>
          {user ? (
            <>
              <h2 className="nameDate">
                Order History for {user.firstName} {user.lastName}
              </h2>
              <div id="ordersContainer">
                {user.orders.map((order) => (
                  <div key={order._id} className="ordersDiv">
                    <Card id="historyCard">
                      <Card.Body id="historyCardBody">
                        <h3 className="nameDate">
                          {new Date(
                            parseInt(order.purchaseDate)
                          ).toLocaleDateString()}
                        </h3>
                        {order.products.map(
                          ({ _id, image, name, price }, index) => (
                            <div key={index} className="itemRow">
                              <Link to={`/products/${_id}`}>
                                <img
                                  alt={name}
                                  src={`/images/transparentImages/${image}`}
                                  id="historyImg"
                                />
                              </Link>
                              <div id="namePriceDiv">
                                <span>{name}</span>
                                <span>${price}</span>
                              </div>
                            </div>
                          )
                        )}
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <Error
              h3ClassName="errorH3"
              spanClassName="errorSpan"
              ariaLabel="error message"
              text="Oops, something went wrong. Be sure you are logged in."
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default OrderHistory;
