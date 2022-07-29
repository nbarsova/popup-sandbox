import React from 'react';
import InteractiveElementHover from "../interactiveElements/InteractiveElementHover";
import {NotePopupContent} from "./ui";

const NoteCellPopup = () => {
   return <NotePopupContent>
       <p>This popup has a lot of content and positions automatically</p>
       <p>Morbi purus arcu, aliquam semper sollicitudin id, lobortis placerat enim. Praesent euismod lectus neque, id accumsan mauris vestibulum et. Etiam vestibulum odio sit amet lobortis sollicitudin. In hac habitasse platea dictumst. Vestibulum turpis leo, condimentum cursus interdum ut, semper at enim. Nunc dignissim dolor enim, at condimentum justo lobortis a. Cras eget felis in neque porttitor fermentum vel sit amet lectus. Morbi vel velit vel nibh tincidunt pharetra. Morbi condimentum odio interdum orci luctus tincidunt. Sed eu sagittis ipsum, eu varius nunc. Ut id dignissim quam, aliquam porttitor justo. Aliquam consequat aliquet lectus in auctor. Ut aliquet gravida tincidunt.</p>
       <p>Nulla facilisi. Aliquam erat volutpat. Vestibulum risus ex, ultricies in metus eu, facilisis tempus metus. Mauris convallis congue nunc, sed pellentesque neque euismod quis. Nullam at feugiat augue. Donec condimentum dictum augue, nec dignissim ligula feugiat eget. Sed tristique vehicula eleifend. Proin ligula tortor, facilisis non tortor et, congue gravida tortor. Nulla finibus dolor sapien, id mattis quam sodales sit amet.</p>
       <p>Aenean consectetur erat eget libero rutrum hendrerit. Curabitur feugiat, velit sed viverra posuere, risus neque bibendum arcu, id suscipit metus massa rhoncus eros. Fusce dapibus, nisl non egestas finibus, justo felis venenatis diam, id faucibus neque ex eu odio. Sed egestas massa porttitor, malesuada erat et, tincidunt turpis. Cras mattis pellentesque tellus, interdum tempor turpis dignissim vestibulum. Aliquam ac volutpat nulla, cursus viverra urna. Cras mattis luctus risus eleifend ornare. Suspendisse sollicitudin ac orci sed cursus. Integer ultricies accumsan scelerisque. Vestibulum et quam mi. Etiam ut porta turpis. Aliquam lorem mi, laoreet id mauris vitae, blandit bibendum ex. Duis in maximus diam, sit amet aliquet ipsum. Morbi euismod, sapien sit amet vulputate dapibus, quam odio porta purus, in vestibulum leo nisi vitae velit. Donec porta nunc vitae lobortis tempus.</p>
   </NotePopupContent>;
}
const NoteCell = () => {
    return (
        <td>
            <InteractiveElementHover popup={<NoteCellPopup/>}>...</InteractiveElementHover>
        </td>
    );
};

export default NoteCell;
