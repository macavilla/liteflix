// import React from "react";
import React, { Component } from "react";
import ProxItem from "./ProximamenteItem"

class Proximamente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
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

    // if (!isLoaded) {
    //   return (
    //     <div>Loading... </div>
    //   )
    // } else {


    //   let base_url = 'https://image.tmdb.org/t/p/';
    //   let item = items.results[0];
    //   let title = item.original_title;
    //   let overview = item.overview;
    //   let coverImg = base_url + '/w780/' + item.backdrop_path
      return (

        <section className="proximamente-wrapper">
          <h2>Proximamente</h2>
          <div class="movies-wrapper">
            <ProxItem index={1} />
            <ProxItem index={2} />
            <ProxItem index={3} />
            <ProxItem index={4} />
          </div>


        </section>

      )

    // }

  }

}

export default Proximamente;
