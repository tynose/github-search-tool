import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProfileContainer from '../ProfileContainer';
import media from '../../utils/styles/media';

const Main = styled.main`
	width: calc(100% - 300px);
	min-height: 100vh;
	padding: 50px;
	background-color: ${props => props.theme.colors.ghostwhite};
	${media.tablet`
    width: 100%;
		padding: 10px;
  `}
`;

const RepositoriesList = ({ children, user, avatar, account }) => {
	return (
		<Fragment>
			<ProfileContainer user={user} avatar={avatar} account={account} />
			<Main>{children}</Main>
		</Fragment>
	);
};

RepositoriesList.propTypes = {
	user: PropTypes.string,
	avatar: PropTypes.string,
	account: PropTypes.string
};

export default RepositoriesList;
