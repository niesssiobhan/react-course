import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
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

// the Counter component is raising the delete and increment events. With having {this.props.onDelete} or {this.props.onIncrement} means that we are bubbling that event to the parent component
