import React, {FC, useState} from 'react';
import {RelativeContainer, SelectablePopupContent} from "./ui";
import Popup from "../popup/Popup";
import {InteractiveElementProps} from "./InteractiveElementProps";

const InteractiveElementHover: FC<InteractiveElementProps> = ({children, popup}) => {
    const [popupVisible, setPopupVisible] = useState(false);
    const divRef = React.useRef<HTMLDivElement>(null);
    const showPopup = () => {
        setPopupVisible(true);
    }
    const hidePopup = () => {
        setPopupVisible(false)
    }

    return (<RelativeContainer onMouseEnter={showPopup}
                               onMouseLeave={hidePopup}>
        <div data-testid='hoverableInterativeElement'
             ref={divRef}>
            {children}
        </div>
        {popupVisible &&
            <SelectablePopupContent onMouseEnter={showPopup}>
                <Popup element={divRef.current}>
                    {popup}
                </Popup>
            </SelectablePopupContent>}
    </RelativeContainer>);

};

export default InteractiveElementHover;
