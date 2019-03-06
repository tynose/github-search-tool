import React from 'react';
import styled from 'styled-components';
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
	border-radius: 4px;
	border: 1px solid ${props => props.theme.colors.gray};
`;

const RepositoriesItem = ({
	url,
	id,
	language,
	watchers,
	stars,
	descripton,
	name
}) => {
	return (
		<ListItem>
			<p>{name}</p>
			<Container>
				<Link href={url}>{url.substring(29)}</Link>
			</Container>
		</ListItem>
	);
};

export default RepositoriesItem;