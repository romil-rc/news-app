import React from 'react'
import arrowDown from '../assets/arrow.png'
import '../styles/bthff.css'
import { Link } from "react-router-dom";
import FoodData from '../data/food.json'

export default function Food() {
    return (
        <div className='container'>
            <div className="row prow">
                <div className="col-8" id="left-section">
                    <h1 className='text m-3'>Food</h1>
                    <hr className='bhr'/>
                    {FoodData.foodBig.map(elements => {
                        return (
                            <div className={elements.cardClass} id={elements.cardId}>
                                <div className="row">
                                    <div className="col-md-6">
                                    <img src={elements.img} className={elements.imgClass} alt="castle" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className={elements.cardBodyClass}>
                                            <h5 className="card-title"><Link className='mtlb' to="/article">{elements.title}</Link></h5>
                                            <p className="card-text">{elements.contentLeft}<span className='hide-text'>{elements.contentRight}</span></p><br /><br className={elements.brHide} />
                                            <p className="card-text"><small className="text-muted"><b>{elements.categoryMuted}</b>{elements.categoryMutedDate}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                    <div className="row mb-5 pt-1" id='load-more'>
                        <img src={arrowDown} alt="arrow" className='down-arrow' /> 
                        LOAD MORE
                    </div>
                    
                </div>
                <div className="col-4" id="right-section">
                    <div className="row mt-4" style={{display: 'block'}}>
                    <h2>Top Posts</h2>
                    <hr className='bhr'/>
                    <br />
                        {FoodData.foodUpBig.map(element => {
                            return (
                                <>
                                    <img src={element.img} alt="mountains" id='pbi'/>
                                    <div className="row mt-4 mb-3">
                                        <div className="col-md-7">
                                            <h5 id='ptpit'>{element.title}</h5><br />
                                            <p className=""><small className="text-muted"><b>{element.categoryMuted}</b>{element.categoryMutedDate}</small></p>
                                        </div>
                                        <div className="col-md-5">
                                            <h2 id='post-number'><b>{element.id}</b></h2>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        <div className="row">
                            {FoodData.foodSmall.map(elements => {
                                return (
                                    <div className={elements.cardClass} style={{width: '100%'}}>
                                        <div className="row g-0">
                                            <div className={elements.imgDivClass}>
                                                <img src={elements.img} className={elements.imgClass} alt="castle"/>
                                            </div>
                                            <div className="col-md-5">
                                                <div className={elements.cardBodyClass}>
                                                    <h5 className={elements.cardTitleClass}><Link className='mtlb' to="/article">{elements.title}</Link></h5><br /><br />
                                                    <p className="card-text really-small"><small className={elements.cardTextMutedClass}><b>{elements.categoryMuted}</b>{elements.categoryMutedDate}</small></p>
                                                </div>
                                            </div>
                                            <div className="col-md-1">
                                                <h2 className='arc-num'><b>{elements.id}</b></h2>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="row advertisement" id='advertisement'>
                        <p id='advert'>Advertisement</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}
