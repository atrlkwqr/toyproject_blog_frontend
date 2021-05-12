//// https://lottiefiles.com/search?q=loading&category=animations&animations-page=3
import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as legoData from "../images/legoloading.json";
import * as doneData from "../images/doneloading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          this.setState({ loading: true });
          setTimeout(() => {
            this.setState({ done: true });
          }, 1000);
        });
    }, 1200);
  }
  render() {
    return (
      <div>
          <FadeIn>
            <div class="d-flex justify-content-center align-items-center">
              {!this.state.loading ? (
                <Lottie options={defaultOptions} height={500} width={500} />
              ) : (
                <Lottie options={defaultOptions2} height={500} width={500} />
              )}
            </div>
          </FadeIn>
        ) 
      </div>
    );
  }
}