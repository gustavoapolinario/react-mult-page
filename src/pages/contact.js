import React from "react";
import ReactDOM from "react-dom";
import Header from "components/Header";
import "./contact.scss";

class Contact extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<p>Contact page: requirement lamp nonremittal imperial snake planet lid coal patience sand witch.</p>
			</div>
			
		);
	}
}

ReactDOM.render(<Contact />, document.getElementById("root"));
