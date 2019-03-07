import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import Link from '../Link';
import SearchBar from '../SearchBar';
import { SearchContext } from '../App';

const Container = styled.header`
	width: 100%;
	padding: 10px 16px;
	background-color: ${props => props.theme.colors.darkslategray};
	position: fixed;
	top: 0;
	z-index: 10;
	display: flex;
	align-items: center;
`;

const StyledIcon = styled(Icon)`
	width: 28px;
	height: 28px;
`;

const NavigationBar = props => {
	const { dispatch } = useContext(SearchContext);

	return (
		<Container>
			<Link
				onClick={() => {
					props.history.push('/');
					dispatch({
						type: 'submited',
						payload: {
							submited: false,
							search: ''
						}
					});
				}}>
				<StyledIcon icon={'github'} />
			</Link>
			<SearchBar />
		</Container>
	);
};

export default withRouter(NavigationBar);
