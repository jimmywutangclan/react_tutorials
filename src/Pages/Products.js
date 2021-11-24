import React from 'react';
import {BrowserRouter, Navigate, useNavigate, Link, Route, Routes, useParams } from 'react-router-dom';

export default function Products() {

    const { id } = useParams();

    // this is a hook, v6 uses useNavigate not history
    const nav = useNavigate();

    const openAboutPage = () => {
        // this nav is relative rather than absolute
        nav('/../../about');
    }

    // this redirects, useful if making forbidden request
    if (parseInt(id) > 3) {
        return <Navigate to="/" />
    }

    return (
        <div>
            Products:
            {id ? <div>Product {id}
                <button onClick={openAboutPage}>About</button>
            </div> : 
                <ul>
                <li>
                    <Link to="/product/1">Product 1</Link>
                </li>
                <li>
                    <Link to="/product/2">Product 2</Link>
                </li>
                <li>
                    <Link to="/product/3">Product 3</Link>
                </li>
            </ul>}
        </div>
    )
}
