import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickButton } from "./actions";

class App extends Component {
  state = {
    inputValue: "",
  };

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const { clickButton, newValue } = this.props;

    return (
      <div>
        <input
          onChange={this.inputChange}
          type="text"
          value={this.state.inputValue}
        />
        <button onClick={() => clickButton(this.state.inputValue)}>
          Mudar
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  newValue: store.clickState.newValue,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
