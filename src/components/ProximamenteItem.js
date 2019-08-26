// import React from "react";
import React, { Component } from "react"

class Proximamente extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
      isSaved: false,
      isLiked: false,
    }
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=6f26fd536dd6192ec8a57e94141f8b20"
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
      return (
        <div className="movie-wrapper" style={{ height: 100 }}>
          <div className="wrap">
            <div className="loader"></div>
          </div>
        </div>
      )
    } else {
      let base_url = "https://image.tmdb.org/t/p/"
      let item = items.results[this.props.index]
      let title = item.original_title
      let coverImg = base_url + "/w780/" + item.backdrop_path
      let genreId = item.genre_ids
      let isAdult = item.adult

      // console.log("Item proximamente:")
      // console.log(item)

      return (
        <div className="movie-wrapper">
          <img
            className="movie-cover"
            src={coverImg}
            index={this.props.index}
            alt={title + "cover"}
          />{" "}
          <div className="details">
            <div>
              <h3 className="movie-title"> {title} </h3>{" "}
              <p className="movie-details">
                98 % Coincidencia{" "}
                <span className="age-rating"> {isAdult ? "+16" : "ATP"} </span>{" "}
                1 h 30 min <br /> Suspenso{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )
    }
  }
}

export default Proximamente
