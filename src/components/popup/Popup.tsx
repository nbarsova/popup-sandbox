import React, {FC, useEffect, useRef, useState} from 'react';
import {PopupWrapper} from "./ui";
import {Alignments, PopupAlignment, PopupPosition, Positions} from "./enums";
import {adjustPopupPositionAndAlignment} from "./helpers";

interface PopupProps {
    children?: React.ReactNode,
    alignment?: PopupAlignment,
    possiblePositions?: Array <PopupPosition>,
    element: HTMLElement|null
}

const Popup: FC<PopupProps> = ({children,
                                   alignment,
                                   element,
                                   possiblePositions= [PopupPosition.LEFT,
                                       PopupPosition.RIGHT,
                                       PopupPosition.TOP,
                                       PopupPosition.BOTTOM]}) => {

    const popupRef = useRef();

    const [popupHeight, setPopupHeight] = useState(0);
    const [popupWidth, setPopupWidth] = useState(0);

    // @ts-ignore
    const popupBoundingRectHeight = popupRef?.current?.getBoundingClientRect().height;
    // @ts-ignore
    const popupBoundingRectWidth = popupRef?.current?.getBoundingClientRect().width;

    useEffect(() => {
        setPopupHeight(popupBoundingRectHeight);
        setPopupWidth(popupBoundingRectWidth);
    },[popupBoundingRectHeight, popupBoundingRectWidth]);

    const [correctedPosition, setCorrectedPosition] = useState<PopupPosition | undefined>(undefined)
    const [correctedAlignment, setCorrectedAlignment] = useState<PopupAlignment | undefined>(alignment);

    useEffect(()=> {
        if (element && popupRef.current) {
                const {newPosition, newAlignment} = adjustPopupPositionAndAlignment(possiblePositions,
                    alignment,
                    element,
                    popupRef.current);
                setCorrectedPosition(newPosition);
                setCorrectedAlignment(newAlignment);
            }
    }, [alignment, possiblePositions, popupRef.current]);

    // @ts-ignore
    return <PopupWrapper ref={popupRef}
                         alignment={correctedAlignment}
                         position={correctedPosition}
                         popupHeight={popupHeight}
                         popupWidth={popupWidth}
                         elementHeight={element?.getBoundingClientRect().height}>
        {children}
    </PopupWrapper>;
}

export default Popup;
