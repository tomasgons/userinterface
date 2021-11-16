const Modal = (props) => {

    return (
        <div className={props.className} id="modal">
            <div className="modal">

                <div className="modalheader">
                    <h3>Oops</h3>

                </div>
                <div className="modalcontent">
                    <p>{props.text}</p>
                    <button onClick={props.onClick}>Okay</button>
                </div>
            </div>
        </div>
    )


}

export default Modal;