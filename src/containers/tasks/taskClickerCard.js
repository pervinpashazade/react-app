import React from 'react'
import Clicker from '../../components/clicker/Clicker'

export default function TaskClickerCard() {
    return (
        <div className="row mt-3">
            <div className="col-md-12">
                <span>Task 2</span>
            </div>
            <div className="col-md-4">
                <Clicker />
            </div>
            <div className="col-md-4">
                
                <Clicker defaultValue={5} />
            </div>
        </div>
    )
}
