import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	min-height: 40px;
	padding: 8px 14px;
	font-size: 1rem;
	border: none;
	border-radius: 4px;
	&:focus-within {
		&::placeholder {
			color: ${props => props.theme.colors.darkslateGray};
		}
	}
`;

const Input = ({ ...others }) => <StyledInput {...others} />;

export default Input;
