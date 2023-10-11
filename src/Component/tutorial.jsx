import React from 'react'
import { Card, Image, Icon, Rating,Label, Button } from 'semantic-ui-react'
const tutorial_page = (props) => (
    
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
      <Label as='a' image>
      <img src={props.i} />
    </Label>
    </Card.Content>
    <Rating icon='star' defaultRating={props.r} maxRating={5} />
    <br />
    <Button>Click Here</Button>
   
  </Card>
  
)
export default tutorial_page