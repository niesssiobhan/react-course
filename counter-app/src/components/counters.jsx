import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("Event Handler Called");
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

//-------Notes-----//

// <h4>Counter #{counter.id}</h4> (this would be set by closing the Counter tag with </Counter> and then setting the <h4> in between) this is going to create a child to the props. Giving each of the props a title of Counter #

// the props for the Counter component are value, id, and onDelete (key is not a prop)

// you dont have to have the props of value and id, you are able to just replaceit with counter because counter holds related values (this helps keep your code looking clean) so the {counter} inclueds everything that you need to know about the counter. Also if in the future you add a new property to the counter object you dont have to come back to modify the component code. The {counter} is carrying all the data about a counter

// the Counters compnent is the parent to the Counter component and the handleDelete function is handling the event from the Counter component Delete button

// with the handleReset function we are write the fucntionality so that the counter values reset to the value of 0
