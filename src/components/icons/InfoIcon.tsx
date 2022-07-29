import React from 'react';
import { ReactComponent as InfoSVG } from './svg/information-svgrepo-com.svg';
import InteractiveElementClick from "../interactiveElements/InteractiveElementClick";
import {IconPopupContent} from "./ui";

const color = 'lightblue';

const InfoIconPopup = () => {
    return <IconPopupContent bgColor={color}>
        Icon popups come on click and have individual styling
    </IconPopupContent>
}
const InfoIcon = () => {
    return (<InteractiveElementClick popup={<InfoIconPopup/>}>
            <InfoSVG style={{height: '30px', width: '30px', color}}/>
        </InteractiveElementClick>
    );
};

export default InfoIcon;
