import React, { Component } from "react";
import * as routes from '../constants/routes';
import API from "../utils/API";
import { Link, withRouter } from 'react-router-dom';

const NewPostPage = ({ history, currentUserEmail }) =>
    <div>
        {console.log('INSIDE NEW POST PAGE')}
        <h3>Submit a New Post</h3>
        <NewPostForm history={history} currentUserEmail={currentUserEmail} />
    </div>

const INITIAL_STATE = {
    postTitle: '',
    description: '',
    loggedInUser: ''
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class NewPostForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = { ...INITIAL_STATE };

    }

    componentWillMount() {       
        console.log('component has mounted');
        console.log('these are the props here: ');
        console.log(this.props);
        this.setState({ loggedInUser: 'Anonymous User'});
    };



    onSubmit = (event) => {
        const {
            postTitle,
            description,
            loggedInUser
        } = this.state;

        this.setState({ loggedInUser: this.props.currentUserEmail});


        const {
            history,
            currentUserEmail
        } = this.props;

        console.log('this.props: ');
        console.log(this.props);  

        API.createNewPost(this.state)
            .then(res => {
                console.log("submitted post");
                // window.location.reload();
                history.push(routes.ALL);
            })
            .catch(err => console.log("hey this is the error: ", err));


        event.preventDefault();
    }

    render() {

        const {
            postTitle,
            description,
            loggedInUser
        } = this.state;

        const isInvalid =
            postTitle === '' ||
            description === '';

        console.log('this.state HERE(FORM): ', this.state);
        console.log('this.props HERE(FORM): ', this.props);
        console.log('this.props.currentUserEmail : ', this.props.currentUserEmail);


        return (

            <form onSubmit={this.onSubmit}>
            {console.log('INSIDE NEW POST FORM')}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <input
                                value={postTitle}
                                onChange={event => this.setState(byPropKey('postTitle', event.target.value))}
                                type="text"
                                placeholder="Post Title"
                            />
                            <p></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <textarea
                                value={description}
                                onChange={event => 
                                    {
                                        this.setState(byPropKey('description', event.target.value))
                                        this.setState(byPropKey('loggedInUser', this.props.currentUserEmail))
                                    }
                            }

                                type="text"
                                placeholder="Description"
                            ></textarea>
                            <p></p>
                        </div>
                    </div>
                    <button disabled={isInvalid} type="submit">
                        Submit New Post
                    </button>
                </div>
            </form>
        );
    }
}

export default withRouter(NewPostPage);



export {
    NewPostForm
};

