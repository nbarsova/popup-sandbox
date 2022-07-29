import React from 'react';
import { ReactComponent as CheckSVG } from './svg/white-heavy-check-mark-svgrepo-com.svg';
import {IconPopupContent} from "./ui";
import InteractiveElementClick from "../interactiveElements/InteractiveElementClick";

const FailIconPopup = () => {
    return <IconPopupContent bgColor='green'>
        <CheckSVG style={{height: '10px', width: '10px', color: 'green'}}/> The popup can have images and svgs inside
    </IconPopupContent>
}

const CheckIcon = () => {
    return (<InteractiveElementClick popup={<FailIconPopup/>}>
        <CheckSVG style={{height: '30px', width: '30px', color: 'green'}}/>
    </InteractiveElementClick>);
};

export default CheckIcon;
