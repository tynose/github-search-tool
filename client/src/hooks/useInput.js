import { useState } from 'react';
import PropTypes from 'prop-types';

const useInput = ({ initialValue }) => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		setValue,
		reset: () => setValue(''),
		handleChange: {
			value,
			onChange: ({ target }) => {
				setValue(target.value);
			}
		}
	};
};

useInput.propTypes = {
	initialValue: PropTypes.string
};

export default useInput;
