import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { RowAtomItem, RowAtomTextItem, RowAtomImageItem, RowAtomListItem, RowAtomInputItem } from './reporttype'
import styles from './stylestr'

function AspectImageAtom({ config, status }: { config: RowAtomImageItem, status: string }) {
    config.changecallback = (value: string) => { };

    const style = styles.center_style + 'w-full h-auto text-[12px] ';

    if (status === 'expanded' || status === 'collapsed') {
        return <div className={style} >{config.src}</div>
    }
    else if (status === 'editing') {
        return <div className={style} >{config.src}</div>
    }
}

export default AspectImageAtom;
