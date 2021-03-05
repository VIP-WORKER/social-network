import s from './DialogList.module.css'
import Dialog from "./Dialog/Dialog";


const DialogList = (props) => {

    let dialogs = props.dialogData.map(d => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    });


    return (
        <div className={s.wrapper}>

            <h2>DIALOGS</h2>

            <ul className={s.list}>

                {dialogs}

            </ul>
        </div>
    );
};
export default DialogList;