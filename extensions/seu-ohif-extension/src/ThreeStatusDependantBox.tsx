import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import styles from './stylestr'

interface Props {
    children: React.ReactNode;
    className: string;
    index: number;
    show: boolean;
    onClick: (index: number) => void;
}

function ThreeStatusDependantBox({ children, className, index, show, onClick }: Props) {
    const [isHovered, setIsHovered] = useState(false);

    const style = className + (
        show ? styles.selected_border_style : (
            isHovered ? styles.hover_border_style : styles.normal_border_style
        )
    );

    return (
        <div
            className={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(index)}
        >
            {children}
        </div>
    );
}

export default ThreeStatusDependantBox;
