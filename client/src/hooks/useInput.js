import { useState } from 'react';

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

export default useInput;
