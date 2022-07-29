import React, {FC, useState} from 'react';
import {RelativeContainer} from "./ui";
import Popup from "../popup/Popup";
import {InteractiveElementStrictProps} from "./InteractiveElementStrictProps";

const InteractiveElementHoverStrict: FC<InteractiveElementStrictProps> = ({children, popup, popupPosition, popupAligment}) => {

    const [popupVisible, setPopupVisible] = useState(false);
    const divRef = React.useRef<HTMLDivElement>(null);
    const showPopup = () => {
        setPopupVisible(true);
    }
    const hidePopup = () => {
        setPopupVisible(false)
    }

    return (<RelativeContainer>
        <div onMouseEnter={showPopup}
             onMouseLeave={hidePopup}
             ref={divRef}>
            {children}
        </div>
        {popupVisible && <Popup
            element={divRef.current}
            alignment={popupAligment}
            possiblePositions={[popupPosition]}>
            {popup}
        </Popup>}
    </RelativeContainer>);
};

export default InteractiveElementHoverStrict;
