import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { AnalysisAtomConfig, AnalysisTableConfig } from './reporttype'
import styles from './stylestr';
import AnalysisRow from './AnalysisRow';

function AnalysisTable({ config, currentIndex, onClick }: { config: AnalysisTableConfig, currentIndex: number, onClick: (index: number) => void }) {
    const [isHovered, setIsHovered] = useState(false);

    const style = 'flex w-full flex-col pl-[10px] pr-[10px] pt-[10px] mb-[0px] bg-bkg-med ' + (
        config.index == currentIndex ? styles.selected_border_style : (
            isHovered ? styles.hover_border_style : styles.normal_border_style
        )
    );
    const line = 'p-[1px] bg-secondary-light ';

    return (
        <div
            className={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(config.index)}
        >
            <div>
                <div className={styles.center_style + 'w-full h-auto text-[15px]'}>{config.title}</div>
                <hr className={line}></hr>
                <hr className={line}></hr>
            </div>
            <div><AnalysisRow config={config.header} /></div>
            {config.content.map((rowConfig: AnalysisAtomConfig[]) => {
                return (
                    <div>
                        <hr className={line}></hr>
                        <AnalysisRow config={rowConfig} />
                    </div>
                )
            })}
        </div>
    )
}

export default AnalysisTable;
