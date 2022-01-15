import React from 'react'
import arrowDown from '../assets/arrow.png'
import '../styles/bollywood.css'
import { Link } from "react-router-dom";

export default function Bollywood() {
    return (
        <div className='container'>
            <div className="row prow">
                <div className="col-8" id="left-section">
                    <h1 className='text m-3'>Bollywood</h1>
                    <hr className='bhr'/>
                    <div className="card big-left-card show-card">
                        <div className="row">
                            <div className="col-md-6">
                            <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start pimg" alt="castle" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body pcardb">
                                    <h5 className="card-title"><Link className='mtlb' to="/article">Catch waves with an adventure guide</Link></h5>
                                    <p className="card-text">A castle is a type of fortified structure <span className='hide-text'>built during the Middle Ages predominantly by the nobility or royalty and by military orders.</span></p><br /><br className='br-hide' />
                                    <p className="card-text"><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card big-left-card show-card">
                        <div className="row">
                            <div className="col-md-6">
                            <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start pimg" alt="castle" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body pcardb">
                                    <h5 className="card-title">Catch waves with an adventure guide</h5>
                                    <p className="card-text">A castle is a type of fortified structure <span className='hide-text'>built during the Middle Ages predominantly by the nobility or royalty and by military orders.</span></p><br /><br className='br-hide' />
                                    <p className="card-text"><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card big-left-card show-card" id='border-remove'>
                        <div className="row">
                            <div className="col-md-6">
                            <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start pimg" alt="castle" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body pcardb">
                                    <h5 className="card-title">Catch waves with an adventure guide</h5>
                                    <p className="card-text">A castle is a type of fortified structure <span className='hide-text'>built during the Middle Ages predominantly by the nobility or royalty and by military orders.</span></p><br /><br className='br-hide' />
                                    <p className="card-text"><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card big-left-card rem-card">
                        <div className="row">
                            <div className="col-md-6">
                            <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start" alt="castle" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Catch waves with an adventure guide</h5>
                                    <p className="card-text">A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders.</p><br /><br />
                                    <p className="card-text"><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card big-left-card rem-card">
                        <div className="row">
                            <div className="col-md-6">
                            <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start" alt="castle" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Catch waves with an adventure guide</h5>
                                    <p className="card-text">A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders.</p><br /><br />
                                    <p className="card-text"><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card big-left-card rem-card">
                        <div className="row">
                            <div className="col-md-6">
                            <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start" alt="castle" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Catch waves with an adventure guide</h5>
                                    <p className="card-text">A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders.</p><br /><br />
                                    <p className="card-text"><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card big-left-card rem-card" id='last-left-card'>
                        <div className="row">
                            <div className="col-md-6">
                            <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start" alt="castle" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Catch waves with an adventure guide</h5>
                                    <p className="card-text">A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders.</p><br /><br />
                                    <p className="card-text"><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

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
                        <img src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/02/Sonamarg.jpg" alt="mountains" id='pbi'/>
                        <div className="row mt-4 mb-3">
                            <div className="col-md-7">
                                <h5 id='ptpit'>Catch waves with an adventure guide</h5><br />
                                <p className=""><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                            </div>
                            <div className="col-md-5">
                                <h2 id='post-number'><b>1</b></h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card mb-5 small-right-card post-show-card" style={{width: '100%'}}>
                                <div className="row g-0">
                                    <div className="col-md-6 tpct">
                                        <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start tpkci" alt="castle"/>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body pcardb">
                                            <h5 className="card-title tpkct">Catch waves with an adventure guide</h5><br /><br />
                                            <p className="card-text really-small"><small className="text-muted tpkcp"><b>Travel</b> / August 21 2017</small></p>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <h2 className='arc-num'><b>2</b></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-5 small-right-card post-show-card" style={{width: '100%'}}>
                                <div className="row g-0">
                                    <div className="col-md-6 tpct">
                                        <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start tpkci" alt="castle"/>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body pcardb">
                                            <h5 className="card-title tpkct">Catch waves with an adventure guide</h5><br /><br />
                                            <p className="card-text really-small"><small className="text-muted tpkcp"><b>Travel</b> / August 21 2017</small></p>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <h2 className='arc-num'><b>3</b></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-5 small-right-card post-show-card" style={{width: '100%'}}>
                                <div className="row g-0">
                                    <div className="col-md-6 tpct">
                                        <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start tpkci" alt="castle"/>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body pcardb">
                                            <h5 className="card-title tpkct">Catch waves with an adventure guide</h5><br /><br />
                                            <p className="card-text really-small"><small className="text-muted tpkcp"><b>Travel</b> / August 21 2017</small></p>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <h2 className='arc-num'><b>4</b></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-5 small-right-card rem-card" style={{width: '100%'}}>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start" alt="castle"/>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body">
                                            <h5 className="card-title">Catch waves with an adventure guide</h5><br /><br />
                                            <p className="card-text really-small"><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <h2 className='arc-num'><b>5</b></h2>
                                    </div>
                                </div>
                            </div>
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
