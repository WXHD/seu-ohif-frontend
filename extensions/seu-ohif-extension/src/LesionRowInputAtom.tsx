import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { RowAtomItem, RowAtomTextItem, RowAtomImageItem, RowAtomListItem, RowAtomInputItem } from './reporttype'
import styles from './stylestr'

function AspectInputAtom({ config, status }: { config: RowAtomInputItem, status: string }) {
    config.changecallback = (value: string) => { config.defaultplaceholder = value; };

    const style = styles.center_style + 'w-full h-auto text-[12px] ';

    if (status === 'expanded' || status === 'collapsed') {
        return <div className={style}>{config.defaultplaceholder}</div>
    }
    else if (status === 'editing') {
        return (
            <input
                type='text'
                placeholder={config.defaultplaceholder}
                className={style + styles.normal_border_style}
                onChange={(e) => config.changecallback(e.target.value)}
            />
        )
    }
}

export default AspectInputAtom;
