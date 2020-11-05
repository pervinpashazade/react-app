import React from 'react'
import './clicker.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import useClicker from '../../hooks/useClicker'

const Clicker = (props) => {
    const {defaultValue} = props;
    const [initialCount, count, countPlus, countMinus, countReset] = useClicker(defaultValue);

    return (
        <div className="card">
            <div className="clicker">
                <div className="resultNumber">
                    <span>{count}</span>
                </div>
                <div className="buttons">
                    <button className="btn btn-success" onClick={countPlus}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button className="btn btn-warning" onClick={countReset} disabled={count === initialCount}>
                        <FontAwesomeIcon icon={faSyncAlt} />
                    </button>
                    <button className="btn btn-danger" onClick={countMinus} disabled={count === 0}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Clicker;