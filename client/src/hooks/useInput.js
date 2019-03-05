import { useState } from 'react';

const useForm = initialValue => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		setValue,
		handleChange: {
			value,
			onChange: event => {
				setValue(event.target.value);
			}
		}
	};
};

export default useForm;
