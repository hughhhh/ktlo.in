import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import { format } from "d3-format";
import "./styles.css";

const SECONDS_IN_YEAR = 1 / 31536000;
const SECONDS_IN_DAY = 1 / 86400;

const MILLISECONDS_IN_YEAR = SECONDS_IN_YEAR / 1000;
const MILLISECONDS_IN_DAY = SECONDS_IN_DAY / 1000;
const AGE_FORMAT = ".20s";

const formatTime = (temps) => format(AGE_FORMAT)(temps);

class App extends React.Component {
  constructor(props) {
    super(props);
    const launchDate = moment().unix() - moment("20210929", "YYYYMMDD").unix();

    this.state = {
      launchDate: launchDate * SECONDS_IN_DAY
    };

    this.timer = setInterval(
      () =>
        this.setState({
          launchDate: Math.abs(this.state.launchDate - MILLISECONDS_IN_DAY)
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
          produce the best music.
        </p>

        <p>
          <b>Featuring x</b> @shilla @vern @swellshark @georgenaux
        </p>
        <p>Join us for a spectacle in time ✨</p>
        <h3>Launch</h3>
        <span>{formatTime(launchDate)} days</span>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
