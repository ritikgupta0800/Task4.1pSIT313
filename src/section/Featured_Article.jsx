import React from 'react'
import { faker } from '@faker-js/faker';
import './Featured.css'
import { Button } from 'semantic-ui-react'

import Article_page from '../Component/article';
const Featured_Article = () => {
  return (

    <div >
      <br />
      <br />
      <div className="h"><h1>Featured Articles</h1></div>
      <br />
      <div className="a">
        {
          [...Array(3)].map(() => (
            <Article_page
              name={faker.person.suffix()}
              image={faker.image.url()}
              Description={faker.lorem.paragraph()}
              author_name={'--' + faker.person.fullName()}
             r={faker.string.numeric()}
            />
          ))
        }
      </div>
      <div className="b">
      <Button rounded>See all tutorial</Button>
      </div>
    </div>
  );

}

export default Featured_Article;
