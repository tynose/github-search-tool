import { useState, useContext } from 'react';
import { SearchContext } from '../components/App';

const useInput = ({ initialValue, type }) => {
	const [value, setValue] = useState(initialValue);
	const dispatch = useContext(SearchContext).dispatch;

	return {
		value,
		setValue,
		handleChange: {
			value,
			onChange: ({ target }) => {
				dispatch({ type, payload: target.value });
				setValue(target.value);
			}
		}
	};
};

export default useInput;
