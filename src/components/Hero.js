// import React from "react";
import React, { Component } from "react"

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }


  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20')
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
      let item = items.results[0];
      let title = item.original_title;
      let overview = item.overview;
      let coverImg = base_url + '/original/' + item.backdrop_path
      console.log('Item: ' + items.results[0]);
      let heroBackground = {
        backgroundImage: 'url(' + coverImg + ')',
      };
      return (



        <div style={heroBackground} aria-label={title}>
          <h3> {title} </h3>
          <p> {overview} </p>
         
        </div>

      )

    }

  }

}

export default Hero;
