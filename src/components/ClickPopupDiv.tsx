import React, {FC, useState} from 'react';
import {ColoredDivPadding} from '../ui';
import Popup from './popup/Popup';
import {PopupAlignment, PopupPosition} from "./popup/enums";

const ClickPopupDiv:FC = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const divRef = React.useRef<HTMLDivElement>(null);
    const togglePopupVisibility = ()  => {
        setPopupVisible(!popupVisible);
    }

   return (<div style={{position: 'relative'}}>

        <ColoredDivPadding bgColor='crimson'
            onClick={togglePopupVisibility} ref={divRef} />
           {popupVisible && <Popup
                   alignment={PopupAlignment.RIGHT}
                   position={PopupPosition.TOP}
                   element={divRef.current}>
               <div style={{backgroundColor: 'yellow',
               height: '120px', width: '200px'}}>Popup for click div</div>
        </Popup>}
    </div>);
}

export default ClickPopupDiv;
