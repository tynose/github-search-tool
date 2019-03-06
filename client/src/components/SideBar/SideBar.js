import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
import github from '../../assets/images/GitHub.png';
import Link from '../Link';

const Aside = styled.aside`
	justify-content: center;
	display: flex;
	width: 300px;
	border-right: 0.5px solid ${props => props.theme.colors.gray};
`;

const Container = styled.div`
	display: flex;
	height: 100%;
	width: 275px;
	top: 100px;
	position: fixed;
	align-items: center;
	flex-direction: column;
`;

const StyledImage = styled(Image)`
	height: 250px;
	width: 250px;
	padding-bottom: 30px;
	margin-bottom: 30px;
	border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

const Figure = styled.figure`
	display: flex;
	flex-direction: column;
`;

const SideBar = ({ user, avatar, account }) => {
	return (
		<Aside>
			<Container>
				<Figure>
					<StyledImage src={avatar} alt={avatar} />
					<span>{user}</span>
					<Link href={account}>Visit their github</Link>
				</Figure>
			</Container>
		</Aside>
	);
};

SideBar.defaultProps = {
	user: 'Github',
	avatar: github,
	account: 'https://github.com'
};

export default SideBar;
