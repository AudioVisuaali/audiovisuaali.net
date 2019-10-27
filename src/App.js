import React from "react";

import Tile from "./components/Tile";
import Footer from "./components/Footer";

const infos = [
  {
    hideButton: true,
    minheight: "100vh",
    logo: "./images/preview/AVLOGOfff.png",
    background: "./images/backgrounds/W6.png",
    title: "Remember to visualize before audio!"
  },
  {
    logo: "./images/preview/Visuals-512x512.png",
    background: "./images/backgrounds/W7.png",
    title: "Visuals",
    description: "Watch videos together. Anywhere. Whenever.",
    link: "https://visuals.audiovisuaali.net/"
  },
  {
    logo: "./images/preview/Simply-Styled-TeamSpeak.ico",
    background: "./images/backgrounds/W1.png",
    title: "Teamspeak",
    description:
      "We offer teamspeak VoIP. Here YOU are permitted to create your own room! We also have a lot of icons varying from country flags to too many useless emotes! We also offer ranks which you can acquire by talking on the server or setting them from the website!",
    link: "https://audiovisuaali.net/teamspeak/ranksystem/stats/"
  },
  {
    logo: "./images/preview/whitedust.png",
    background: "./images/backgrounds/W3.png",
    title: "WHITEDUST",
    description:
      "Whitedust is for sharing computer builds. Whitedust makes it easy and effortless to share all the information about a product or/and a build.",
    link: "https://whitedust.audiovisuaali.net/"
  },
  {
    logo: "./images/preview/kjeh.png",
    background: "./images/backgrounds/W2.png",
    title: "KJEH",
    description:
      "With ShareX and Kjeh you can instantly take screenshot and share them with your friends!",
    link: "https://share.audiovisuaali.net/"
  },
  {
    logo: "./images/preview/popcorn.png",
    background: "./images/backgrounds/W4.png",
    title: "Movie night",
    description:
      "Movie night is an event where anyone is allowed to join and watch a movie together!",
    buttonText: "Coming soon!",
    btnDisabled: true
  }
];

const App = () => (
  <div className="flex-box no-select">
    {infos.map((info, index) => (
      <Tile key={index} {...info} />
    ))}
    <Footer />
  </div>
);

export default App;
