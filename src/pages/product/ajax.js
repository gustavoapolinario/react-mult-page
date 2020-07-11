import React from "react";
import ReactDOM from "react-dom";
import Header from "components/Header";

class Ajax extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<p>Ajax page: ajax is a cleaner product or a tecnologic issue?</p>
			</div>
			
		);
	}
}

ReactDOM.render(<Ajax />, document.getElementById("root"));
