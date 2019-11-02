import React,{ Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { withRouter } from 'react-router-dom';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange() {
        // let path = 'https://github.com/MvsAnanth/portfolio';
        // this.props.history.push(path);
        // TODO
        window.location.href = 'https://github.com/MvsAnanth/portfolio';
    }

    toggleCategories() {
        if ( this.state.activeTab === 0 ) {
            return(
                <div className='projects-grid'>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}></CardTitle>
                    <CardText>React Project #1 - Portfolio</CardText>
                    <CardActions border>
                        <Button colored onClick={this.handlePageChange}>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}></CardTitle>
                    <CardText>React Project #2</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}></CardTitle>
                    <CardText>React Project #3</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if ( this.state.activeTab === 1 ) {
            return(
                <div className='projects-grid'>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://miro.medium.com/max/4000/1*_FFpkCWD-KwQmc7oevCRBQ.jpeg) center / cover'}}></CardTitle>
                    <CardText>Java Project #1</CardText>
                    <CardActions border>
                        <Button colored>Java</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if ( this.state.activeTab === 2 ) {
            return(
                <div className='projects-grid'>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://p7.hiclipart.com/preview/330/684/6/spring-framework-software-framework-model-view-controller-web-framework-java-pepper-robot.jpg) center / cover'}}></CardTitle>
                    <CardText>Spring Project #1</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React UI</Tab>
                    <Tab>Java</Tab>
                    <Tab>Spring</Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className='contents'>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}
export default withRouter(Projects);