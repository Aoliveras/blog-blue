import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li className="navbar"><a href="/">Home</a></li>
                        <li className="navbar">Blog</li>
                        <li className="navbar">About</li>
                        <li className="navbar">Contact</li>
                    </ul>
                </nav>
            </div>
        )
    }
}
