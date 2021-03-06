import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Spinner } from "reactstrap";
import Card from "./Card";
import { sagaActions } from "../Saga/sagaAction";
import { getData } from "../Store/index";

export default function Gallery() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_DATA_SAGA });
  }, [dispatch]);

  const myData = useSelector(getData);
  // console.log(myData);

  return (
    <>
      <Row>
        <Col
          style={{
            fontSize: "2rem",
            color: "#fff",
            borderBottom: "1px solid #fff",
          }}
          className="p-3"
        >
          Hotels<i> Gallery</i>
        </Col>
      </Row>
      <Row>
        {myData.data.loading ? (
          <Col style={{ textAlign: "center", padding: "50px" }}>
            <Spinner
              color="primary"
              style={{ width: "3rem", height: "3rem" }}
            />
          </Col>
        ) : myData.data.error ? (
          <Col style={{ textAlign: "center", padding: "20px" }}>
            <h5 style={{ color: "red" }}> {`OOPS! ${myData.data.error}`}</h5>
          </Col>
        ) : null}
        {myData.data.data
          ? myData.data.data.map((item, idx) => {
              return (
                <Col key={idx} md="4" className="mb-3 mt-3">
                  <Card
                    details={item.details}
                    id={item.id}
                    price={item.price}
                    photos={item.photos}
                    location={item.location}
                    provider={item.provider}
                  />
                </Col>
              );
            })
          : null}
      </Row>
    </>
  );
}
