import React from 'react';
import { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                This header is a react component

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/product/ajax">Product / Ajax</a></li>
                </ul>
            </header>
        );
    }
}