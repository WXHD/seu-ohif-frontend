import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { AspectAtomConfig, AspectAtomConfigList, AspectConfig } from './reporttype'
import AspectAtomList from "./AspectAtomList"
import styles from './stylestr'

function AspectForm({ config }: { config: AspectConfig }) {
    const [currentType, setCurrentType] = useState('right');

    function onClick(type: string) {
        setCurrentType(type);
    }

    return (
        <div className={styles.col_style}>
            <h1 className={styles.title_style}>Aspect Score</h1>
            <div className={styles.center_style + 'text-[40px]'}>{(currentType == 'right' ? config.rightScore : config.leftScore) + "“"}</div>
            <div className={styles.row_style}>
                <AspectAtomList config={config.rightAspect} currentType={currentType} onClick={onClick} />
                <AspectAtomList config={config.leftAspect} currentType={currentType} onClick={onClick} />
            </div>
        </div>
    );
}

export default AspectForm;
