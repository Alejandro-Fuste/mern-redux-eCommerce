import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

import Nav from "../components/Nav";
import CartModal from "../components/CartModal";

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
              {user.orders.map((order) => (
                <div key={order._id} className="my-2">
                  <h3 className="nameDate">
                    {new Date(
                      parseInt(order.purchaseDate)
                    ).toLocaleDateString()}
                  </h3>
                  <Card id="historyCard">
                    <Card.Body id="historyCardBody">
                      {order.products.map(
                        ({ _id, image, name, price }, index) => (
                          <div key={index} className="itemRow">
                            <img
                              alt={name}
                              src={`/images/transparentImages/${image}`}
                              id="historyImg"
                            />

                            <div id="namePriceDiv">
                              <Link to={`/products/${_id}`}>{name}</Link>
                              <span>${price}</span>
                            </div>
                          </div>
                        )
                      )}
                    </Card.Body>
                  </Card>
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

{
  /* <div className="flex-row">
  {order.products.map(({ _id, image, name, price }, index) => (
    <div key={index} className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/transparentImages/${image}`} />
        {/* <p>{name}</p> */
}
{
  /* </Link>
      <div>
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </div>
  ))}
</div> */
}
