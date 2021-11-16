import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className="modalBackdrop" onClick={props.onClick} />

}
const ModalOverlay = props => {
    return <div className="modal">
        <div className="modalheader">
            <h3>{props.title}</h3>
        </div>
        <div className="modalcontent" >
            <p>{props.message}</p>
            <button type="button" onClick={props.onClick}>Okay</button>
        </div>
    </div>

}

const Modal = (props) => {



    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />,
                document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.onClick} />,
                document.getElementById("overlay-root"))}
        </React.Fragment>

    )


}

export default Modal;