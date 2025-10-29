import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { RowItem, RowAtomItem } from './reporttype'
import styles from './stylestr'
import LesionRowAtom from './LesionRowAtom'

function LesionRow({ config, status, onClick, onDoubleClick }:
    { config: RowItem, status: string, onClick: () => void, onDoubleClick: () => void }) {
    return (
        <div
            className={styles.between_style}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
        >
            <div className={styles.between_style}>
                {config.left.map((item: RowAtomItem) => {
                    return <LesionRowAtom config={item} status={status}></LesionRowAtom>
                })}
            </div>
            <div className={styles.between_style}>
                {config.right.map((item: RowAtomItem) => {
                    return <LesionRowAtom config={item} status={status}></LesionRowAtom>
                })}
            </div>
        </div>
    )
}

export default LesionRow;
