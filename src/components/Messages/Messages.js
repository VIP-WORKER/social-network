import DialogList from "./DialogList/DialogList";
import s from './Messages.module.css'

import MessagesListContainer from "./MesssagesList/MessagesListContainer";

const Messages = (props) => {


    return (
        <div className={`${s.wrapper} content`}>
            <DialogList dialogData={props.messagesPage.dialogData}/>


            <MessagesListContainer/>

        </div>
    );
};
export default Messages;