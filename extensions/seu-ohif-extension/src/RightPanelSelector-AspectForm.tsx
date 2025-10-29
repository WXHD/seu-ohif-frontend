import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import AspectForm from './AspectForm';
import { default1 } from './yzz_test';

function RightPanelSelector_AspectForm({ servicesManager }) {
	const [aspectConfig, setAspectConfig] = useState(default1);

	useEffect(() => {
		const getConfig = async () => {
			await fetch("http://localhost:10001/get_aspectconfig/")
				.then(response => {
					if (response.ok) {
						return response.json();
					}
					throw new Error('Network response was not ok.');
				})
				.then(json => {
					setAspectConfig(JSON.parse(JSON.stringify(json)));
				})
				.catch(error => {
					alert('AspectForm error: ' + error.message);
				});
		};

		getConfig();
	}, []);

	return (<AspectForm config={aspectConfig} />);
}

export default RightPanelSelector_AspectForm;
