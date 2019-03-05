import React from 'react';

const Form = props => {
	const { children, className, ...others } = props;
	return (
		<form className={className} {...others}>
			{children}
		</form>
	);
};

export default Form;
