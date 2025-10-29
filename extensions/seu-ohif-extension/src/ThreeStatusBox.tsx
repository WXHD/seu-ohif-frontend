import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import styles from './stylestr'

function ThreeStatusBox(config: { children: any, className: string }) {
    const [isHovered, setIsHovered] = useState(false);
    const [show, setShow] = useState(false);

    const borderStyle = show ? styles.selected_border_style : (isHovered ? styles.hover_border_style : styles.normal_border_style);
    const style = config.className + borderStyle;

    return (
        <div
            className={style}
            onMouseEnter={(e) => { e.stopPropagation(); setIsHovered(true); }}
            onMouseLeave={(e) => { e.stopPropagation(); setIsHovered(false); }}
            onClick={(e) => { e.stopPropagation(); setShow(!show); }}
        >
            {config.children}
        </div>
    )
}

export default ThreeStatusBox;
