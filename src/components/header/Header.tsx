import React from 'react';
import HeaderPopup from "./HeaderPopup";
import {HeaderContent} from "./ui";
import {PopupAlignment, PopupPosition} from "../popup/enums";
import InteractiveElementHoverStrict from "../interactiveElements/InteractiveElementHoverStrict";

const Header = () => {
    return (
        <InteractiveElementHoverStrict popup={<HeaderPopup/>}
                                       popupPosition={PopupPosition.BOTTOM}
                                       popupAligment={PopupAlignment.LEFT}>
                <HeaderContent>
                     <h2>React popup sandbox</h2>
                </HeaderContent>
        </InteractiveElementHoverStrict>
    );
};

export default Header;
