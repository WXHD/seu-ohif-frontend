import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { AnalysisConfig, AnalysisTableConfig } from './reporttype'
import styles from './stylestr';
import AnalysisTable from './AnalysisTable';

function AnalysisList({ config }: { config: AnalysisConfig }) {
    const [currentIndex, setCurrentIndex] = useState(-1);

    function onClick(index: number) {
        if (currentIndex == index) setCurrentIndex(-1);
        else setCurrentIndex(index);
    }

    return (
        <div className='flex w-full h-auto flex-col items-center'>
            <div className={styles.center_style + 'w-full h-auto text-[15px]'}>{config.title}</div>
            <div className={styles.center_style + 'w-full h-auto text-[20px]'}>{config.result}</div>
            <ul className={styles.col_style}>
                {config.tableList.map((tableConfig: AnalysisTableConfig) => {
                    tableConfig.index = config.tableList.indexOf(tableConfig);
                    return <AnalysisTable config={tableConfig} currentIndex={currentIndex} onClick={onClick} />
                })}
            </ul>
        </div>
    );
}

export default AnalysisList;
