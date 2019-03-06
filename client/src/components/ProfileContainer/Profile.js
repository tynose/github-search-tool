import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
import github from '../../assets/images/GitHub.png';
import Link from '../Link';
import media from '../../utils/styles/media';

const StyledImage = styled(Image)`
	height: 250px;
	width: 250px;
	padding-bottom: 30px;
	margin-bottom: 30px;
	border-bottom: 1px solid ${props => props.theme.colors.gray};
	${media.tablet`
		height: 75px;
		width: 75px;
		border-bottom: none;
		padding: 0;
		margin: 0;
  `}
`;

const Figure = styled.figure`
	display: flex;
	flex-direction: column;
	${media.tablet`
		flex-direction: row;
		width: 100%;	
  `}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	${media.tablet`
		margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid ${props => props.theme.colors.gray};
		justify-content: center;
  `}
`;

const Profile = ({ user, avatar, account }) => {
	return (
		<Figure>
			<StyledImage src={avatar} alt={avatar} />
			<Container>
				<span>{user}</span>
				<Link href={account}>Visit their github</Link>
			</Container>
		</Figure>
	);
};

Profile.defaultProps = {
	user: 'Github',
	avatar: github,
	account: 'https://github.com'
};

export default Profile;
