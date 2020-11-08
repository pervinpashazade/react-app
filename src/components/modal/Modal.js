import React from 'react'
import '../register/login.css'
import '../button/button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const Modal_Style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "35px 30px",
    backgroundColor: "#fff",
    zIndex: "999",
    borderRadius: "10px"
}

const Modal_Overlay = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    minHeight: "100%",
    padding: "50px 50px",
    backgroundColor: "#1c8df7",
    zIndex: "998",
    opacity: "1"
}

const Close_Style = {
    position: "absolute",
    right: "5%",
    top: "5%",
    zIndex: "999"
}

export default function Modal({ open, children, onClose }) {

    if (!open) return null;

    return (
        // <div className="modal-wrap d-flex justify-content-center">
        <div style={Modal_Overlay}>
            <div style={Modal_Style} className={'col-md-4'}>
                <button style={Close_Style} onClick={onClose} className="button btn-custom-primary">
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                {children}
            </div>
        </div>
    )
}
