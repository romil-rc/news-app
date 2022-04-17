import React, { useState, useEffect } from 'react'
import '../styles/home.css'
import arrowDown from '../assets/arrow.png'
import arrowRight from '../assets/arrow-right.png'
import { Link } from "react-router-dom";
import axios from 'axios';
import { TailSpin } from  'react-loader-spinner'

export default function Home({ q }) {
    
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${q}&apiKey=9d59c1a70aa84558a50aa031bdeb94e9`);
            setArticles(response.data.articles);
            setLoading(false);
        }
        fetchData();
    }, [q]);

    // console.log(articles);
    
    return (
        <div className="container">
        { loading ? 

            <div className='d-flex justify-content-center'>
                <TailSpin
                    height="100"
                    width="100"
                    color='grey'
                    ariaLabel='loading'
                />
            </div>

            :


        
        <div className='container'>
            
            {/* First Section  */}
            <div className="row" id='first-section'>
                {articles.slice(0, 1).map(element => {
                    return(
                        <div className="col-8" id='top-big'>
                            <img src={element.urlToImage} alt="boreal" id='boreal' />
                            <div className="center big">
                                <h2><a href={element.url} className="mtlb" style={{color: "white"}}>{element.title.slice(0, 33)}</a></h2>
                                <p>{element.description.slice(0, 70)}</p>
                            </div>
                        </div>
                    )
                })}
                <div className="col-4" id='top-left'>
                    {articles.slice(1, 3).map(elements => {
                        return (
                            <div className="col pb-3">
                                <img src={elements.urlToImage} alt="" />
                                <div className="center small">
                                    <h2><a href={elements.url} className="mtlb" style={{color: "white"}}>{elements.title.slice(0, 25)}</a></h2>
                                    <p>{elements.description.slice(0, 40)}</p>
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
                    {articles.slice(3, 6).map(elements => {
                        return (
                            <div className="col">
                                <div className="card h-90 shadow mb-5 bg-body rounded">
                                    <img src={elements.urlToImage} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"><a href={elements.url} className="mtlb">{elements.title.slice(0, 50)}</a></h5>
                                        <p className="card-text pb-0">{elements.description.slice(0, 70)}</p>
                                        <p className='card-text text-capitalize'>{new Date(elements.publishedAt).toLocaleString('default', { month: 'long' })} {new Date(elements.publishedAt).getDate()} {new Date(elements.publishedAt).getFullYear()} </p>
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

                    {articles.slice(6, 10).map(elements => {
                        return (
                            <div className="card mb-3 left-card" style={{width: '100%'}}>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src={elements.urlToImage} style={{height: "100%", borderRadius: "0px"}} className={elements.imgClass} alt="castle" />
                                    </div>
                                    <div className="col-md-6" style={{paddingLeft: "10px"}}>
                                        <div className="card-body phlacb">
                                            <h5 className="card-title"><a href={elements.url} className='mtlb'>{elements.title.slice(0, 50)}</a></h5>
                                            <p>{elements.description}</p>
                                            <p className='card-text text-capitalize'>{ elements.source.name ? <span className='fw-bold'>{elements.source.name}</span> : <span className='fw-bold'>Lorem Ipsum</span> } / {new Date(elements.publishedAt).toLocaleString('default', { month: 'long' })} {new Date(elements.publishedAt).getDate()} {new Date(elements.publishedAt).getFullYear()} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    <Link to="/bollywood" className='mtlb'><div className="row mb-5 pt-1" id='load-more'>
                        <img src={arrowDown} alt="arrow" className='down-arrow' id='phlmda' /> 
                        LOAD MORE
                        <img src={arrowRight} alt="arrow" className='right-arrow' id='phlmra'/> 
                    </div></Link>
                    <div id='ph2bi'>
                        {articles.slice(10, 11).map(element => {
                            return (
                                <>
                                    <img src={element.urlToImage} alt="castle" id="castle" />
                                    <div className="center big bottom">
                                        <h2><a href={element.url} className='mtlb' style={{color: "white"}}>{element.title.slice(0, 20)}</a></h2>
                                        <p>{element.description.slice(0, 40)}</p>
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
                        {articles.slice(11, 12).map((element, i) => {
                            return (
                                <>
                                    <img src={element.urlToImage} alt="mountains" id="phtp1i" />
                                    <div className="row mt-4 mb-3">
                                        <div className="col-md-7">
                                            <h5 id="phtp1h5"><a href={element.url} className='mtlb'>{element.title.slice(0, 30)}</a></h5>
                                            <p className='card-text text-capitalize'>{ element.source.name ? <span className='fw-bold'>{element.source.name}</span> : <span className='fw-bold'>Lorem Ipsum</span> } / {new Date(element.publishedAt).toLocaleString('default', { month: 'long' })} {new Date(element.publishedAt).getDate()} {new Date(element.publishedAt).getFullYear()} </p>
                                        </div>
                                        <div className="col-md-5">
                                            <h2 id="phtpn1"><b>{i+1}</b></h2>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                        <div className="row">
                            {articles.slice(12, 16).map((elements, i) => {
                                return (
                                    <div className="card mb-5 right-card phtprc" style={{width: '100%'}}>
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                            <img src={elements.urlToImage} className="img-fluid rounded-start right-small" alt="castle"/>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card-body phtpcb">
                                                <h5 className="card-title phtpmh"><a href={elements.url} className='mtlb'>{elements.title.slice(0, 30)}</a></h5><br /><br />
                                                <p className='card-text really-small text-capitalize'>{ elements.source.name ? <span className='fw-bold'>{elements.source.name}</span> : <span className='fw-bold'>Lorem Ipsum</span> } / {new Date(elements.publishedAt).toLocaleString('default', { month: 'long' })} {new Date(elements.publishedAt).getDate()} {new Date(elements.publishedAt).getFullYear()} </p>
                                            </div>
                                        </div>
                                        <div className="col-md-1">
                                            <h2 className='phtpns'><b>{i+2}</b></h2>
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
                    {articles.slice(16, 19).map(elements => {
                        return (
                            <div className="card">
                                <div className="card-body" id="middle-card">
                                <h5 className="card-title fw-bolder"><a href={elements.url} className='mtlb'>{elements.title}</a></h5><br />
                                <p className="card-text">{elements.content.slice(0, 200)}</p><br />
                                <p className='card-text'>{ elements.source.name ? <span className='fw-bold'>{elements.source.name}</span> : <span className='fw-bold'>Lorem Ipsum</span> } / {new Date(elements.publishedAt).toLocaleString('default', { month: 'long' })} {new Date(elements.publishedAt).getDate()} {new Date(elements.publishedAt).getFullYear()} </p>
                                </div>
                            </div>        
                        )
                    })}
                </div>
                <div className="container mb-5" id='phlsknc'><hr /></div>
            </div>
            <Link to="/bollywood"  className='mtlb'><div className="row mb-5 pt-1" id='load-more'>
                VIEW MORE
                <img src={arrowRight} alt="arrow" className='right-arrow' /> 
            </div></Link>


        </div>
        
        }
        </div>
    )
}
