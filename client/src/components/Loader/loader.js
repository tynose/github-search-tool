import React from 'react';
import styled, { keyframes } from 'styled-components';
import { flexCenter } from '../../utils/styles/mixin';

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 200px);
	${flexCenter}
`;

const Spin = keyframes`
  0% { 
    transform: rotate(0deg); 
  } 
  100% { 
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
	border-radius: 50%;
	&& {
		width: 70px;
		height: 70px;
	}
	margin: 60px auto;
	font-size: 10px;
	position: relative;
	text-indent: -9999em;
	border-top: 0.4em solid ${props => props.theme.colors.lightslateGray};
	border-right: 0.4em solid ${props => props.theme.colors.lightslateGray};
	border-bottom: 0.4em solid ${props => props.theme.colors.lightslateGray};
	border-left: 0.4em solid #ffffff;
	transform: translateZ(0);
	animation: ${Spin} 700ms infinite linear;
`;

const LoaderSpinner = () => (
	<Container>
		<Spinner />
	</Container>
);

export default LoaderSpinner;
