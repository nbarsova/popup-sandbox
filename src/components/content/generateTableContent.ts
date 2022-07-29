import InfoIcon from "../icons/InfoIcon";
import CheckIcon from "../icons/CheckIcon";
import FailIcon from "../icons/FailIcon";

const icons = [InfoIcon, CheckIcon, FailIcon];
const texts = ['Donec suscipit lorem vitae enim scelerisque, vitae laoreet ante posuere.',
    'Pellentesque in dolor ornare, imperdiet mi at, pulvinar sem. Quisque blandit ipsum bibendum pretium accumsan.',
    'Integer eleifend eros in nisi facilisis, sit amet pharetra metus auctor. Fusce egestas dolor porttitor nunc consequat, ut vestibulum risus varius. Integer blandit lorem ac dignissim cursus.',
    'Cras nec enim sit amet erat convallis ullamcorper et quis odio.',
    'Mauris scelerisque justo at orci consectetur interdum. Pellentesque id neque quis nisl tempus varius.',
    'Curabitur eu ex consectetur, consequat lorem id, tincidunt nibh.',
    'Mauris semper urna in mauris efficitur, quis mattis metus viverra.',
    'Aenean facilisis a enim sit amet dapibus. Ut eget libero ullamcorper, placerat enim in, hendrerit purus. Aliquam vel purus lectus. Sed quis egestas tortor. Aliquam erat volutpat. Mauris ultrices semper iaculis.',
    'Aenean a pretium massa. Vestibulum vitae diam eu nisl fringilla sagittis. Aliquam vestibulum elementum quam. Nunc eu porttitor diam, et auctor lorem. Suspendisse et urna bibendum, lacinia metus id, lacinia urna. Fusce ut lacus sem. Ut vestibulum, mauris a faucibus vulputate, risus neque accumsan velit, eget imperdiet sapien purus nec purus. Aliquam ullamcorper vulputate odio, non dictum risus congue ut. Integer non gravida eros.'
];

const randomDate = (start:Date, end:Date): string => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
}

export const generateTableContent = (rowCount:number) => {
    let content = new Array(rowCount);

    for (let i=0; i<rowCount; i++) {
        let icon = icons[Math.floor(Math.random()*icons.length)];
        let text = texts[Math.floor(Math.random()*texts.length)];

        let date = randomDate(new Date(2022, 0, 1), new Date());
        content.push({icon, text, date});
    }
    return content;
}
