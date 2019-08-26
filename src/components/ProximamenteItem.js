// import React from "react";
import React, { Component } from "react";


class Proximamente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      isSaved: false,
      isLiked: false
    };
  }


  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=6f26fd536dd6192ec8a57e94141f8b20')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      })
  }
  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (
        <div>Loading... </div>
      )
    } else {

 
      let base_url = 'https://image.tmdb.org/t/p/';
      let item = items.results[this.props.index];
      let title = item.original_title;
      let overview = item.overview;
      let coverImg = base_url + '/w780/' + item.backdrop_path;
      let movieBackground = {
        backgroundImage: 'url(' + coverImg + ')',
      }
      return (

        <div className="movie" style={movieBackground} index={this.props.index}>
        <div className="details">
        <h3> {title} </h3>
        </div>
        
        </div>

      )

    }

  }

}

export default Proximamente;
