import component from './_component.module.scss';
import React from 'react';


export default function Pagination({ pageIndex = 1, onPageUpdate, maxIndex }) {

    return (
        <div className={component.Pagination}>
            <span className={'Badge ' + component.Badge} role="button" onClick={() => onPageUpdate(Math.max(0, pageIndex - 1))} disabled={(pageIndex === 1)}>
                Prev
            </span>
            <span className='Badge Badge_info'>
                {pageIndex}
            </span>
            <span className={'Badge ' + component.Badge} role="button" onClick={() => onPageUpdate(pageIndex + 1)} disabled={(pageIndex === maxIndex)}>
                Next
            </span>
        </div>
    )
}