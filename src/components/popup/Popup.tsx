import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';
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

    const [correctedAlignment, setCorrectedAlignment] = useState(alignment);

    useEffect(()=> {
        let alignmentPositionVertical = [PopupPosition.TOP, PopupPosition.BOTTOM].includes(position)
            &&[PopupAlignment.TOP, PopupAlignment.BOTTOM].includes(alignment);
        let alignmentPositionHorizonztal = [PopupPosition.LEFT, PopupPosition.RIGHT].includes(position)
            &&[PopupAlignment.LEFT, PopupAlignment.RIGHT].includes(alignment);
        if (alignmentPositionVertical || alignmentPositionHorizonztal) {
            console.error('Impossible combination of popup position and alignment settings,' +
                'changing alignment to center');
            setCorrectedAlignment(PopupAlignment.CENTER);
        }
    }, [alignment, position]);

    // @ts-ignore
    return <PopupWrapper ref={popupRef}
                         alignment={correctedAlignment}
                         position={position}
                         popupHeight={popupHeight}
                         popupWidth={popupWidth}>
        {children}
    </PopupWrapper>;
}

export default Popup;
