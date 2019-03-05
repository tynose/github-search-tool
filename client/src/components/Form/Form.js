import React, { Component } from 'react';

export default class Form extends Component {
	state = {
		enabled: false,
		submited: false,
		values: this.props.initialValues
	};

	onChange = ({ target }) => {
		const { value, name } = target;

		this.setState({
			values: {
				...this.state.values,
				[name]: { value }
			}
		});
	};

	onSubmit = event => {
		event.preventDefault();
	};

	render() {
		const { children, className } = this.props;
		return (
			<form className={className} onSubmit={this.onSubmit}>
				{this.props.render({
					onChange: this.onChange,
					values: this.state.values
				})}
				{children}
			</form>
		);
	}
}
