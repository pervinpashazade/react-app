import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const Cabinet = (props) => {

    const { value, setValue } = useContext(UserContext)


    return (
        <div className="row">
            <div className="col-md-12 mt-4">
                <h3>
                    {value ? value.name + " " + value.surname + ", " : null}
                    Welcome to Your Cabinet!
                </h3>
            </div>
        </div>
    )
}

export default Cabinet;