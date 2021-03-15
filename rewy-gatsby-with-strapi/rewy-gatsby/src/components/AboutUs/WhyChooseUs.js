import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import howItWork from '../../assets/images/how-its-work.png'

const WhyChooseUs = () => {
    return (
        <section className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src={starIcon} alt="banner" /> 
                                Customer focused
                            </span>
                            <h2>Why Choose Us?</h2>
                            <p>We focus on tranforming our customers ideas into a reality, and reducing costs while doing so. </p>
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                        1
                                    </div>
                                    <h3>Project Detection</h3>
                                    <p>We identify optimazation and automation opertunities to save our customers time and money.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        1
                                    </div>
                                    <h3>Agile Development</h3>
                                    <p>We adapt to our customers needs, and stay agile for when there needs change.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        2
                                    </div>
                                    <h3>Elastic Teams</h3>
                                    <p>We can expand and contract our teams to suite your needs, as well as create teams dedicated to you alone.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img src={howItWork} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs