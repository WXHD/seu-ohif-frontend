import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { AnalysisAtomConfig } from './reporttype'
import styles from './stylestr';
import AnalysisAtom from './AnalysisAtom'

function AnalysisRow({ config }: { config: AnalysisAtomConfig[] }) {
    const style = styles.row_style + 'gap-0 ';
    
    return (
        <div className={style}>
            {config.map((atomConfig: AnalysisAtomConfig) => {
                return <AnalysisAtom config={atomConfig} />
            })}
        </div>
    )
}

export default AnalysisRow;
