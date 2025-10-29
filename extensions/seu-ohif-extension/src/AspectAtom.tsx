import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { AspectAtomConfig } from './reporttype'
import styles from './stylestr'

function AspectAtom({ config }: { config: AspectAtomConfig }) {
    const normal = !!Number(config.normal);
    const bgColor = !normal ? 'red' : 'none';

    const [isHovered, setIsHovered] = useState(false);
    const [show, setShow] = useState(false);

    const borderStyle = show ? styles.selected_border_style : (isHovered ? styles.hover_border_style : styles.normal_border_style);
    const style = styles.between_style + 'flex-row h-[40px] w-full p-[3%] text-[20px] ' + borderStyle;

    return (
        <div
            className={style}
            onMouseEnter={(e) => { e.stopPropagation(); setIsHovered(true); }}
            onMouseLeave={(e) => { e.stopPropagation(); setIsHovered(false); }}
            onClick={(e) => { e.stopPropagation(); setShow(!show); }}
        >
            <div className='flex items-center flex-row gap-1'>
                <svg width="10" height="10" viewBox="0 0 10 10">
                    <circle cx="5" cy="5" r="5" fill={bgColor} />
                </svg>
                <div className={styles.center_style + 'rounded-[5px] w-[40%] h-[80%]'}>{config.text}</div>
            </div>
            <div className={styles.center_style + 'rounded-[5px] w-[40%] h-[80%] bg-[' + bgColor + ']'}>{config.score}</div>
        </div>
    )
}

export default AspectAtom;
