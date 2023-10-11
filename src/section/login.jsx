import React from 'react';
import { Header, Input, Button } from 'semantic-ui-react'
import './login.css';

const login = () => {
  return (
    <body>
    <header >
    <form action="/" method='POST'>
    <div class="deakin" ><p >Sign up for daily Insider</p>
    
        <div class="s">  <Input type='email' placeholder='email' />
           
        </div>
        <div className="b">
        <Button>Subscribe</Button>
        </div>
          
    </div>
    
</form>
</header>
<br />
</body>

  )
}

export default login