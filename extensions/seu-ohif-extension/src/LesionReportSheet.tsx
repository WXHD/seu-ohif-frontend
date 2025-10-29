import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { FieldItem, ReportSheet, RowAtomListItem } from './reporttype'
import styles from './stylestr'
import LesionField from './LesionField'

function LesionReportSheet({ config }: { config: ReportSheet }) {
    const [currentIndex, setCurrentIndex] = useState(-1);
    

    function onClick(index: number) {
        if (currentIndex == index) setCurrentIndex(-1);
        else setCurrentIndex(index);
    }

    return (
        <div className='flex w-full h-auto flex-col items-center'>
            <div className={styles.center_style + 'w-full h-auto text-[15px] '}>{config.title}</div>
            <div className={styles.center_style + 'w-full h-auto text-[20px] '}>{config.result}</div>
            <ul className={styles.col_style}>
                {config.field.map((item: FieldItem) => {
                    item.index = config.field.indexOf(item);
                    return <LesionField config={item} currentIndex={currentIndex} onClick={onClick}></LesionField>
                })}
            </ul>
        </div>
    )
}

export default LesionReportSheet;
