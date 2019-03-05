import React from 'react';
import styled from 'styled-components';
import Form from '../Form';
import Input from '../Input/Input';
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
	return (
		<StyledForm
			className={className}
			initialValues={{ search: '' }}
			render={({ onChange }) => (
				<>
					<StyledInput
						type='search'
						name='search'
						onChange={onChange}
						placeholder='search'
					/>
					<Button type='submit' aria-label='search'>
						<Icon icon={'search'} />
					</Button>
				</>
			)}
		/>
	);
};

export default SearchBar;
