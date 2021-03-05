import s from './MessagesList.module.css'
import Message from "./Message/Message";
import React from "react";


const MessagesList = (props) => {

    let messages = props.messagesData.map((m) => {
        return <Message key={m.id} text={m.message}/>
    });


    let newMessageEl = React.createRef();

    const newMessage = () => {
        props.addMessage()
    }
    const messageChange =()=>{
        let value = newMessageEl.current.value;
        props.updateMessageText(value);
    }


    return (
        <div className={s.wrapperBox}>
            <div className={s.messagesList}>
                {messages}
            </div>



            <div className={s.wrapper}>

                <div className={s.textAreaWrapper}>
                <textarea value={props.messageTextareaValue} onChange={messageChange} ref={newMessageEl} placeholder='add message'>
                </textarea>
                </div>

                <button onClick={newMessage}>Add</button>
            </div>
        </div>
    );
};

export default MessagesList;