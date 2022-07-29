import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import InteractiveElementClick from "../InteractiveElementClick";

beforeAll(() => {
    Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 800});
    Object.defineProperty(window, 'innerHeight', {writable: true, configurable: true, value: 600});
});

const popupTextStr:string = 'I am a popup'

test('renders interactive element and displays popup on click and hides it on second click', () => {
    render(<InteractiveElementClick popup={<div >{popupTextStr}</div>}>
        <div>I am an element</div>
    </InteractiveElementClick>);
    const clickableElement = screen.getByTestId('clickableInterativeElement');
    expect(clickableElement).toBeInTheDocument();
    fireEvent.click(clickableElement);
    const popupText = screen.queryByText(popupTextStr);
    expect(popupText).toBeInTheDocument();
    fireEvent.click(clickableElement);
    expect(popupText).not.toBeInTheDocument();
});
