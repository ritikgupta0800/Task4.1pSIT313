import React from 'react'
import { Card, Image, Button, Rating } from 'semantic-ui-react'
const Article_page = (props) => (
  <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Description>
        {props.Description}
      </Card.Description>
      <br />
      <Card.Header>{props.author_name}</Card.Header>
    </Card.Content>
    <Rating icon='star' defaultRating={props.r} maxRating={5} />
    <br />
    <Button>Click Here</Button>
  </Card>
  
)
export default Article_page
