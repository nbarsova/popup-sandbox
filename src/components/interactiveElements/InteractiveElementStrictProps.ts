import React from "react";
import {PopupAlignment, PopupPosition} from "../popup/enums";

export interface InteractiveElementStrictProps {
    children?: React.ReactNode,
    popup: React.ReactNode,
    popupPosition: PopupPosition,
    popupAligment: PopupAlignment
}
