import './Header.css'
import React from 'react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'


const Header = () => {
    return (
        <body>
            <header >

            <div class="deakin" ><p >DEV@DEAKIN</p>

                <div class="s">  <Input icon='search plus' placeholder='Search' />
                   
                </div>
                <div className="button">
                <Button>Post</Button>
                    <Button>Login</Button>
                    </div>
            </div>

        </header>
        </body>)

}


export default Header