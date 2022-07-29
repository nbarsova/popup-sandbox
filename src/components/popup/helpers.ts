import {Alignments, PopupAlignment, PopupPosition, Positions} from "./enums";

type AdjustedPopupPositionAndAlignment = {
    newPosition: PopupPosition,
    newAlignment:PopupAlignment
}
const adjustAlignment = (popupPosition: PopupPosition,
                         element: HTMLElement,
                         popupElement: HTMLElement) : PopupAlignment => {
    let adjustedAlignment;
    if (Positions.HorizontalPositions.includes(popupPosition)) {
        let placeToTheTop =
            (element.getBoundingClientRect().top + element.getBoundingClientRect().height/2)
                                                    - popupElement.getBoundingClientRect().height/2;
        let placeToTheBottom =
            (element.getBoundingClientRect().top + element.getBoundingClientRect().height/2)
                                                    + popupElement.getBoundingClientRect().height/2;

        if (placeToTheTop < 0 && placeToTheBottom > window.innerHeight) {
            adjustedAlignment = PopupAlignment.CENTER;
        } else if (placeToTheTop < 0) {
            adjustedAlignment = PopupAlignment.TOP;
        } else if (placeToTheBottom > window.innerHeight) {
            adjustedAlignment = PopupAlignment.BOTTOM;
        }

    } else if (Positions.VerticalPositions.includes(popupPosition)) {
        let placeToTheRight = (element.getBoundingClientRect().left + element.getBoundingClientRect().width/2)
            + popupElement.getBoundingClientRect().width / 2;
        let placeToTheLeft = (element.getBoundingClientRect().left + element.getBoundingClientRect().width/2)
            - popupElement.getBoundingClientRect().width / 2;

        if (placeToTheLeft < 0 && placeToTheRight > window.innerWidth) {
            adjustedAlignment = PopupAlignment.CENTER;
        } else if (placeToTheLeft < 0) {
            adjustedAlignment = PopupAlignment.LEFT;
        } else if (placeToTheRight > window.innerWidth) {
            adjustedAlignment = PopupAlignment.RIGHT;
        }
    }

    if (!adjustedAlignment) {
        console.error('There is no optimal alignment for popup, consider restyling it in order to fit in, aligning to the center');
        adjustedAlignment = PopupAlignment.CENTER;
    }
    return adjustedAlignment;
};


export const adjustPopupPositionAndAlignment = (possiblePositions: Array<PopupPosition>,
                                                alignment: PopupAlignment|undefined,
                                                element: HTMLElement,
                                                popupElement: HTMLElement): AdjustedPopupPositionAndAlignment => {
    let newPosition;
    let newAlignment = alignment;
    let popupHeight = popupElement.getBoundingClientRect().height;
    let popupWidth = popupElement.getBoundingClientRect().width;
    let currentIndex = 0;

    while (currentIndex < possiblePositions.length) {
        let preferredPosition = possiblePositions[currentIndex];

        if (preferredPosition === PopupPosition.LEFT) {
            let placeToTheLeft = element?.getBoundingClientRect().left;

            if (placeToTheLeft && placeToTheLeft > popupWidth) {
                newPosition = preferredPosition;
            } else {
                currentIndex++;
            }
        }

        if (preferredPosition === PopupPosition.RIGHT) {
            let placeToTheRight = window.innerWidth - (element?.getBoundingClientRect().left + element?.getBoundingClientRect().width);

            if (placeToTheRight > popupWidth) {
                newPosition = preferredPosition;
            } else {
                currentIndex++;
            }
        }

        if (preferredPosition === PopupPosition.TOP) {
            let placeToTheTop = element?.getBoundingClientRect().top;

            if (placeToTheTop > popupHeight) {
                newPosition = preferredPosition;
            } else {
                currentIndex++;
            }
        }

        if (preferredPosition === PopupPosition.BOTTOM) {

            let placeToTheBottom = window.innerHeight - (element?.getBoundingClientRect().top + element?.getBoundingClientRect().height);

            if (placeToTheBottom > popupHeight) {
                newPosition = preferredPosition;
            } else {
                currentIndex++;
            }
        }

        if (newPosition) break;
    }

    if (!newPosition) {
        console.error('There is no optimal position for popup, consider restyling it in order to fit in, positioning left');
        newPosition = PopupPosition.LEFT;
    }

    let alignmentPositionVertical = Positions.VerticalPositions.includes(newPosition)
        && alignment && Alignments.VerticalAlignments.includes(alignment);
    let alignmentPositionHorizontal = Positions.HorizontalPositions.includes(newPosition)
        && alignment && Alignments.HorizontalAlignments.includes(alignment);

    if (alignmentPositionVertical || alignmentPositionHorizontal) {
        console.error('Impossible combination of popup position and alignment settings,' +
            'changing alignment to center');
        newAlignment = PopupAlignment.CENTER;
    }

    if (!alignment) {
       newAlignment = adjustAlignment(newPosition, element, popupElement);
    }

    if (!newAlignment) { // this is to satisfy the ts
        newAlignment = PopupAlignment.CENTER;
    }

    return {newPosition, newAlignment};
}
