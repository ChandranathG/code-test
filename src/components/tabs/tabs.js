import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Profile from '../profile/profile';
import BusinessProfile from '../businessProfile/businessProfile';

const TabContainer = (props) => (
    <div className="tabContent">
        {props.children}
    </div>
);

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class AppTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (e, value) => {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;

        return (
            <div className='tabs'>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="User Profile" />
                        <Tab label="Business Profile" />
                        <Tab label="Subscriptions" />
                        <Tab label="Security" />
                    </Tabs>
                </AppBar>
                {   value === 0 && 
                    <TabContainer>
                        <Profile />
                    </TabContainer>
                }
                {   value === 1 && 
                    <TabContainer>
                        <BusinessProfile />
                    </TabContainer>
                }
                {value === 2 && <TabContainer>Subscriptions</TabContainer>}
                {value === 3 && <TabContainer>Security</TabContainer>}
            </div>
        );
    }
}

export default AppTabs;
