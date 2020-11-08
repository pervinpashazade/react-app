import React, { useState } from 'react'
import Modal from '../../components/modal/Modal'
import RegisterForm from '../../components/register/RegisterForm'

export default function Home() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="row">
            <div className="col-md-12 mt-4">
                <h3>Welcome to Home Page!</h3>
                <p>Use the nav-bar for checking tasks</p>
                <br />
                <br />
                {/* <Button text={'open modal'} onclic/> */}

                <button className="button btn-custom-primary"
                    onClick={() => { setIsOpen(true) }}>open modal</button>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <RegisterForm />
                </Modal>
            </div>
        </div>
    )
}
