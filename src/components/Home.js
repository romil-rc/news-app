import React from 'react'
import '../styles/home.css'
import arrowDown from '../assets/arrow.png'
import arrowRight from '../assets/arrow-right.png'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className='container'>
            
            {/* First Section  */}
            <div className="row" id='first-section'>
                <div className="col-8" id='top-big'>
                    <img src={'https://c4.wallpaperflare.com/wallpaper/498/115/730/white-and-purple-petaled-flower-in-close-up-photography-wallpaper-preview.jpg'} alt="boreal" id='boreal' />
                    <div className="center big">
                        <h2>Title of vertical gallery</h2>
                        <p>Travel / August 21 2017</p>
                    </div>
                </div>
                <div className="col-4" id='top-left'>
                    <div className="col pb-1">
                    <img src={'https://thumbs.dreamstime.com/b/playa-las-catedrales-catedrais-beach-galicia-spain-ribadeo-lugo-127177549.jpg'} alt="" />
                    <div className="center small">
                        <h2>The Sound cloud You loved</h2>
                        <p>Travel / August 21 2017</p>
                    </div>
                    </div>
                    <div className="col pt-1">
                    <img src={'https://thumbs.dreamstime.com/b/playa-las-catedrales-catedrais-beach-galicia-spain-ribadeo-lugo-127177549.jpg'} alt="" />
                    <div className="center small">
                        <h2>The Sound cloud You loved</h2>
                        <p>Travel / August 21 2017</p>
                    </div>
                    </div>
                </div>
            </div>


            {/* Second Section  */}
            <div className="row mt-5 pt-3" id='second-section'>
                <h1>The Latest</h1>
                <hr className='hr'/>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-90 shadow mb-5 bg-body rounded">
                        <img src={'https://exploretraveler.com/wp-content/uploads/2018/07/Palace-4.jpg'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tokyo Imperial Palace</h5>
                            <p className="card-text pb-0">The Tokyo Imperial Palace is the main residence of the Emperor of Japan. It is a large park-like area located in the Chiyoda district of the Chiyoda ward of Tokyo</p>
                            <p className="card-text">Travel / August 21 2017</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-90 shadow mb-5 bg-body rounded">
                        <img src={'https://exploretraveler.com/wp-content/uploads/2018/07/Palace-4.jpg'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tokyo Imperial Palace</h5>
                            <p className="card-text">The Tokyo Imperial Palace is the main residence of the Emperor of Japan. It is a large park-like area located in the Chiyoda district of the Chiyoda ward of Tokyo</p>
                            <p className="card-text">Travel / August 21 2017</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-90 shadow mb-5 bg-body rounded">
                        <img src={'https://exploretraveler.com/wp-content/uploads/2018/07/Palace-4.jpg'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tokyo Imperial Palace</h5>
                            <p className="card-text">The Tokyo Imperial Palace is the main residence of the Emperor of Japan. It is a large park-like area located in the Chiyoda district of the Chiyoda ward of Tokyo</p>
                            <p className="card-text">Travel / August 21 2017</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Third Section  - Left side */}
            <div className="row  mt-3" id="third-section">
                <span id='tslss'>
                    <h1>Latest Articles</h1>
                    <hr className='hr'/>
                </span>
                <div className="col-8" >

                    <div className="card mb-3 left-card" style={{width: '100%'}}>
                        <div className="row g-0">
                            <div className="col-md-6">
                            <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start phlai" alt="castle" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body phlacb">
                                    <h5 className="card-title"><Link className='mtlb' to="/article">Catch waves with an adventure guide</Link></h5>
                                    <p className="card-text">A castle is a type of fortified structure <span className='phlap'>built during the Middle Ages predominantly by the nobility or royalty and by military orders.</span></p><br className='rbr' /><br className='rbr'/>
                                    <p className="card-text"><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 left-card" style={{width: '100%'}}>
                        <div className="row g-0">
                            <div className="col-md-6">
                            <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start phlai" alt="castle" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body phlacb">
                                    <h5 className="card-title">Catch waves with an adventure guide</h5>
                                    <p className="card-text">A castle is a type of fortified structure <span className='phlap'>built during the Middle Ages predominantly by the nobility or royalty and by military orders.</span></p><br className='rbr' /><br className='rbr'/>
                                    <p className="card-text"><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 left-card" id='phlabbr' style={{width: '100%'}}>
                        <div className="row g-0">
                            <div className="col-md-6">
                            <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start phlai" alt="castle" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body phlacb">
                                    <h5 className="card-title">Catch waves with an adventure guide</h5>
                                    <p className="card-text">A castle is a type of fortified structure <span className='phlap'>built during the Middle Ages predominantly by the nobility or royalty and by military orders.</span></p><br className='rbr' /><br className='rbr'/>
                                    <p className="card-text"><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 left-card" id='phrc' style={{width: '100%'}}>
                        <div className="row g-0">
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
                        <img src={arrowDown} alt="arrow" className='down-arrow' id='phlmda' /> 
                        LOAD MORE
                        <img src={arrowRight} alt="arrow" className='right-arrow' id='phlmra'/> 
                    </div>
                    <div id='ph2bi'>
                        <img src={'https://static1.mansionglobal.com/production/media/article-images/12075f9f2f8cfbc1f3f0748698116917/large_Devizes-Castle-1.jpg'} alt="castle" id='castle' />
                        <div className="center big bottom">
                            <h2>Title of vertical gallery</h2>
                            <p>Travel / August 21 2017</p>
                        </div>
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
                        <img src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/02/Sonamarg.jpg" alt="mountains" id='phtp1i' />
                        <div className="row mt-4 mb-3">
                            <div className="col-md-7">
                                <h5 id='phtp1h5'>Catch waves with an adventure guide</h5>
                                <p className=""><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                            </div>
                            <div className="col-md-5">
                                <h2 id='phtpn1'><b>1</b></h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card mb-5 right-card phtprc" style={{width: '100%'}}>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start right-small" alt="castle"/>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body phtpcb">
                                            <h5 className="card-title phtpmh">Catch waves with an adventure guide</h5><br /><br />
                                            <p className="card-text really-small"><small className="text-muted phtpsp"><b>Travel</b> / August 21 2017</small></p>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <h2 className='phtpns'><b>2</b></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-5 right-card phtprc" style={{width: '100%'}}>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start right-small" alt="castle"/>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body phtpcb">
                                            <h5 className="card-title phtpmh">Catch waves with an adventure guide</h5><br /><br />
                                            <p className="card-text really-small"><small className="text-muted phtpsp"><b>Travel</b> / August 21 2017</small></p>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <h2 className='phtpns'><b>3</b></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-5 right-card phtprc" style={{width: '100%'}}>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start right-small" alt="castle"/>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body phtpcb">
                                            <h5 className="card-title phtpmh">Catch waves with an adventure guide</h5><br /><br />
                                            <p className="card-text really-small"><small className="text-muted phtpsp"><b>Travel</b> / August 21 2017</small></p>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <h2 className='phtpns'><b>4</b></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-5 right-card phtprem-card" style={{width: '100%'}}>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://tourscanner.com/blog/wp-content/uploads/2020/05/Gravensteen-Castle-Belgium.jpg" className="img-fluid rounded-start right-small" alt="castle"/>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body">
                                            <h5 className="card-title">Catch waves with an adventure guide</h5><br /><br />
                                            <p className="card-text really-small"><small className="text-muted"><b>Travel</b> / August 21 2017</small></p>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <h2 className='phtpns'><b>5</b></h2>
                                    </div>
                                </div>
                            </div>
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
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title fw-bolder">Catch waves with an adventure guide</h5><br />
                        <p className="card-text">An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with some potential for physical danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting or participating in extreme sports.</p><br />
                        <p className="card-text"><small className="text-muted"><b>TECH</b> / TODAY AT 11:54</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" id='middle-card'>
                        <h5 className="card-title fw-bolder">Catch waves with an adventure guide</h5><br />
                        <p className="card-text">An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with some potential for physical danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting or participating in extreme sports.</p><br />
                        <p className="card-text"><small className="text-muted"><b>STYLE</b> / AUGUST 21 2017</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title fw-bolder">Catch waves with an adventure guide</h5><br />
                        <p className="card-text">An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with some potential for physical danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting or participating in extreme sports.</p><br />
                        <p className="card-text"><small className="text-muted"><b>TECH</b> / AUGUST 21 2017</small></p>
                        </div>
                    </div>
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
