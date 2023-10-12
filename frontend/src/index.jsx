import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "../src/styles/Footer.scss";
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
