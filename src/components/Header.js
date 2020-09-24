import React from "react";
import { NavLink} from 'react-router-dom';
import './Header.css';

class Header extends React.Component{
    render(){
        return <div className='links'>
            <div className='linkBlock'>
            <div className='link'>
            <NavLink className='menu-link' to="/">Home</NavLink>
            </div>
            <div className='link'>
            <NavLink className='menu-link' to="/calculator" >在线计算器</NavLink>
            </div>
            <div className='link'>
            <NavLink className='menu-link' to="/timer" >在线计时器</NavLink>
            </div>
            </div>
        </div>
    }
}

export default Header;
