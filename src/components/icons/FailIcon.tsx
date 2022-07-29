import React from 'react';
import {ReactComponent as FailSVG} from './svg/no-entry-svgrepo-com.svg';
import {IconPopupContent} from "./ui";
import InteractiveElementClickStrict from "../interactiveElements/InteractiveElementClickStrict";
import {PopupAlignment, PopupPosition} from "../popup/enums";

let color = 'firebrick';

const FailIconPopup = () => {
    return <IconPopupContent bgColor={color}>
        This popup is always on the top and aligned to the left
    </IconPopupContent>
}

const FailIcon = () => {
    return (
        <InteractiveElementClickStrict popup={<FailIconPopup/>}  popupAligment={PopupAlignment.LEFT} popupPosition={PopupPosition.TOP}>
            <FailSVG style={{height: '30px', width: '30px', color}}/>
        </InteractiveElementClickStrict>);
};

export default FailIcon;
