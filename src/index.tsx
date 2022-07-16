import ReactDOM from "react-dom";
import { kcContext } from "./KcApp/kcContext";
import { KcApp } from "./KcApp";

ReactDOM.render(
  // @ts-ignore
  <KcApp kcContext={kcContext} />,
  document.getElementById("root")
);
