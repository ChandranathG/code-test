import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Header extends Component {
    state = {
        anchorEl: null,
    };
    
    handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
    this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div className="header">
                <div className="mainHeader">
                    <div className="logoContainer"></div>
                    <div className="headerMenuContainer"> 
                        <Button
                            aria-owns={anchorEl ? 'simple-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                        >
                            My Account
                        </Button>
                        <Menu 
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
                            <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
                <div className="subHeader">
                    <div className="subHeaderLabel">
                        Account Settings
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
