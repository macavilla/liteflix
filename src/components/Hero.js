// import React from "react";
import React, { Component } from "react"

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }
  render() {
    var { isLoaded, items } = this.state

    if (!isLoaded) {
      return <div>Loading... </div>
    } else {
      let base_url = "https://image.tmdb.org/t/p/"
      let item = items.results[0]
      let title = item.original_title
      let overview = item.overview
      let coverImg = base_url + "/original/" + item.backdrop_path
      console.log("Hero item:");
      console.log(item);
      let heroBackground = {
        backgroundImage:  "linear-gradient(to top, rgba(0, 0, 0, 0.2), #000000), url(" + coverImg + ")",
      }
      return (
        <div className="hero-item" style={heroBackground} aria-label={title}>
          <div className="details">
            <p className="original">
              ORIGINAL DE <span className="bold">LITEFLIX</span>
            </p>
            <h3 className="hero-title"> {title} </h3>

            <div class="button-wrapper">
              <button className="play">
                <i className="play-icon"></i>
                <span className="hero-btn">Reproducir</span>
              </button>
              <button className="my-list">
                <i className="add-icon"></i>
                <span className="hero-btn">Mi Lista</span>
              </button>
            </div>
            <p className="hero-overview">
              <span className="bold">Ver temporada 1</span> <br />
              {overview}{" "}
            </p>
          </div>
        </div>
      )
    }
  }
}

export default Hero
