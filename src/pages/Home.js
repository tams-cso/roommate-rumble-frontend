import React from 'react';

function Home() {
    return (<div id="TitleCard">
        <h1 id="TitleText">matchTAMS</h1>
        <div id="Text">
          What is matchTAMS (name pending)?
          <ul id="Left">matchTAMS is an application designed to match incoming students with their most compatible roommate.</ul>
          <ul id="Left">By filling out a quick questionaire, you will be <i>matched</i> up with your fellow classmates by our compatibility score.</ul>
          <ul id="Left">The compatibility score was developed by data, personal anecdotes, and online surveys.</ul>
        </div>
        <a href="./dashboard"><button id="LogIn">Log In</button></a>
    </div>
  )
}

export default Home;
