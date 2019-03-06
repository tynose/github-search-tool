import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import Profile from './Profile';
import media from '../../utils/styles/media';

const Aside = styled.aside`
	justify-content: center;
	display: flex;
	width: 300px;
	border-right: 0.5px solid ${props => props.theme.colors.gray};
	${media.tablet`
		display: none;
  `}
`;

const Container = styled.div`
	display: flex;
	height: 100%;
	width: 275px;
	top: 100px;
	position: fixed;
	align-items: center;
	flex-direction: column;
	${props =>
		props.tablet &&
		css`
			display: none;
		`};
	${media.tablet`
		top: 68px;
		width: 100%;
		padding: 7px;
		height: auto;
		background-color: white;
		display: flex;
		border-bottom: 1px solid ${props => props.theme.colors.gray}
  `}
`;

const ProfileContainer = ({ ...others }) => {
	return (
		<Fragment>
			<Aside>
				<Container>
					<Profile {...others} />
				</Container>
			</Aside>
			<Container tablet>
				<Profile {...others} />
			</Container>
		</Fragment>
	);
};

export default ProfileContainer;
