import React from "react";
import "./Banner.css";
function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://www.movievine.com/wp-content/uploads/2015/02/12098519-e1423418280985.jpg")`,
      }}
    >
      <div class="banner__contents">
        <h1 class="banner__title">Movie Name</h1>
        <div class="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 class="banner__description">
          {truncate(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue sollicitudin arcu blandit convallis non vel eros. 
            Integer bibendum arcu eu elit malesuada, eu rutrum augue eleifend. Suspendisse a facilisis lacus. Mauris ullamcorper elementum arcu sit amet tristique. 
            Quisque in ex non lacus feugiat efficitur in eget tellus. Quisque sit amet lobortis sapien. Maecenas aliquet pretium tellus, quis pulvinar nulla. 
            Aliquam feugiat diam vel diam viverra, sed fringilla odio vestibulum. Curabitur tempor interdum ipsum. Mauris ultrices tortor at sapien dapibus, id aliquam diam viverra. 
            Etiam eu venenatis purus, nec egestas nibh. Vestibulum ut lorem nec lacus convallis faucibus.`,
            150
          )}
        </h1>
      </div>
      <div class="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
