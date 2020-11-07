import React, { Component } from 'react'
import Card from '../../components/clicker/Clicker';
import CustomCard from '../../components/customCard/CustomCard'
import Header from './Header'

import Login from '../../components/login/Login'
import Button from '../../components/button/Button';

const testData = [
    {
        totalSummary: 1000,
        title: "Total Value of Disbursement",
        currency: "$",
        completed: 650,
        label: 'Policy',
        bgcolor: 'linear-gradient(90deg, #33D69F 0%, #50EDB8 111.47%)'
    },
    {
        totalSummary: 1750,
        title: "Total Value 2 of Disbursement",
        currency: "$",
        completed: 420,
        label: 'Claim',
        bgcolor: 'linear-gradient(90deg, #713BDB 0%, #A886E9 111.47%)'
    }

];

class ContentWrapper extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <Header />

                <div className="container-fluid">

                    <div className="row mt-3">
                        <div className="col-md-12 modal-wrap">
                            <Login />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-12">
                            <span>Task 1</span>
                        </div>
                        {testData.map((item, idx) => (

                            <div className="col-md-4">
                                <CustomCard
                                    totalSummary={item.totalSummary}
                                    title={item.title}
                                    currency={item.currency}
                                    label={item.label}
                                    completed={item.completed}
                                    bgcolor={item.bgcolor}
                                />
                            </div>

                        ))}
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-12">
                            <span>Task 2</span>
                        </div>
                        <div className="col-md-4">
                            <Card />
                        </div>
                        <div className="col-md-4">
                            <Card defaultValue={5} />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-12">
                            <span>Custom buttons:</span>
                        </div>
                        <div className="col-md-4">
                            <Button buttonStyle={'btn-custom-primary'} size={'btn-custom-medium'}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ContentWrapper;