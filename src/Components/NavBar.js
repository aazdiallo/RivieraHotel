import React, { Component } from 'react';
import logo from '../images/Riviera.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export default class NavBar extends Component {
    state = {
        isOpen:false
    }
    // hide and unhide navbar by clicking on it
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <nav className = 'navbar'>
                <div className = 'nav-center'>
                    <div className = 'nav-header'>
                        <Link to = '/'>
                            <img src = {logo} alt = "Riviera Hotel" />
                        </Link>
                        <button type='button' className='nav-btn' onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon' />
                        </button>
                    </div>
                    <ul className={this.state.isOpen?'nav-links show-nav':'nav-links'}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/room'>Rooms</Link></li>
                    </ul>
                </div>    
            </nav>
        )
    }
    }
