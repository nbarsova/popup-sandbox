import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import InteractiveElementHover from "../InteractiveElementHover";

beforeAll(() => {
    Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 800});
    Object.defineProperty(window, 'innerHeight', {writable: true, configurable: true, value: 600});
});

const popupTextStr:string = 'I am a popup'

test('renders interactive element and displays popup on mouse enter and hides it on mouse out', () => {
    render(<InteractiveElementHover popup={<div >{popupTextStr}</div>}>
        <div>I am an element</div>
    </InteractiveElementHover>);
    const hoverableElement = screen.getByTestId('hoverableInterativeElement');
    expect(hoverableElement).toBeInTheDocument();
    fireEvent.mouseEnter(hoverableElement);
    const popupText = screen.queryByText(popupTextStr);
    expect(popupText).toBeInTheDocument();
    fireEvent.mouseOut(hoverableElement);
    expect(popupText).not.toBeInTheDocument();
});
