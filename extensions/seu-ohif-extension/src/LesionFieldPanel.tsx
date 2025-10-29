import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { RowItem, RowAtomItem, Header, Panel } from './reporttype'
import styles from './stylestr'
import LesionRow from './LesionRow'

function LesionFieldPanel({ config, status }: { config: Panel, status: string }) {
    const line = 'p-[1px] bg-secondary-light ';

    if (status === 'expanded' || status === 'editing') {
        return (
            <>
                {config.panel.map((item: RowItem) => {
                    return (
                        <>
                            <hr className={line}></hr>
                            <LesionRow config={item} status={status} onClick={() => { }} onDoubleClick={() => { }}></LesionRow>
                        </>
                    )
                })}
            </>
        )
    }
}

export default LesionFieldPanel;
