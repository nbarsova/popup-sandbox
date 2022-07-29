## Popup Gallery

This is a sandbox for popup component in react.js. 
To create an element, that would have a popup, you can reuse one of interactive elements components:
 - `src/components/interactiveElements/InteractiveElementClick` - popup appears on click, optimal position for popup is calculated automatically, based on the viewport size and element location.
 - `src/components/interactiveElements/InteractiveElementClickStrict` - popup appears on click, position and alignment for popup is user-determined, viewport and element location are ignored.
 - `src/components/interactiveElements/InteractiveElementHover` - popup appears on hover, optimal position for popup is calculated automatically, based on the viewport size and element location.
 - `src/components/interactiveElements/InteractiveElementClickStrict` - popup appears on hover, position and alignment for popup is user-determined, viewport and element location are ignored.

Interactive element components get popup content component as a required property. There are no limitations for popup content (which may lead to the overflow when the content is too big, user is responsible to style his popups with consideration).

You can also define your popup behaviour yourself, based on the example components above, don't forget to put interactive content in a relatively positioned container and pass the element ref to the popup component:
````
const divRef = React.useRef<HTMLDivElement>(null);
const [popupVisible, setPopupVisible] = useState(false);

<RelativeContainer>
    <div ref={divRef} ..  > // add some events that display/hide popup
        {children}
    </div>
    {popupVisible && <Popup
        element={divRef.current}>
        {popup}
    </Popup>}
</RelativeContainer>
````


To start the project and view some popup examples run `npm start` from the console. To run tests for interactive components, please use `npm test`.


