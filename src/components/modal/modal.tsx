//@ts-nocheck
'use client';
import classes from './modal.module.scss';
import { useClickAway } from 'react-use';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

import 'overlayscrollbars/overlayscrollbars.css';
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const Modal = ({ children }) => {
    const ref = useRef(null);
    const router = useRouter();

    useClickAway(ref, () => {
        router.back();
    });

    return (
        <div className={classes.modal}>
            <div ref={ref} className={classes.modal__content}>
                <div
                    onClick={() => router.back()}
                    className={classes.modal__close}
                >
                    <X />
                </div>
                <div className={classes.modal__body}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
