import React from 'react'
import profileIcon from '../assets/profile_icon.png'
import '../styles/article.css'
import facebookIcon from '../assets/facebook-square-brands.svg'
import twitterIcon from '../assets/twitter-square-brands.svg'
import instaIcon from '../assets/instagram-square-brands.svg'
import youtubeIcon from '../assets/youtube-square-brands.svg'
import reactArticleImage from '../assets/article_image.png'
import codeShot from '../assets/code_shot.png'
import claps from '../assets/rythm.png'
import share from '../assets/share.png'

export default function Article() {
    
    return (
        <>
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                    <div className="left-container">
                        <img src={claps} alt="claps" className='left-claps'/> <span className='left-text'>9.3K claps</span>
                        <br />
                        <img src={share} alt="claps"className='left-claps'/> <span className='left-text'>Share this article</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2 className='font-change' id='article-heading'>5 Ways to animate a React app.</h2>
                    <div className="profile">
                        <img src={profileIcon} alt="picon" id='picon'/>
                        <span id='profile-name'>Dmitry Nozhenko</span>
                        <p id='pro-line'>Jan 28, 2019 - 10 min read</p>
                        <img src={youtubeIcon} alt="yt" className='brand-icon' id='pyt' />
                        <img src={instaIcon} alt="insta" className='brand-icon' id='pi' />
                        <img src={twitterIcon} alt="tweet" className='brand-icon' id='pt' />
                        <img src={facebookIcon} alt="fb" className='brand-icon' id='pfb' />
                        
                    </div>
                    <div className="article">
                        <img src={reactArticleImage} alt="react" />
                        <p className='font-change mt-5' id='bpara'>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.</p>
                        <p className='font-change mt-1' id='sline'>Let’s talk about them</p>
                        <img src={codeShot} alt="codeShot" />
                        <span className="badge bg-secondary">React</span>
                        <span className="badge bg-secondary">Javascript</span>
                        <span className="badge bg-secondary">Animation</span>
                        <br />
                        <img src={claps} alt="claps" className='claps'/> <span id='clap-text'>9.3K claps</span>
                        <hr />
                        <div className="profile" id='ppro'>
                            <img src={profileIcon} alt="picon" id='pbicon'/>
                            <span id='b-profile-name'>Dmitry Nozhenko</span>
                            <p id='b-pro-line-b'>Jan 28, 2019 - 10 min read</p>
                            <p id='b-pro-line-t'>WRITTEN BY</p>
                        </div>
                        <hr id='bp'/>
                    </div>
                </div>
                <div className="col-md-3">
                    
                </div>
            </div>
        </div>
        <div className="row" id='bottom-section'>
            <div className="container second">
                <p id='title-below'>More From The Siren</p>
                <hr />
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-90 shadow mb-5 bg-body rounded bsc">
                    <img src={'https://exploretraveler.com/wp-content/uploads/2018/07/Palace-4.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body bscb">
                        <h5 className="card-title">Joshua Tree Overnight Adventure</h5>
                        <div className="profile">
                            <img src={profileIcon} alt="picon" className='s2picon'/>
                            <span className='profile-name-s2'>Dmitry Nozhenko</span><br />
                            <p className='pro-line-s2'>Aug 10 - 4 min read</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-90 shadow mb-5 bg-body rounded bsc">
                    <img src={'https://exploretraveler.com/wp-content/uploads/2018/07/Palace-4.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body bscb">
                        <h5 className="card-title">Joshua Tree Overnight Adventure</h5>
                        <div className="profile">
                            <img src={profileIcon} alt="picon" className='s2picon'/>
                            <span className='profile-name-s2'>Dmitry Nozhenko</span><br />
                            <p className='pro-line-s2'>Aug 10 - 4 min read</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-90 shadow mb-5 bg-body rounded bsc">
                    <img src={'https://exploretraveler.com/wp-content/uploads/2018/07/Palace-4.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body bscb">
                        <h5 className="card-title">Joshua Tree Overnight Adventure</h5>
                        <div className="profile">
                            <img src={profileIcon} alt="picon" className='s2picon'/>
                            <span className='profile-name-s2'>Dmitry Nozhenko</span><br />
                            <p className='pro-line-s2'>Aug 10 - 4 min read</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container scards" id='main-hidden' >
            <div className="container second">
                <p id='ptb'>More From The Siren</p>
            </div>
            <div className="container small-card">
                <div className="pstdiv">
                    <h3 className='pstitl'>Performance Comparison for 5 JavaScript Object Iterations</h3>
                    <p className='psp'><small className="text-muted">Dmitry Nozhenko</small></p>
                </div>
                <div className="psidiv">
                    <img src={'https://exploretraveler.com/wp-content/uploads/2018/07/Palace-4.jpg'} className='pspic' alt="picon"/>
                </div>
            </div>
            <div className="container small-card">
                <div className="pstdiv">
                    <h3 className='pstitl'>Performance Comparison for 5 JavaScript Object Iterations</h3>
                    <p className='psp'><small className="text-muted">Dmitry Nozhenko</small></p>
                </div>
                <div className="psidiv">
                    <img src={'https://exploretraveler.com/wp-content/uploads/2018/07/Palace-4.jpg'} className='pspic' alt="picon"/>
                </div>
            </div>
            <div className="container small-card">
                <div className="pstdiv">
                    <h3 className='pstitl'>Performance Comparison for 5 JavaScript Object Iterations</h3>
                    <p className='psp'><small className="text-muted">Dmitry Nozhenko</small></p>
                </div>
                <div className="psidiv">
                    <img src={'https://exploretraveler.com/wp-content/uploads/2018/07/Palace-4.jpg'} className='pspic' alt="picon"/>
                </div>
            </div>
            <div className="container small-card">
                <div className="pstdiv">
                    <h3 className='pstitl'>Performance Comparison for 5 JavaScript Object Iterations</h3>
                    <p className='psp'><small className="text-muted">Dmitry Nozhenko</small></p>
                </div>
                <div className="psidiv">
                    <img src={'https://exploretraveler.com/wp-content/uploads/2018/07/Palace-4.jpg'} className='pspic' alt="picon"/>
                </div>
            </div>
        </div>
       </>
    )
}
