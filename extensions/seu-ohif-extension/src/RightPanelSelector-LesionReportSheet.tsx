import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import LesionReportSheet from './LesionReportSheet';
import styles from './stylestr';
import { default3 } from './yzz_test';

function RightPanelSelector_LesionReportSheet({ servicesManager }) {
	const [lesionConfig, setLesionConfig] = useState(default3);

	const { serviceLesionReportSheet } = servicesManager.services;
	// 订阅事件 返回取消订阅函数
	const unsubscribe = serviceLesionReportSheet.subscribeToEvents((config) => {
		setLesionConfig(config);
	});

	const [isHovered1, setIsHovered1] = useState(false);
	const [isHovered2, setIsHovered2] = useState(false);
	const [isClick1, setIsClick1] = useState(false);
	const [isClick2, setIsClick2] = useState(false);

	const button_style1 = 'flex w-[48%] flex-col pl-[10px] pr-[10px] pt-[5px] pb-[5px] mb-[0px] bg-bkg-med ' + (
		isClick1 ? styles.selected_border_style : (isHovered1 ? styles.hover_border_style : styles.normal_border_style)
	);
	const button_style2 = 'flex w-[48%] flex-col pl-[10px] pr-[10px] pt-[5px] pb-[5px] mb-[0px] bg-bkg-med ' + (
		isClick2 ? styles.selected_border_style : (isHovered2 ? styles.hover_border_style : styles.normal_border_style)
	);

	const getConfig = async () => {
		await fetch("http://localhost:10001/get_lesionconfig/")
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Network response was not ok.');
			})
			.then(json => {
				setLesionConfig(JSON.parse(JSON.stringify(json)));
			})
			.catch(error => {
				alert('LesionReportSheet error: ' + error.message);
			});
	};
	useEffect(() => {
		// 初始化时若未保存配置则从后端获取配置
		if (!serviceLesionReportSheet.broadcastconfig()) {
			// 获取配置
			getConfig();
		}
	}, []);

	// 一旦配置发生变化，调用service保存配置
	useEffect(() => {
		// 调用service 保存配置
		serviceLesionReportSheet.Hook(lesionConfig);

		return () => {
			// 取消订阅 释放资源
			serviceLesionReportSheet.unsubscribe(unsubscribe);
		};
	}, [lesionConfig]);

	return (<>
		<LesionReportSheet config={lesionConfig} />
		<div className={styles.between_style + 'w-full h-auto text-[15px] '}>
			<button
				className={button_style1}
				onMouseEnter={() => setIsHovered1(true)}
				onMouseLeave={() => setIsHovered1(false)}
				onMouseDown={() => setIsClick1(true)}
				onMouseUp={() => setIsClick1(false)}
				onClick={() => { getConfig(); serviceLesionReportSheet.Hook(lesionConfig); }}
			>更新数据</button>
			<button
				className={button_style2}
				onMouseEnter={() => setIsHovered2(true)}
				onMouseLeave={() => setIsHovered2(false)}
				onMouseDown={() => setIsClick2(true)}
				onMouseUp={() => setIsClick2(false)}
				onClick={() => { }}
			>保存修改</button>
		</div>
	</>);
}

export default RightPanelSelector_LesionReportSheet;
