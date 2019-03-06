import React, { Fragment } from 'react';
import styled from 'styled-components';
import SideBar from '../SideBar';

const Main = styled.main`
	width: calc(100% - 300px);
	min-height: 100vh;
	padding: 50px;
	background-color: ${props => props.theme.colors.ghostwhite};
`;

const RepositoriesList = ({ children, user, avatar, account }) => {
	console.log(user);
	return (
		<Fragment>
			<SideBar user={user} avatar={avatar} account={account} />
			<Main>{children}</Main>
		</Fragment>
	);
};

export default RepositoriesList;
