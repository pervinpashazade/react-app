import React, { useState, useContext } from 'react'
import Modal from '../../components/modal/Modal'
import RegisterForm from '../../components/register/RegisterForm'
import { UserContext } from '../../context/UserContext'

export default function Home() {

    const [isOpen, setIsOpen] = useState(false)

    const { value, setValue } = useContext(UserContext)


    return (
        <div className="row">
            <div className="col-md-12 mt-4">
                <h3>
                    {value ? value.name + " " + value.surname + ", " : null}
                    Welcome to Home Page!
                </h3>
                <p>Use the nav-bar for checking tasks</p>
                <br />
                <br />

                {!value ? <button className="button btn-custom-primary"
                    onClick={() => { setIsOpen(true) }}>
                    open modal
                </button> : null}


                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <RegisterForm />
                </Modal>
            </div>
        </div>
    )
}
