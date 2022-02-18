import React from 'react'
import '../styles/article.css'
import facebookIcon from '../assets/facebook-square-brands.svg'
import twitterIcon from '../assets/twitter-square-brands.svg'
import instaIcon from '../assets/instagram-square-brands.svg'
import youtubeIcon from '../assets/youtube-square-brands.svg'
import ArticleData from '../data/article.json'

export default function Article() {
    
    return (
        <>
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                    <div className="left-container">
                        {ArticleData.leftContainer.map(element => {
                            return (
                                <>
                                    <img src={element.imgClaps} alt="claps" className='left-claps'/> <span className='left-text'>{element.clapsText}</span>
                                    <br />
                                    <img src={element.imgShare} alt="share"className='left-claps'/> <span className='left-text'>{element.shareText}</span>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="col-md-6">
                    {ArticleData.articles.map(elements => {
                        return (
                            <>
                                <h2 className='font-change' id='article-heading'>{elements.title}</h2>
                                <div className="profile">
                                    <img src={elements.profileImgOne} alt="picon" id='picon'/>
                                    <span id='profile-name'>{elements.profileNameOne}</span>
                                    <p id='pro-line'>{elements.profileLineOne}</p>
                                    <img src={youtubeIcon} alt="yt" className='brand-icon' id='pyt' />
                                    <img src={instaIcon} alt="insta" className='brand-icon' id='pi' />
                                    <img src={twitterIcon} alt="tweet" className='brand-icon' id='pt' />
                                    <img src={facebookIcon} alt="fb" className='brand-icon' id='pfb' />
                                    
                                </div>
                                <div className="article">
                                    <img src={elements.reactArticleImage} alt="react" />
                                    <p className='font-change mt-5' id='bpara'>{elements.reactArticleText}</p>
                                    <p className='font-change mt-1' id='sline'>{elements.reactArticleSmallLine}</p>
                                    <img src={elements.codeShot} alt="codeShot" />
                                    {elements.badge.map(items => {
                                        return (
                                            <span className="badge bg-secondary">{items}</span>
                                        )
                                    })}
                                    <br />
                                    <img src={elements.imgClaps} alt="claps" className='claps'/> <span id='clap-text'>{elements.clapsText}</span>
                                    <hr />
                                    <div className="profile" id='ppro'>
                                        <img src={elements.profileImgOne} alt="picon" id='pbicon'/>
                                        <span id='b-profile-name'>{elements.profileNameOne}</span>
                                        <p id='b-pro-line-b'>{elements.profileLineOne}</p>
                                        <p id='b-pro-line-t'>WRITTEN BY</p>
                                    </div>
                                    <hr id='bp'/>
                                </div>
                            </>
                        )
                    })}
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
                {ArticleData.bottomSection.map(elements => {
                    return (
                        <div className="col">
                            <div className="card h-90 shadow mb-5 bg-body rounded bsc">
                            <img src={elements.img} className="card-img-top" alt="..." />
                            <div className="card-body bscb">
                                <h5 className="card-title">{elements.cardTitle}</h5>
                                <div className="profile">
                                    <img src={elements.profileImg} alt="picon" className='s2picon'/>
                                    <span className='profile-name-s2'>{elements.profileName}</span><br />
                                    <p className='pro-line-s2'>{elements.profileText}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="container scards" id='main-hidden' >
            <div className="container second">
                <p id='ptb'>More From The Siren</p>
            </div>
            {ArticleData.mobileView.map(elements => {
                return (
                    <div className="container small-card">
                        <div className="pstdiv">
                            <h3 className='pstitl'>{elements.articleTitle}</h3>
                            <p className='psp'><small className="text-muted">{elements.articleWriter}</small></p>
                        </div>
                        <div className="psidiv">
                            <img src={elements.img} className='pspic' alt="picon"/>
                        </div>
                    </div>
                )
            })}
        </div>
       </>
    )
}
