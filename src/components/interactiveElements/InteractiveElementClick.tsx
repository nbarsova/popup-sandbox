import React, {FC, useState} from 'react';
import Popup from "../popup/Popup";
import {RelativeContainer} from "./ui";
import {InteractiveElementProps} from "./InteractiveElementProps";
import useOnClickOutside from "./hooks/useOnClickOutside";

const InteractiveElementClick: FC<InteractiveElementProps> = ({children,popup}) => {

    const [popupVisible, setPopupVisible] = useState(false);
    const divRef = React.useRef<HTMLDivElement>(null);
    const togglePopupVisibility = () => {
        setPopupVisible(!popupVisible);
    }

    useOnClickOutside(divRef, () => setPopupVisible(false));

    return (<RelativeContainer>
        <div data-testid='clickableInterativeElement' onClick={togglePopupVisibility} ref={divRef}>
            {children}
        </div>
        {popupVisible && <Popup
            element={divRef.current}>
            {popup}
        </Popup>}
    </RelativeContainer>);
}

export default InteractiveElementClick;
