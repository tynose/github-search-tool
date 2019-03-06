import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Svg from '../Svg';

const Icon = ({ icon, className }) => {
	const [importedIcon, setImportedIcon] = useState('');

	useEffect(() => {
		setIconValue();
	}, [icon]);

	const setIconValue = async () => {
		const importedIcon = await import(`./lib/${icon}.svg`);

		setImportedIcon(importedIcon.default);
	};

	return <Svg className={className} src={importedIcon} />;
};

Icon.propTypes = {
	icon: PropTypes.string,
	className: PropTypes.string
};

export default Icon;
