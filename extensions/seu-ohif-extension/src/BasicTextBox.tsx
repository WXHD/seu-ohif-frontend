import React, { useCallback, useEffect, useState, useRef, useContext, Children } from 'react';
import styles from './stylestr'

function BasicTextBox(config: {children: string, text: string}) {
    const style = styles.center_style + 'w-full h-auto text-[' + config.text + '] ';

    return <div className={style}>{config.children}</div>
}

export default BasicTextBox;
