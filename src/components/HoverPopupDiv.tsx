import React, {FC, useState} from 'react';
import {ColoredDiv} from '../ui';
import Popup from './popup/Popup';
import {PopupAlignment, PopupPosition} from "./popup/enums";

const HoverPopupDiv:FC = () => {
   const [popupVisible, setPopupVisible] = useState(false);
    const divRef = React.useRef<HTMLDivElement>(null);
   const togglePopupVisibility = ()  => {
       setPopupVisible(!popupVisible);
   }

   return (<div style={{border: '1px solid orange', position: 'relative'}}>
        <ColoredDiv bgColor='blue'
                    onMouseEnter={togglePopupVisibility}
                    onMouseLeave={togglePopupVisibility}
        ref={divRef}/>
       {popupVisible && <Popup alignment={PopupAlignment.TOP}
                               position={PopupPosition.LEFT}
               element={divRef.current}>
           <div style={{height: '20px', width: '100px', overflow: 'hidden'}}>Popup for hover div</div>
        </Popup>}
    </div>);
}

export default HoverPopupDiv;
