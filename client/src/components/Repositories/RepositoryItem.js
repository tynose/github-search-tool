import React from 'react';

const RepositoriesItem = ({ url, id, language, watchers, stars }) => {
	return (
		<div>
			{
				<>
					<p>{url}</p>
					<p>{id}</p>
					<p>{language}</p>
					<p>{watchers}</p>
					<p>{stars}</p>
				</>
			}
		</div>
	);
};

export default RepositoriesItem;
