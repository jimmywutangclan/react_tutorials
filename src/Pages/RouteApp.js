import React from 'react';
import {BrowserRouter, Link, NavLink, Route, Routes} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Products from './Products';

export default function RouteApp() {
    return (
        <BrowserRouter>
        <div>
            <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>{ ' ' }
            <NavLink to="/product" exact={true} activeClassName="active">Product</NavLink>{ ' ' }
            <NavLink to="/about" exact={true} activeClassName="active">About</NavLink>
        </div>
        <div>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Products />} />
                <Route path="/product/:id" element={<Products />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
        </BrowserRouter>
    )
}
