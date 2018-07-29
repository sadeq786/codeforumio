import React, { Component } from "react";
import * as routes from '../constants/routes';
import API from "../utils/API";

const NewPostPage = () =>
    <div>
        <h3>Submit a New Post</h3>
        <NewPostForm />
    </div>

const INITIAL_STATE = {
    postTitle: '',
    description: ''
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class NewPostForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            postTitle,
            description
        } = this.state;

        API.createNewPost(this.state)
            .then(res => {
                console.log("submitted post");
                // window.location.reload();
            })
            .catch(err => console.log("hey this is the error: ", err));



        event.preventDefault();
    }

    render() {

        const {
            postTitle,
            description
        } = this.state;

        const isInvalid =
            postTitle === '' ||
            description === '';

        console.log(this.state);

        return (

            <form onSubmit={this.onSubmit}>
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
                                onChange={event => this.setState(byPropKey('description', event.target.value))}
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

export default NewPostPage;

export {
    NewPostForm
};

