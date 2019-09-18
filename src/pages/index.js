import React from "react";
import { Helmet } from "react-helmet"

import StateManager from "../components/StateManager";



// let modalProps = {
//   triggerText: 'Launch the Modal!'
// };


export default () => (

  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Liteflix</title>
      <meta name="Description" content="Catálogo de películas dinámico." />
    </Helmet>
    <StateManager />
  </React.Fragment>

)
