import React from 'react';
import './App.css';
import {Layout, Navigation, Drawer, Header, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/routes';

function App() {
  return (
      <Layout >
        <Header title="Portfolio" className = 'header-color'>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Portfolio">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content> <Main /> </Content>
      </Layout>
  );
}

export default App;
