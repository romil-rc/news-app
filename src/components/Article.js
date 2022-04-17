import React, { useState, useEffect } from "react";
import '../styles/article.css'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { EmojiHappyIcon, ShareIcon } from '@heroicons/react/solid';
import facebookIcon from '../assets/facebook-square-brands.svg'
import twitterIcon from '../assets/twitter-square-brands.svg'
import instaIcon from '../assets/instagram-square-brands.svg'
import youtubeIcon from '../assets/youtube-square-brands.svg'
// import ArticleData from '../data/article.json'
import ReactPlayer from 'react-player'

export default function Article() {

    const [data, setData] = useState([]);

    const { id } = useParams();
    console.log(id);

    useEffect(()=>{

    const options = {
    method: 'GET',
    url: `https://tasty.p.rapidapi.com/recipes/list?q=${id}`,
    params: {
        from: '0',
        size: '1',
    },
    headers: {
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        'X-RapidAPI-Key': '18b9e68cf5msh2a46c7308f114e1p1c348ejsn0e9619d8f89f'
    }
    };

        axios.request(options).then(function (response) {
            // console.log(response.data);
            setData(response.data.results[0]);
        }).catch(function (error) {
            console.error(error);
        });

        
    }, [id])
    
    // const cp = data.user_ratings.count_positive;
    // const np = data.user_ratings.count_negative;

    console.log(data);
    
    return (
        <>
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                    <div className="left-container">
                        {/* {ArticleData.leftContainer.map(element => {
                            return (
                                <>
                                    <EmojiHappyIcon style={{width: '25px', color:'grey'}} className='left-claps' /> <span className='left-text'>{element.clapsText}</span>
                                    <br />
                                    <ShareIcon style={{width: '25px', color:'grey'}} className='left-claps' /> <span className='left-text'>{element.shareText}</span>
                                </>
                            )
                        })} */}
                    </div>
                </div>
                <div className="col-md-6">
                    {/* {ArticleData.articles.map(elements => {
                        return (
                            <>
                                <h2 className='font-change' id='article-heading'>{data.name}</h2>
                                <div className="profile pt-5">
                                    <div>
                                        { data.cook_time_minutes ? <p id='profile-name'>Cooking Time: {data.cook_time_minutes} mins</p> : null }
                                    </div>
                                    <div className="d-flex pt-5">
                                        <img src={youtubeIcon} alt="yt" className='brand-icon' id='pyt' />
                                        <img src={instaIcon} alt="insta" className='brand-icon' id='pi' />
                                        <img src={twitterIcon} alt="tweet" className='brand-icon' id='pt' />
                                        <img src={facebookIcon} alt="fb" className='brand-icon' id='pfb' />
                                    </div>
                                    
                                </div>
                                <div className="article">
                                    <img src={data.thumbnail_url} alt="react" />
                                    {data.description ? <p className='font-change mt-5' id='bpara'>{data.description}</p> : <p className='font-change mt-5' id='bpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus et, alias porro tempore laboriosam atque temporibus magnam eligendi consequuntur, sequi odio nemo nisi ab repellendus officia vero deleniti recusandae.</p>}
                                    <br />
                                    { data.original_video_url ? <ReactPlayer controls url={data.original_video_url} /> : null } */}
                                    {/* <img src={elements.codeShot} alt="codeShot" /> */}
                                    {/* <p className="badge bg-secondary text-truncate" width="50px">{data.yields.slice(0, 50)}</p>
                                    <p className="badge bg-secondary text-truncate" width="50px">{data.servings_noun_plural}</p>
                                    <p className="badge bg-secondary text-truncate" width="50px">Serving: {data.num_servings}</p> */}
                                    
                                    {/* {elements.badge.map(items => {
                                        return (
                                            <span className="badge bg-secondary">{items}</span>
                                        )
                                    })} */}
                                    {/* <hr />
                                    <div className="d-flex">
                                        <EmojiHappyIcon style={{width: '25px', color:'grey'}} /> 
                                        <p id='clap-text' style={{paddingTop: "15px"}}>9.3K happy reviews</p>
                                    </div> */}
                                    {/* <hr /> */}
                                    {/* <div className="profile" id='ppro'> */}
                                        {/* <img src={elements.profileImgOne} alt="picon" id='pbicon'/> */}
                                        {/* <span id='b-profile-name'>{elements.profileNameOne}</span> */}
                                        {/* <p id='b-pro-line-b'>{elements.profileLineOne}</p> */}
                                        {/* <p id='b-pro-line-t'>WRITTEN BY</p> */}
                                    {/* </div> */}
                                    {/* <hr id='bp'/> */}
                                {/* </div>
                            </>
                        )
                    })} */}
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
                {/* {ArticleData.bottomSection.map(elements => {
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
                })} */}
            </div>
        </div>
        <div className="container scards" id='main-hidden' >
            <div className="container second">
                <p id='ptb'>More From The Siren</p>
            </div>
            {/* {ArticleData.mobileView.map(elements => {
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
            })} */}
        </div>
       </>
    )
}
