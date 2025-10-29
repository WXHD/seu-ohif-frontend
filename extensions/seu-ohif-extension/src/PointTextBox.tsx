import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import styles from './stylestr'
import TextBox from './TextBox';

function PointTextBox(config: { children: string, point: boolean, size: string }) {
    return (
        <div className='flex items-center flex-row gap-1'>
            <svg width="10" height="10" viewBox="0 0 10 10">
                <circle cx="5" cy="5" r="5" fill={config.point ? 'red' : 'none'} />
            </svg>
            <TextBox red={false} size={config.size}>{config.children}</TextBox>
        </div>
    )
}

export default PointTextBox;
