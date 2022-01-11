import React from 'react'

import "./styles.scss";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg, CardLink } from "reactstrap"


export function Sidebar() {
  return (
    <div>
      <Card className="card">
        <CardBody>
          <CardTitle tag="h5">
            Perseverance
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
        </CardBody>
        <img
          alt="Card rover cap"
          src="https://hipertextual.com/wp-content/uploads/2020/07/hipertextual-curiosidades-sobre-perseverance-rover-mision-mars-2020-2020012223.png"
          width="100%"
        />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
          <CardLink href="#">
            Card Link
          </CardLink>
          <CardLink href="#">
            Another Link
          </CardLink>
        </CardBody>
      </Card>
    </div>
  )
}
