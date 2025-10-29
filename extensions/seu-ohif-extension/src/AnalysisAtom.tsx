import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { AnalysisAtomConfig } from './reporttype'
import styles from './stylestr'

function AnalysisAtom({ config }: { config: AnalysisAtomConfig }) {
    return <div className={styles.center_style + 'w-full h-auto text-[11px]'}>{config.content}</div>
}

export default AnalysisAtom;
