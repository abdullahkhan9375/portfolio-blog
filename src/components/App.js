import React, {useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './../styles/App.css'
import Home from './Pages/Home';
import About from './Pages/About';
import Post from './Widgets/Post';
import SinglePost from './Widgets/SinglePost'
import Project from './Widgets/Project';
import Navbar from './Widgets/Navbar';
// import Sort from './Widgets/Sort';
import SingleProject from './Widgets/SingleProject';
import Switch_Mode from './Widgets/Switch_Mode';




export default function App() {

    const [theme, setTheme] = useState('Light');
    const htmlTheme = document.getElementById('html')

    const getTheme = (theme) => {
        setTheme(theme);
        htmlTheme.setAttribute('data-theme', theme)
    }

    return (
        // <ThemeProvider theme = {lightTheme}>
        //     <GlobalStyles/>
        <div className = "background-home">
        <BrowserRouter>
        <Navbar></Navbar>
        <Switch_Mode getTheme = {getTheme}></Switch_Mode>
            <Switch>
                <Route component = {Home} exact path = "/"/>
                <Route component = {About} path = "/about"/>
                <Route component = {SinglePost} path = "/post/:slug"/>
                <Route component = {SingleProject} path = "/project/:slug"/>
                <Route component = {Post} path = "/post"/>
                <Route component = {Project} path = "/project"/>
            </Switch>         
        </BrowserRouter>
        {/* <Footer></Footer> */}
        </div>
        // </ThemeProvider>
    )
}
