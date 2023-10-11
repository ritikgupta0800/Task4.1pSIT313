import React from 'react'
import { faker } from '@faker-js/faker';
import './Feature_tutorial.css'
import { Button } from 'semantic-ui-react'

import Article_page from '../Component/tutorial';
const Featured_tutorial = () => {
  return (

    <div >
      <br />
      <br />
      <div className="h"><h1>Featured Tutorials</h1></div>
      <br />
      <div className="a">
        {
          [...Array(3)].map(() => (
            <Article_page
              name={faker.word.verb()}
              image={faker.image.urlLoremFlickr()}
              Description={faker.lorem.paragraph()}
              author_name={'Username-' + faker.person.fullName()}
              i={faker.image.avatar()}
              r={faker.string.numeric()}
            />
          ))
        }
      </div>
      <div className="b">
      <Button rounded>See all tutorial</Button>
      </div>
      <br />
      <br />
    </div>
    
  );

}

export default Featured_tutorial;