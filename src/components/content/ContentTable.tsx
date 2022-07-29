import React from 'react';
import {generateTableContent} from "./generateTableContent";
import {DescriptionCell, HeaderCell, IconCell} from "./ui";
import NoteCell from "./NoteCell";

const ContentTable = () => {

    const content = generateTableContent(20);

    const createContentRow = (contentRow:any, index:number) => {
        return <tr key={'row_'+index}>
            <IconCell>{contentRow.icon()}</IconCell>
            <DescriptionCell>{contentRow.text}</DescriptionCell>
            <td>{contentRow.date}</td>
            <NoteCell />
        </tr>
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <HeaderCell>Status</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Date</HeaderCell>
                        <HeaderCell>Note</HeaderCell>
                    </tr>
                </thead>
                <tbody>
                {content.map((contentRow, index) => createContentRow(contentRow, index))}
                </tbody>
            </table>
        </div>
    );
};

export default ContentTable;
