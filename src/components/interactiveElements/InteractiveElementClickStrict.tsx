import React, {FC, useState} from 'react';
import Popup from "../popup/Popup";
import {RelativeContainer} from "./ui";
import {InteractiveElementStrictProps} from "./InteractiveElementStrictProps";
import useOnClickOutside from "./hooks/useOnClickOutside";

const InteractiveElementClickStrict: FC<InteractiveElementStrictProps> = ({children, popup, popupPosition, popupAligment}) => {

    const [popupVisible, setPopupVisible] = useState(false);
    const divRef = React.useRef<HTMLDivElement>(null);
    const togglePopupVisibility = () => {
        setPopupVisible(!popupVisible);
    }

    useOnClickOutside(divRef, () => setPopupVisible(false));

    return (<RelativeContainer>
            <div onClick={togglePopupVisibility} ref={divRef}>
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

export default InteractiveElementClickStrict;
