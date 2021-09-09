import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import { format } from "d3-format";
import "./styles.css";

const SECONDS_IN_YEAR = 1 / 31536000;
const MILLISECONDS_IN_YEAR = SECONDS_IN_YEAR / 1000;
const AGE_FORMAT = ".20s";

const formatTime = (temps) => format(AGE_FORMAT)(temps);

class App extends React.Component {
  constructor(props) {
    super(props);
    const launchDate =
      -1 * (moment().unix() - moment("20210929", "YYYYMMDD").unix());

    this.state = {
      launchDate: launchDate * SECONDS_IN_YEAR
    };

    this.timer = setInterval(
      () =>
        this.setState({
          launchDate: this.state.launchDate + MILLISECONDS_IN_YEAR
        }),
      1
    );
  }
  render() {
    const { launchDate } = this.state;
    return (
      <div className="App">
        <h1>💡</h1>
        <h2>KTLO</h2>
        <p>
          Keeping the lights on presents a 5 day experiment with the best
          upcoming artist. Creating an environment from them to collaborate and
          produce the best music. Join us for a spectacle in time.
        </p>
        {formatTime(launchDate)}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
