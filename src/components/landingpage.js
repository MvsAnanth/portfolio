import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} > 
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img className='avatar-img' src='https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg' alt='avatar'/>
                        <div className='banner-text'>
                            <h1> Full Stack Web Developer </h1>
                            <hr />
                            <p> Java | Spring Framework | Python | React </p>
                            <div className='social-ref'>
                                {/*LinkedIn */}
                                <a href="https://www.linkedin.com/in/hema-ananth-v-s-maddipatla-65788073/" rel='noopener noreferrer' target="_blank">
                                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                                </a>
                                {/*Github */}
                                <a href="https://github.com/MvsAnanth" rel='noopener noreferrer' target="_blank">
                                    <i className='fa fa-github-square' aria-hidden='true' />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;