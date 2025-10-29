import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { RowItem, RowAtomItem, Header } from './reporttype'
import styles from './stylestr'
import LesionRow from './LesionRow'

function LesionFieldHeader({ config, status, onClick, onDoubleClick }:
    { config: Header, status: string, onClick: () => void, onDoubleClick: () => void }) {
    return <LesionRow config={config.header} status={status} onClick={onClick} onDoubleClick={onDoubleClick}></LesionRow>
}

export default LesionFieldHeader;
