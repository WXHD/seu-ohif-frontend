import React, { useCallback, useEffect, useState, useRef, useContext, Children } from 'react';
import styles from './stylestr'

function TextBox(config: {children: string, red: boolean, size: string }) {
    const bgColor = config.red ? 'bg-[red] ' : 'bg-[normal] ';
    const scoreStyle = styles.center_style + 'rounded-[5px] w-[40%] h-[80%] ' + bgColor + 'text-[' + config.size + '] ';

    return <div className={scoreStyle}>{config.children}</div>
}

export default TextBox;
