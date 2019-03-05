import React from 'react';
import styled from 'styled-components';
import Form from '../Form';
import useInput from '../../hooks/useInput';
import Input from '../Input';
import Icon from '../Icon';

const StyledForm = styled(Form)`
	width: 65%;
	position: relative;
	margin: 0 50px;
`;

const StyledInput = styled(Input)`
	width: 100%;
	padding: 8px 14px 8px 40px;
	background-color: ${props => props.theme.colors.lightslategray};
	&::placeholder {
		color: ${props => props.theme.colors.gray};
	}
	&:focus-within {
		&::placeholder {
			color: ${props => props.theme.colors.darkslateGray};
		}
		background-color: white;
	}
`;

const Button = styled.button`
	top: 25%;
	left: 10px;
	width: 20px;
	height: 20px;
	position: absolute;
	background-color: transparent;
	border: none;
`;

const SearchBar = ({ className }) => {
	const { value: valueSearch, handleChange: handleChangeSearch } = useInput('');

	const onSubmit = event => {
		console.log(valueSearch);

		event.preventDefault();
	};

	return (
		<StyledForm className={className} onSubmit={onSubmit}>
			<Button type='submit' aria-label='search'>
				<Icon icon={'search'} />
			</Button>
			<StyledInput
				type='search'
				name='search'
				{...handleChangeSearch}
				placeholder='search'
			/>
		</StyledForm>
	);
};

export default SearchBar;
