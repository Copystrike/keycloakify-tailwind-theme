import ReactDOM from "react-dom";
import { kcContext } from "./KcApp/kcContext";
import { KcApp } from "./KcApp";
import "global.css";

ReactDOM.render(
  // @ts-ignore
  <KcApp kcContext={kcContext} />,
  document.getElementById("root")
);
