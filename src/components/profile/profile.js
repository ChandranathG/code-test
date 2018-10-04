import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepPurple from '@material-ui/core/colors/deepPurple';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    purpleAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: deepPurple[500],
      width: 72,
      height: 72,
      fontSize: 25,
      fontWeight: 500
    },
    purpleAvatarBig: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
        width: 114,
        height: 114,
        fontSize: 25,
        fontWeight: 500
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class Profile extends Component {
    state = {
        editMode: false,
        email: 'harshavardhan.p@accionlabs.com',
        firstName: 'harshavardhan',
        lastName: 'p',
        phone: '1234556778'
    };

    onEdit = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        const { classes } = this.props;

        let name = (<h1> { `${ this.state.firstName } ${ this.state.lastName }` } </h1>)

        if (!this.state.editMode) {
            return (
                <div className="profile">
                    <div className={classes.row}>
                        <Avatar className={classes.purpleAvatar}>HV</Avatar>
                    </div>
                    { name }
                    <div className="edit">
                        <a onClick = { this.onEdit }>Edit</a>
                    </div>
                </div>
            );
        }

        return (
            <div className="edit-profile">
                <div className="profile-form">
                    <div className="profile-form-arrow">
                        <a onClick = { this.onEdit }>
                            {'<'}
                        </a>
                    </div>
                    <div className={classes.row}>
                        <Avatar className={classes.purpleAvatarBig}>HV</Avatar>
                    </div>
                    { name } 
                </div>
                <br />
                <div className="editContent">
                    <form>
                        <TextField
                            disabled
                            id="standard-disabled"
                            label="Disabled"
                            defaultValue="Hello World"
                            className={classes.textField}
                            margin="normal"
                        />
                        <TextField
                            id="first-name"
                            label="First Name"
                            className={classes.textField}
                            value={this.state.firstName}
                            onChange={this.handleChange('firstName')}
                            ref='firstName'
                            margin="normal"
                        />
                        <TextField
                            id="last-name"
                            label="Last Name"
                            className={classes.textField}
                            value={this.state.lastName}
                            onChange={this.handleChange('lastName')}
                            ref='lastName'
                            margin="normal"
                        />
                        <TextField
                            id="last-name"
                            label="Phone Number"
                            className={classes.textField}
                            value={this.state.phone}
                            onChange={this.handleChange('value')}
                            ref='phone'
                            margin="normal"
                        />
                    </form>
                </div>
            </div>
        )
        
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Profile);
