// src/App.js

import { NavBar } from "./NavBar/NavBar";
import { Heading } from "./Heading/Heading";
import { Items } from "./Items/Items";
import { Footer } from "./Footer/Footer";

const itemsData = [
  {
    imageUrl: "/iris.png",
    title: "Iris",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageUrl: "/lily.png",
    title: "Lily",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageUrl: "/chrysanthemum.png",
    title: "Chrysanthemum",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function App() {
  return (
    <>
      <NavBar />
      <Heading />
      <Items items={itemsData} />
      <Footer />
    </>
  );
}

export default App;
