import React from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions } from "../store/counterSlice.js";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const toggleCounterHandler = () => {};
  const IncrementHandler = () => {
    dispatch(counterActions.increment());
    // dispatch({type: 'increment'});
  };
  const DecrementHandler = () => {
    dispatch(counterActions.decrement());
    // dispatch({type: 'decrement'});
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
    // dispatch({type: 'increase', amount: 5});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment</button>
        <button onClick={DecrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// for class based Component

// class Counter extends React.Component {
//   Increment() {
//     this.props.increment();
//   }
//   Decrement() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.Increment.bind(this)}>Increment</button>
//           <button onClick={this.Decrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }
// const mapsStatesToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapsStatesToProps, mapDispatchToProps)(Counter);
