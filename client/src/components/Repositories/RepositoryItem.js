import React from 'react';
import styled, { css } from 'styled-components';
import Link from '../Link';
import Icon from '../Icon';
import * as hex from 'text-hex';

const ListItem = styled.li`
	list-style: none;
	padding-bottom: 30px;
	margin-top: 30px;
	width: calc(50% - 10px);
	border-bottom: 1px solid ${props => props.theme.colors.gray};
	p {
		font-size: 0.8rem;
	}
	&:last-child {
		margin-right: auto;
	}
`;

const Container = styled.div`
	display: flex;
	${props =>
		props.wrapper &&
		css`
			background-color: white;
			padding: 20px;
			border-radius: 4px;
			border: 1px solid ${props => props.theme.colors.gray};
			flex-direction: column;
			margin-top: 10px;
		`};
	${props =>
		props.specs &&
		css`
			justify-content: space-between;
			width: 200px;
			margin-top: 20px;
		`};
	${props =>
		props.spec &&
		css`
			min-width: 50px;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
		`};
`;

const Language = styled.span`
	padding: 5px;
	margin-right: 5px;
	border-radius: 50%;
	border: 0.5px solid black;
	background-color: ${props => hex(props.color) || 'blue'};
`;

const RepositoriesItem = ({
	url,
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
				<Link href={url}>Visit repo</Link>
				<p>{description}</p>
				<Container specs>
					{language && (
						<Container spec>
							<Language color={language} />
							<p>{language}</p>
						</Container>
					)}
					<Container spec>
						<p>{watchers}</p>
						<Icon icon={'binoculars'} />
					</Container>
					<Container spec>
						<p>{stars}</p>
						<Icon icon={'star'} />
					</Container>
				</Container>
			</Container>
		</ListItem>
	);
};

export default RepositoriesItem;
