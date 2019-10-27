import React from "react";
import "./Tile.css";

const toLocation = url => (window.location.href = url);

const Link = ({ disabled, onClick, children }) => (
  <button disabled={disabled} onClick={onClick} className="button-goto">
    {children || "Check out more!"}
  </button>
);

const Tile = ({
  buttonText,
  link,
  btnDisabled,
  background,
  minheight,
  title,
  description,
  logo,
  hideButton
}) => (
  <div
    className="tile"
    style={{
      backgroundImage: `url(${background})`,
      minHeight: minheight || 600
    }}
  >
    <div className="middle">
      <div className="inner">
        <img alt="asd" src={logo} />
        <h1>{title}</h1>
        <p>{description}</p>
        {!hideButton && (
          <Link disabled={btnDisabled} onClick={() => toLocation(link)}>
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default Tile;
