import React, {FC, useState} from 'react';
import {RelativeContainer} from "./ui";
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

    return (<RelativeContainer>
        <div data-testid='hoverableInterativeElement' onMouseEnter={showPopup}
             onMouseLeave={hidePopup}
             ref={divRef}>
            {children}
        </div>
        {popupVisible && <Popup
            element={divRef.current}>
            {popup}
        </Popup>}
    </RelativeContainer>);

};

export default InteractiveElementHover;
