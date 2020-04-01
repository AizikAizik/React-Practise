import React from "react";
import ShowList from "./ShowList";
import Demo from "./Demo";
import LifeCycleA from "./LifeCycleA";
import FragmentDemo from "./FragmentDemo";
import Table from "./Table";
import ParentComp from "./ParentComp";
import RefsDemo from "./RefsDemo";
import FocusInput from "./FocusInput";
import FRParentInput from "./FRParentInput";
import PortalDemo from "./PortalDemo";

const styles = {
  textAlign: "center",
  padding: "15px"
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ButtonValue: 0,
      database: [
        {
          id: 1,
          game: `Fifa 20`
        },
        {
          id: 2,
          game: `NFS Carbon`
        },
        {
          id: 3,
          game: `BattleField V`
        },
        {
          id: 4,
          game: `GTA 5`
        }
      ]
    };
  }

  //Increment the button count by 1
  Increment = () => {
    this.setState({ ButtonValue: this.state.ButtonValue + 1 });
  };

  //Decrement the button count by 1
  Decrement = () => {
    if (this.state.ButtonValue === 0) {
      this.setState({ ButtonValue: 0 });
    } else {
      this.setState({ ButtonValue: this.state.ButtonValue - 1 });
    }
  };

  render() {
    const { ButtonValue } = this.state;
    return (
      <div style={styles}>
        <button onClick={this.Increment}>Click to Increment</button>
        <br /> <br />
        <button onClick={this.Decrement}>Click to decrement</button>
        <br />
        <br />
        <p>You have clicked the button {ButtonValue} time(s)</p>
        <div>
          <ShowList />
          <br /> <br />
          <Demo gameProps={this.state.database} />
        </div>
        <LifeCycleA />
        <br />
        <FragmentDemo />
        <br />
        <Table />
        <br /> <br />
        <ParentComp />
        <br />
        <RefsDemo />
        <br /> <br />
        <FocusInput />
        <br /> <br />
        <FRParentInput />
        <br /> <br />
        <PortalDemo />
      </div>
    );
  }
}

export default App;
