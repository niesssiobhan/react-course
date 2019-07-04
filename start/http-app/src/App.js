import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import http from "./services/httpService";
import config from "./config.json";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);
    console.log(post);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = "UPDATED";
    http.put(
      `${config.apiEndpoint}'/' 
    ${post.id}`,
      post
    );

    const posts = [...this.state.posts];
    const index = posts.indexOf(posts);
    posts[index] = { ...posts };
    this.setState({ posts });

    // console.log(data);
  };

  handleDelete = async post => {
    //this is a reference to the original state
    const originalPosts = this.state.posts;
    // this is updating the UI
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
      await http.delete(`${config.apiEndpoint}'/' 
      ${post.id}`);
      // throw new Error("");
    } catch (ex) {
      // console.log("HANDLE DELETE CATCH BLOCK");
      // this is representing an expected error
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted");
      this.setState({ posts: originalPosts }); // this is updating the state to the previous state
    }

    // console.log("Delete", post);
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;

//-------------Notes----------------//

// by creating the logic of the componentDidMount we are able to populate the data that we took from the fake backend
