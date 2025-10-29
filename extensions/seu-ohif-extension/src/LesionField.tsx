import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { RowItem, RowAtomItem, Header, FieldItem } from './reporttype'
import styles from './stylestr'
import LesionFieldHeader from './LesionFieldHeader'
import LesionFieldPanel from './LesionFieldPanel'

function LesionField({ config, currentIndex, onClick }: { config: FieldItem, currentIndex: number, onClick: (index: number) => void }) {
    const [status, setStatus] = useState(config.status);
    const [isHovered, setIsHovered] = useState(false);

    const style = 'flex w-full flex-col pl-[10px] pr-[10px] pt-[10px] mb-[0px] bg-bkg-med ' + (
        config.index == currentIndex ? styles.selected_border_style : (
            isHovered ? styles.hover_border_style : styles.normal_border_style
        )
    );

    function onOneClick() {
        if (status === 'expanded') setStatus('collapsed');
        else setStatus('expanded');
    }

    function onDoubleClick() {
        setStatus('editing');
    }

    return (
        <div
            className={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(config.index)}
        >
            <LesionFieldHeader config={config.header} status={status} onClick={onOneClick} onDoubleClick={onDoubleClick}></LesionFieldHeader>
            <LesionFieldPanel config={config.panel} status={status}></LesionFieldPanel>
        </div>
    )
}

export default LesionField;
