import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { RowAtomItem, RowAtomTextItem, RowAtomImageItem, RowAtomListItem, RowAtomInputItem } from './reporttype'
import styles from './stylestr'
import LesionRowTextAtom from './LesionRowTextAtom';
import LesionRowImageAtom from './LesionRowImageAtom';
import LesionRowListAtom from './LesionRowListAtom';
import LesionRowInputAtom from './LesionRowInputAtom';

function isRowAtomTextItem(item: RowAtomItem): item is RowAtomTextItem {
    return 'text' in item;
}
function isRowAtomImageItem(item: RowAtomItem): item is RowAtomImageItem {
    return 'src' in item && 'alt' in item;
}
function isRowAtomListItem(item: RowAtomItem): item is RowAtomListItem {
    return 'items' in item && 'defaultchoice' in item;
}
function isRowAtomInputItem(item: RowAtomItem): item is RowAtomInputItem {
    return 'defaultplaceholder' in item;
}

function LesionRowAtom({ config, status }: { config: RowAtomItem, status: string }) {
    if (isRowAtomTextItem(config)) {
        return <LesionRowTextAtom config={config} status={status} />
    }
    else if (isRowAtomImageItem(config)) {
        return <LesionRowImageAtom config={config} status={status} />
    }
    else if (isRowAtomListItem(config)) {
        return <LesionRowListAtom config={config} status={status} />
    }
    else if (isRowAtomInputItem(config)) {
        return <LesionRowInputAtom config={config} status={status} />
    }
}

export default LesionRowAtom;
