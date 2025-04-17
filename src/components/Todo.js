import Modal from "./Modal";
import Backdrop from "./Backdrop";

import { useState } from "react";

function Todo(props){
    const [modalIsOpen, SetModalIsOpen ] = useState();
    function deleteHandler(){
        SetModalIsOpen(true)
    }

    function closeHandler(){
        SetModalIsOpen(false)
    }

    return(
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Modal onCancel={closeHandler} onConfirm={closeHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeHandler} />}
    </div>
    );
}
export default Todo;