import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Slider from "./Slider";

export default function MyCard({ details, provider, price, location, photos }) {
  return (
    <Card style={{ backgroundColor: "snow", borderColor: "snow" }}>
      <Slider photos={photos} />
      <CardBody>
        <CardTitle tag="h5">{details.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Type: {details.apartmentTypeTitle}
        </CardSubtitle>
        <CardText>
          <b>Price:</b> {`${price.total} ${price.currency}`}
          <br />
          <b>Area:</b>{" "}
          {`${details.area ? details.area.value : "N/A"} ${
            details.area ? details.area.unit : ""
          }`}
          <br />
          <b>Location:</b> {`${location.name} `}
          <br />
          <img
            width="150px"
            style={{ maxHeight: "40px" }}
            src={provider.logoUrl}
            alt="logo"
          />
          <br />
        </CardText>

        <Button
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`
            )
          }
          className="w-100"
          color="primary"
        >
          See location on Google Map
        </Button>
      </CardBody>
    </Card>
  );
}
