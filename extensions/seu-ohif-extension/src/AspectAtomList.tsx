import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { AspectAtomConfig, AspectAtomConfigList } from './reporttype'
import AspectAtom from "./AspectAtom"
import styles from './stylestr'

function AspectAtomList({ config, currentType, onClick }: { config: AspectAtomConfigList, currentType: string, onClick: (type: string) => void }) {
    const [isHovered, setIsHovered] = useState(false);

    const style = styles.col_style + (
        config.type == currentType ? styles.selected_border_style : (
            isHovered ? styles.hover_border_style : styles.normal_border_style
        )
    );

    return (
        <div
            className={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(config.type)}
        >
            <div className={styles.center_style + 'text-[20px]'}>{config.type}</div>
            <ul className={styles.col_style}>
                {config.aspect.map((atomConfig: AspectAtomConfig) => {
                    return <AspectAtom config={atomConfig} />
                })}
            </ul>
        </div>
    );
}

export default AspectAtomList;
