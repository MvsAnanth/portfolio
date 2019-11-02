import React,{ Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h3>No One</h3>
                        <img src='https://www.w3schools.com/w3images/avatar2.png' alt='contact-pic' style={{height: '250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>You can find the contact details here.</p>
                    </Cell>
                    <Cell col={6}>
                        <h4>Contact Me</h4>
                        <hr />
                        <div className='contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily: 'McLaren'}}><i className='fa fa-phone-square' aria-hidden='true'/>1234567890</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent><i className='fa fa-envelope' aria-hidden='true'/>iam@example.com</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent><i className='fa fa-instagram' aria-hidden='true'/>no_one</ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;