import React, { Component } from 'react';

class UserDashboard extends React.Component {
    render() {
        console.log('this.props HERE: ', this.props);
        console.log('this.props.currentUserEmail: ', this.props.currentUserEmail);
        console.log();
        return (
            <div>
                <h2>this is the UserDashboard page</h2>
                <h2>Welcome {this.props.currentUserEmail},</h2> 
                <h3>My Posts</h3>
                <h3>My Comments</h3>
            </div>
        )
    }
}

export default UserDashboard;