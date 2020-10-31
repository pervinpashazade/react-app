import React, { Component } from 'react'
import '../../assets/css/containers/layout/contentwrapper.css'
import CustomCard from '../../components/CustomCard'
import Header from './Header'

const testData = [
    {
        totalSummary: 1000,
        title: "Total Value of Disbursement",
        currency: "$",
        completed: 400,
        label: 'Policy',
        bgcolor: 'linear-gradient(90deg, #33D69F 0%, #50EDB8 111.47%)'
    },
    {
        totalSummary: 1050,
        title: "Total Value 2 of Disbursement",
        currency: "$",
        completed: 460,
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
                    <div className="row mt-4">

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
                </div>
            </div>
        )
    }
}

export default ContentWrapper;