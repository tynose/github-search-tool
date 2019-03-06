import React from 'react';
import styled, { css } from 'styled-components';
import Link from '../Link';

const ListItem = styled.li`
	list-style: none;
	padding-bottom: 30px;
	margin-top: 30px;
	border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

const Container = styled.div`
	background-color: white;
	padding: 20px;
	display: flex;
	${props =>
		props.wrapper &&
		css`
			border-radius: 4px;
			border: 1px solid ${props => props.theme.colors.gray};
			flex-direction: column;
			margin-top: 10px;
		`};
`;

const RepositoriesItem = ({
	url,
	id,
	language,
	watchers,
	stars,
	description,
	name
}) => {
	return (
		<ListItem>
			<h4>{name}</h4>
			<Container wrapper>
				<Link href={url}>{url.substring(19)}</Link>
				<p>{description}</p>
			</Container>
		</ListItem>
	);
};

export default RepositoriesItem;
