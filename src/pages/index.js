import React from "react";
import ReactDOM from "react-dom";
import Header from "components/Header";
import "./index.scss";

class Index extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<p>Index page: entertain hour diplomat automatic grind steep senior pedestrian output wisecrack skip.</p>
			</div>
			
		);
	}
}

ReactDOM.render(<Index />, document.getElementById("root"));
