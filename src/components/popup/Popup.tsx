import React, {FC, useEffect, useRef, useState} from 'react';
import {PopupWrapper} from "./ui";
import {PopupAlignment, PopupPosition} from "./enums";
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

    const popupRef = useRef<HTMLDivElement>(null);

    const [popupHeight, setPopupHeight] = useState(0);
    const [popupWidth, setPopupWidth] = useState(0);

    const popupBoundingRectHeight =
        popupRef?.current?.getBoundingClientRect().height || 0;

    const popupBoundingRectWidth = popupRef?.current?.getBoundingClientRect().width || 0;

    const elementHeight = element?.getBoundingClientRect().height || 0;

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
    }, [alignment, possiblePositions, element]);


    const displayPopup = !!(correctedPosition && correctedAlignment && popupHeight && popupWidth);

    return <PopupWrapper ref={popupRef}
                         alignment={correctedAlignment}
                         position={correctedPosition}
                         popupHeight={popupHeight}
                         popupWidth={popupWidth}
                         visible={displayPopup}
                         elementHeight={elementHeight}>
        {children}
    </PopupWrapper>;
}

export default Popup;
