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

import Waterfall from "waterfall-react";

let images = [
  ["http://lorempixel.com/1200/100/", "message0"],
  ["http://lorempixel.com/1000/800/", "message1"],
  ["http://lorempixel.com/1200/300/", "message2"],
  ["http://lorempixel.com/1200/200/", "message3"],
  ["http://lorempixel.com/1200/400/", "message4"],
  ["http://lorempixel.com/1200/300/", "message5"],
  ["http://lorempixel.com/1200/200/", "message6"],
  ["http://lorempixel.com/1200/400/", "message7"]
];

class App extends React.Component {
  constructor(props) {
    super(props);
    const launchDate = moment().unix() - moment("20211205", "YYYYMMDD").unix();

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
        <h2>KTLO1</h2>
        {/* <p>
          Keep the lights on presents a 5 day experiment with several upcoming
          artist. Creating an environment from them to collaborate and produce a
          musical and visual project.
        </p> */}
        <Waterfall column="3" image={images} />
        <p>
          <b>Featuring x</b> @shillaswazy @vantman @swellsharkband @georgenaux
          @adamm_hendrix @hughmil.es @chrisjereza
        </p>
        {/* <p>Join us for a spectacle in time ✨</p> */}
        <h3>Launch</h3>
        <span>{formatTime(launchDate)} days</span>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
