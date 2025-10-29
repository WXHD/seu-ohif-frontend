import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { RowAtomItem, RowAtomTextItem, RowAtomImageItem, RowAtomListItem, RowAtomInputItem } from './reporttype'
import styles from './stylestr'

function AspectListAtom({ config, status }: { config: RowAtomListItem, status: string }) {
    config.changecallback = (value: string) => { config.defaultchoice = config.items.indexOf(value); };

    const style = styles.center_style + 'w-full h-auto text-[12px] ';

    if (status === 'expanded' || status === 'collapsed') {
        return <div className={style}>{config.items[config.defaultchoice]}</div>
    }
    else if (status === 'editing') {
        return (
            <select
                className={styles.center_style + styles.normal_border_style + 'text-[12px] '}
                onChange={(e) => config.changecallback(e.target.value)}
            >
                {config.items.map((item: string) => {
                    return <option className='bg-bkg-med ' value={item}>{item}</option>
                })}
            </select>
        )
    }
}

export default AspectListAtom;
