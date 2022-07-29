export enum PopupAlignment {
    TOP='TOP',
    BOTTOM='BOTTOM',
    CENTER='CENTER',
    LEFT='LEFT',
    RIGHT='RIGHT'
};

export enum PopupPosition {
    LEFT='LEFT',
    RIGHT='RIGHT',
    TOP='TOP',
    BOTTOM='BOTTOM'
}

export const Positions = {
    HorizontalPositions: [PopupPosition.LEFT, PopupPosition.RIGHT],
    VerticalPositions: [PopupPosition.TOP, PopupPosition.BOTTOM]
}

export const Alignments = {
    HorizontalAlignments: [PopupAlignment.RIGHT, PopupAlignment.LEFT],
    VerticalAlignments: [PopupAlignment.TOP, PopupAlignment.BOTTOM]
}



