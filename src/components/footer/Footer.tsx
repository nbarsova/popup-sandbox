import React from 'react';
import {ClickMe, Copyright, FooterContent} from "./ui";
import FooterPopup from "./FooterPopup";
import InteractiveElementClick from "../interactiveElements/InteractiveElementClick";

const Footer = () => {
    return (
        <InteractiveElementClick popup={<FooterPopup/>}>
            <FooterContent>
                <Copyright>&copy; Natalia Barsova, 2022</Copyright>
                <ClickMe>Don't forget to click here!</ClickMe>
            </FooterContent>
        </InteractiveElementClick>
    );
};

export default Footer;
