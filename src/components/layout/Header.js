/* eslint-disable no-script-url */
import React, { Component } from 'react';
import logoIcon from '../../assets/images/dxc_logo_hz_wht_rgb_150.png';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <div className="bg">
                        <div id="triangle-down" />
                        <img src={logoIcon} alt="logo" />
                    </div>
                </div>
                <div className="app_name"><label>dip</label></div>
            </div>
        );
    }
}

export default Header;
