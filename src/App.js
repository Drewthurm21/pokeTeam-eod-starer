import React from "react";

/*
first   - lets hook up the splash page component to the App component
          it should show on the splash page ('/') only

second  - lets hook up the navbar component to the App component
          it should show on every page besides the splash page

third   - lets hook up the homepage component to the App component
          it should show on the homepage ('/home') only

*/

function App() {

  return (
    <div className='app-wrapper flex-col'>
      <h1>Pokemon Team Builder!</h1>
    </div>
  );

}

export default App;
