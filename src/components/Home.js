import React from 'react'
import '../styles/home.css'
import arrowDown from '../assets/arrow.png'
import arrowRight from '../assets/arrow-right.png'
import { Link } from "react-router-dom";
import HomeData from '../data/home.json'

export default function Home() {
    return (
        <div className='container'>
            
            {/* First Section  */}
            <div className="row" id='first-section'>
                {HomeData.firstSectionBigImage.map(element => {
                    return(
                        <div className="col-8" id='top-big'>
                            <img src={element.img} alt="boreal" id='boreal' />
                            <div className="center big">
                                <h2>{element.title}</h2>
                                <p>{element.para}</p>
                            </div>
                        </div>
                    )
                })}
                <div className="col-4" id='top-left'>
                    {HomeData.firstSectionSmallImages.map(elements => {
                        return (
                            <div className="col pb-3">
                                <img src={elements.img} alt="" />
                                <div className="center small">
                                    <h2>{elements.title}</h2>
                                    <p>{elements.para}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


            {/* Second Section  */}
            <div className="row mt-5 pt-3" id='second-section'>
                <h1>The Latest</h1>
                <hr className='hr'/>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {HomeData.cards.map(elements => {
                        return (
                            <div className="col">
                                <div className="card h-90 shadow mb-5 bg-body rounded">
                                    <img src={elements.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{elements.title}</h5>
                                        <p className="card-text pb-0">{elements.para}</p>
                                        <p className="card-text">{elements.date}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Third Section  - Left side */}
            <div className="row  mt-3" id="third-section">
                <span id='tslss'>
                    <h1>Latest Articles</h1>
                    <hr className='hr'/>
                </span>
                <div className="col-8" >

                    {HomeData.thirdSectionLeftSide.map(elements => {
                        return (
                            <div className="card mb-3 left-card" id={elements.cardId} style={{width: '100%'}}>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src={elements.img} className={elements.imgClass} alt="castle" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className={elements.cardClass}>
                                            <h5 className="card-title"><Link className='mtlb' to="/article">{elements.title}</Link></h5>
                                            <p className="card-text">{elements.textLeft}<span className={elements.textClass}>{elements.textRight}</span></p><br className='rbr' /><br className='rbr'/>
                                            <p className="card-text"><small className="text-muted"><b>{elements.category}</b>{elements.date}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    <div className="row mb-5 pt-1" id='load-more'>
                        <img src={arrowDown} alt="arrow" className='down-arrow' id='phlmda' /> 
                        LOAD MORE
                        <img src={arrowRight} alt="arrow" className='right-arrow' id='phlmra'/> 
                    </div>
                    <div id='ph2bi'>
                        {HomeData.thirdSectionBigImage.map(element => {
                            return (
                                <>
                                    <img src={element.img} alt="castle" id={element.imgId} />
                                    <div className="center big bottom">
                                        <h2>{element.imgTitle}</h2>
                                        <p>{element.imgPara}</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

                {/* Third Section  - Right side */}
                <div className="col-4 mb-4">
                    <div className="row" id='advertisement'>
                        Advertisement 
                    </div>
                    <div className="row mt-4" style={{display: 'block'}}>
                        <h2>Top Posts</h2>
                        <hr className='hr'/>
                        <br />
                        {HomeData.thirdSectionRightSide.topPostFirst.map(element => {
                            return (
                                <>
                                    <img src={element.img} alt="mountains" id={element.imgId} />
                                    <div className="row mt-4 mb-3">
                                        <div className="col-md-7">
                                            <h5 id={element.titleId}>{element.title}</h5>
                                            <p className=""><small className="text-muted"><b>{element.paraLeft}</b>{element.paraRight}</small></p>
                                        </div>
                                        <div className="col-md-5">
                                            <h2 id={element.idId}><b>{element.id}</b></h2>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                        <div className="row">
                            {HomeData.thirdSectionRightSide.topPostArticles.map(elements => {
                                return (
                                    <div className={elements.mainClass} style={{width: '100%'}}>
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                            <img src={elements.img} className={elements.imgClass} alt="castle"/>
                                        </div>
                                        <div className="col-md-5">
                                            <div className={elements.cardClass}>
                                                <h5 className={elements.cardTitleClass}>{elements.cardTitle}</h5><br /><br />
                                                <p className="card-text really-small"><small className={elements.textMutedClass}><b>{elements.paraLeft}</b>{elements.paraRight}</small></p>
                                            </div>
                                        </div>
                                        <div className="col-md-1">
                                            <h2 className='phtpns'><b>{elements.id}</b></h2>
                                        </div>
                                    </div>
                                </div>
                                        
                                )
                            })}
                        </div>
                    </div>

                </div>
                
            </div>

            {/* Fourth Section  */}
            <div className="row mt-3">
                <h1>Latest Stories</h1>
                <hr className='hr'/>
                <div className="container mb-5"><hr /></div>
                <div className="card-group">
                    {HomeData.fourthSection.map(elements => {
                        return (
                            <div className="card">
                                <div className="card-body" id={elements.cardBodyId}>
                                <h5 className="card-title fw-bolder">{elements.cardTitle}</h5><br />
                                <p className="card-text">{elements.cardText}</p><br />
                                <p className="card-text"><small className="text-muted"><b>{elements.paraLeft}</b>{elements.paraRight}</small></p>
                                </div>
                            </div>        
                        )
                    })}
                </div>
                <div className="container mb-5" id='phlsknc'><hr /></div>
            </div>
            <div className="row mb-5 pt-1" id='load-more'>
                VIEW MORE
                <img src={arrowRight} alt="arrow" className='right-arrow' /> 
            </div>


        </div>
        
    )
}
