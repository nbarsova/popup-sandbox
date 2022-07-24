import React, {FC, useLayoutEffect, useRef, useState} from 'react';
import {PopupWrapper} from "./ui";
import {PopupAlignment, PopupPosition} from "./enums";

interface PopupProps {
    children?: React.ReactNode,
    alignment: PopupAlignment,
    position: PopupPosition,
    element: HTMLElement|null
}

const Popup: FC<PopupProps> = ({children, alignment, element, position}) => {

    const popupRef = useRef();

    const [popupHeight, setPopupHeight] = useState(0);
    const [popupWidth, setPopupWidth] = useState(0);

    useLayoutEffect(() => {
         // @ts-ignore
        setPopupHeight(popupRef?.current?.getBoundingClientRect().height);
        // @ts-ignore
        setPopupWidth(popupRef?.current?.getBoundingClientRect().width);

    },[popupRef]);
    console.log()
    // @ts-ignore
    return <PopupWrapper ref={popupRef}
                         alignment={alignment}
                         position={position}
                         popupHeight={popupHeight}
                         popupWidth={popupWidth}>
        {children}
    </PopupWrapper>;
}

export default Popup;
