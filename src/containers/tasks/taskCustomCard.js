import React from 'react'
import CustomCard from '../../components/customCard/CustomCard'

export default function taskCustomCard() {

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

    return (
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
    )
}
