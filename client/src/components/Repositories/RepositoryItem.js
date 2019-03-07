import React from 'react';
import styled, { css } from 'styled-components';
import Link from '../Link';
import Icon from '../Icon';
import * as hex from 'text-hex';
import media from '../../utils/styles/media';

const ListItem = styled.li`
	list-style: none;
	padding-bottom: 30px;
	margin-top: 30px;
	width: calc(50% - 10px);
	border-bottom: 1px solid ${props => props.theme.colors.gray};
	p {
		font-size: 0.8rem;
	}
	${media.desktop`
		width: 100%;
  `}
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
			margin-top: 20px;
			flex-wrap: wrap;
		`};
	${props =>
		props.spec &&
		css`
			min-width: 40px;
			margin-right: 25px;
			display: flex;
			justify-content: space-between;
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
}) => (
	<ListItem>
		<h5>{name}</h5>
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
					<Icon icon={'binoculars'} />
					<p>{watchers}</p>
				</Container>
				<Container spec>
					<Icon icon={'star'} />
					<p>{stars}</p>
				</Container>
			</Container>
		</Container>
	</ListItem>
);

export default RepositoriesItem;
