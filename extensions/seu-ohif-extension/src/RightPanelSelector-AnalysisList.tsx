import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import AnalysisList from './AnalysisList';
import { default2 } from './yzz_test';

function RightPanelSelector_AnalysisList({ servicesManager }) {
	const [analysisConfig, setAnalysisConfig] = useState(default2);

	useEffect(() => {
		const getConfig = async () => {
			await fetch("http://localhost:10001/get_analysisconfig/")
				.then(response => {
					if (response.ok) {
						return response.json();
					}
					throw new Error('Network response was not ok.');
				})
				.then(json => {
					setAnalysisConfig(JSON.parse(JSON.stringify(json)));
				})
				.catch(error => {
					alert('AnalysisList error: ' + error.message);
				});
		};

		getConfig();
	}, []);

	return (<AnalysisList config={analysisConfig} />);
}

export default RightPanelSelector_AnalysisList;
