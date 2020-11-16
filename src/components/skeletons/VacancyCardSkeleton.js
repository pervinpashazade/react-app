import React from 'react'
import Skeleton from 'react-loading-skeleton'

const VacancyCardSkeleton = () => {
    return (
        <div className="row mt-5 ml-3">
            <div className="col-md-6 mb-4">
                <h4>
                    <Skeleton duration={1} height={25} width={450} />
                </h4>
                <p>
                    <Skeleton height={25} width={360} />
                </p>
                <p>
                    <Skeleton height={25} width={230} />
                </p>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Skeleton height={25} width={290} />
                    </li>
                    <li>
                        <Skeleton height={25} width={"25%"} />
                    </li>
                </ul>
            </div>
            <div className="col-md-6 mb-4">
                <h4>
                    <Skeleton duration={1} height={25} width={450} />
                </h4>
                <p>
                    <Skeleton height={25} width={360} />
                </p>
                <p>
                    <Skeleton height={25} width={230} />
                </p>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Skeleton height={25} width={290} />
                    </li>
                    <li>
                        <Skeleton height={25} width={"25%"} />
                    </li>
                </ul>
            </div>
            <div className="col-md-6 mb-4">
                <h4>
                    <Skeleton duration={1} height={25} width={450} />
                </h4>
                <p>
                    <Skeleton height={25} width={360} />
                </p>
                <p>
                    <Skeleton height={25} width={230} />
                </p>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Skeleton height={25} width={290} />
                    </li>
                    <li>
                        <Skeleton height={25} width={"25%"} />
                    </li>
                </ul>
            </div>
            <div className="col-md-6 mb-4">
                <h4>
                    <Skeleton duration={1} height={25} width={450} />
                </h4>
                <p>
                    <Skeleton height={25} width={360} />
                </p>
                <p>
                    <Skeleton height={25} width={230} />
                </p>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Skeleton height={25} width={290} />
                    </li>
                    <li>
                        <Skeleton height={25} width={"25%"} />
                    </li>
                </ul>
            </div>
            <div className="col-md-6 mb-4">
                <h4>
                    <Skeleton duration={1} height={25} width={450} />
                </h4>
                <p>
                    <Skeleton height={25} width={360} />
                </p>
                <p>
                    <Skeleton height={25} width={230} />
                </p>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Skeleton height={25} width={290} />
                    </li>
                    <li>
                        <Skeleton height={25} width={"25%"} />
                    </li>
                </ul>
            </div>
            <div className="col-md-6 mb-4">
                <h4>
                    <Skeleton duration={1} height={25} width={450} />
                </h4>
                <p>
                    <Skeleton height={25} width={360} />
                </p>
                <p>
                    <Skeleton height={25} width={230} />
                </p>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Skeleton height={25} width={290} />
                    </li>
                    <li>
                        <Skeleton height={25} width={"25%"} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default VacancyCardSkeleton;