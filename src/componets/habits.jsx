import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  // handleIncrement = (habit) => {
  //   this.props.onIncrement(habit);
  //   //state 오브젝트 안에 있는 count를 증가한뒤 state를 업데이트 해야 함.
  //   //    this.setState({count: this.state.count + 1})
  // };
  // handleDecrement = (habit) => {
  //   this.props.onDecrement(habit);
  // };

  // handleDelete = (habit) => {
  //   this.props.onDelete(habit);
  // };
  // handleAdd = (name) => {
  //   this.props.onAdd(name);
  // };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="button-Reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
