import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
	const { children, className, ...others } = props;

	return (
		<form className={className} {...others}>
			{children}
		</form>
	);
};

Form.propTypes = {
	className: PropTypes.string.isRequired,
	onSubmit: PropTypes.func
};

export default Form;
