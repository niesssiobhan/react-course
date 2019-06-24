import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    // imageUrl: "https://picsum.photos/200"
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this); // this here will return a new function
  //   // this new function needs to be created so that the handleIncrement fuction can access the 'this'method
  //   // for every event handler, you will have to write code like this above
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // making this into an arrow function, that then means that it inhereits the 'this' key word and then you dont have to have the constructor function from above
  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 }); // we set it to setState so that React is aware of the state changes and will then show the incrementation as you click the 'Increment' button
  };

  // this this oject below you are able to add it to the span of the return. So to make it affect all within the return you would have: style={this.styles}
  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  // render method is an asynchronous call meaning that it will be called in the future
  render() {
    // this is so that you can control when the badge will trun yellow or blue and then you have it set to 'classes' so that you can use that name instead of all the badge text
    // let classes = "badge m-2 bandge-";
    // classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="random image" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; // here we are going to use object destructuring. We are taking the 'count' property of the 'this.state' object and storing it in a separate constanst named 'count' this is so that we can just type out 'count' instead of 'this.state.count'
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

//------Notes-------//

// the btn within the <div> is bootstrap and adds in some css styling that you can control. Needs more research to underdstand more due to lack of experience and exposure

// "badge badge-primary m-2" <- this is giving zero a blue background or badge and the m-2 is giving it a margin of 2 for space

// badge-primary will create a blue badge
// badge-warning will create a yellow badge

// what is happening in the <ul> is that we are getting a string and mapping it (because it is an array) with jsx expression which then gets compiled into a React element, which is also like a plain JS object
