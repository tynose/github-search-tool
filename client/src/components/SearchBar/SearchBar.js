import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { SearchContext } from '../App';
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

const SearchBar = props => {
	const { dispatch } = useContext(SearchContext);

	const {
		value: valueSearch,
		handleChange: handleChangeSearch,
		reset
	} = useInput({
		initialValue: '',
		type: 'submited'
	});

	console.log(props);

	const onSubmit = event => {
		event.preventDefault();
		props.history.push(`/${valueSearch}`);
		dispatch({
			type: 'submited',
			payload: {
				submited: true,
				search: valueSearch
			}
		});
		reset();
	};

	return (
		<StyledForm onSubmit={onSubmit}>
			<Button type='submit' aria-label='search'>
				<Icon icon={'search'} />
			</Button>
			<StyledInput
				type='search'
				name='search'
				placeholder='search'
				{...handleChangeSearch}
			/>
		</StyledForm>
	);
};

export default withRouter(SearchBar);
