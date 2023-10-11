import React from 'react'
import { Icon, Header, List } from 'semantic-ui-react'
import './Footer.css';

const HeaderExamplePage = () => (
    <footer>

        <div className="col">
            <div className="c">
                <Header as='h2'>Explore</Header>
                <List items={['Home', 'Question', 'Articles', 'Tutorials']} />
            </div>
            <div className="c">
                <Header as='h2'>Support</Header>
                <List items={['Help', 'FAQ', 'Contact Us']} />
            </div>
            <div className="c">
                <Header as='h3'>Stay Connected</Header>
                <div>
                    <Icon bordered name='facebook official'/>
                    <Icon bordered color='teal' name='instagram' />
                    <Icon bordered inverted color='black' name='twitter' />

                </div>

            </div>
        </div>

        <div className="deakin">
            <Header as='h2'>DEV@DEAKIN 2023</Header>
        </div>
        <div className='d'>
            <div className="c">
                <List items={['Privacy Policy']} />
                </div>
                <div className="c">
                <List items={[ 'Terms']} />
                </div>
                <div className="c">
                <List items={[ 'Code of Conduct']} />
            </div>
            </div>
            
    </footer>
)

export default HeaderExamplePage