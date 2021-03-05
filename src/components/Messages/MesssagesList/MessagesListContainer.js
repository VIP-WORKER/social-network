import MessagesList from "./MessagesList";
import {connect} from "react-redux";

import {addMessage, updateMessageText} from "../../../Redux/messagesReducer";


const mapStateToProps = (state) => {
    return {
        messageTextareaValue: state.messagesPage.messageTextareaValue,
        messagesData:state.messagesPage.messagesData,
        dialogData:state.messagesPage.dialogData
    }
}




const MessagesListContainer = connect(mapStateToProps,{
    addMessage,
    updateMessageText
})(MessagesList)




export default MessagesListContainer;