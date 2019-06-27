import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
    }
  }

  componentWillUnmount() {
    console.log("Counter - Will Unmount");
  }

  // state is being removed so that we can have a single source of truth and have a controlled component. This has to be done so that when we click on the Reset button the local state will also reset

  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"]
  //   // imageUrl: "https://picsum.photos/200"
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this); // this here will return a new function
  //   // this new function needs to be created so that the handleIncrement function can access the 'this'method
  //   // for every event handler, you will have to write code like this above
  // }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // making this into an arrow function, that then means that it inhereits the 'this' key word and then you dont have to have the constructor function from above
  // handleIncrement = () => {
  // console.log(product);
  // this.setState({ value: this.state.value + 1 }); // we set it to setState so that React is aware of the state changes and will then show the incrementation as you click the 'Increment' button
  // };

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
    console.log("Counter - Rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
        {/* <img src={this.state.imageUrl} alt="random image" /> */}
        {/* {this.props.children}  */}
        {/* {this.props.counter.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; // here we are going to use object destructuring. We are taking the 'count' property of the 'this.state' object and storing it in a separate constanst named 'count' this is so that we can just type out 'count' instead of 'this.state.count'
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

//------Notes-------//

// the btn within the <div> is bootstrap and adds in some css styling that you can control. Needs more research to underdstand more due to lack of experience and exposure

// "badge badge-primary m-2" <- this is giving zero a blue background or badge and the m-2 is giving it a margin of 2 for space

// badge-primary will create a blue badge
// badge-warning will create a yellow badge

// what is happening in the <ul> is that we are getting a string and mapping it (because it is an array) with jsx expression which then gets compiled into a React element, which is also like a plain JS object

// {this.props.children} is going to set the child attributes that have been given to the counter

// With this Counter component when it comes to the delete button and having 'this.props.onDelete' it is raising an event

// the handleIncrement method is removed because we no longer have state withing the Counter component. The Counter component is going to be a controlled component (expained above)
