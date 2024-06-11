import { useState } from "react";

const useThem = () => {
  const [them, setThem] = useState(localStorage.getItem("them"));
  const colorThem = them ? "dark" : "light"
  // setThem(localStorage.getItem("them"));
  localStorage.setItem("them", them);

  const htmlTag = window.document.getElementsByTagName("html");
  htmlTag[0].classList.remove(colorThem)
  htmlTag[0].classList.add(them);
  console.log();
  return [them, setThem];
};

export default useThem;
