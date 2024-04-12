import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <div className="grid-bg">
			<div className="grid-fade"></div>
			<div className="grid-lines"></div>
		</div> */}
			<App />
	</React.StrictMode>
);
