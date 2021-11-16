const Modal = (props) => {

    return (
        <div className='modalcontainer' id="modal" onClick={props.onClick}>
            <div className="modal">

                <div className="modalheader">
                    <h3>{props.title}</h3>
                </div>
                <div className="modalcontent" >
                    <p>{props.message}</p>
                    <button type="button" onClick={props.onClick}>Okay</button>
                </div>
            </div>
        </div>
    )


}

export default Modal;