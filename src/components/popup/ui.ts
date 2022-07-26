import styled from 'styled-components';
import {PopupAlignment, PopupPosition} from "./enums";

interface PopupWrapperProps {
    popupHeight: number;
    popupWidth: number;
    alignment: PopupAlignment | undefined,
    position: PopupPosition | undefined,
    elementHeight: number,
    visible: boolean
};

export const PopupWrapper = styled.div<PopupWrapperProps>`
    background-color: lightcyan;
    position: absolute;
    z-index: 10;
    left: calc(100% + 6px);
    top: 6px;
  
    ${({ visible }) => {
       if (!visible) return 'visibility: hidden;'
    }};
  
    ${({ visible, alignment,popupHeight, position, popupWidth }) => {
        if (visible && position) {
            if (alignment === PopupAlignment.BOTTOM) return 'top: calc(100% - ' + popupHeight + 'px);';
            else if (alignment === PopupAlignment.RIGHT) return 'right: 6px; left:unset;';
            else if (alignment === PopupAlignment.LEFT) return 'left: 6px;';
            else if (alignment === PopupAlignment.CENTER) {
                if ([PopupPosition.LEFT, PopupPosition.RIGHT].includes(position)) {
                    return 'top: calc(50% - ' + popupHeight / 2 + 'px);';
                }
                if ([PopupPosition.TOP, PopupPosition.BOTTOM].includes(position)) {
                    return 'left: calc(50% - ' + popupWidth / 2 + 'px);';
                }
            }
        }
    }};

    ${({ visible, position, popupHeight, elementHeight }) => {
      if (visible) {
          if (position === PopupPosition.LEFT) return 'right: calc(100% + 6px);left:unset;';
          else if (position === PopupPosition.TOP) return 'top: '+(-popupHeight-6)+'px;'
          else if (position === PopupPosition.BOTTOM) return 'top:'+(elementHeight+6)+'px;'
    }
}};
`;
