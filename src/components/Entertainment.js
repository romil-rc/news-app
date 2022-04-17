import React, { useEffect, useState } from 'react'
import arrowDown from '../assets/arrow.png'
import '../styles/bthff.css'
import axios from 'axios';
import { TailSpin } from  'react-loader-spinner'

export default function Bollywood({ title, country, category, pageSize }) {

    const [articles, setArticles] = useState([]);
    const [visible, setVisible] = useState(pageSize);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9d59c1a70aa84558a50aa031bdeb94e9`);
            setArticles(response.data.articles);
            setLoading(false);
        }
        fetchData();
    }, [country, category])
    // console.log(articles);
    const loadMore = () => {
        setVisible(visible + 5);
    }

    return (
        <div className='container'>
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

            <div className="row prow">
                <div className="col-8" id="left-section">
                    <h1 className='text m-3'>{title}</h1>
                    <hr className='bhr'/>
                    {articles.slice(0, visible).map((article, i) => {
                        return (
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        { article.urlToImage ? <img src={article.urlToImage} style={{height: "232px", width: "316px", borderRadius: "0px"}} alt="" /> : <img src="https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg" style={{height: "232px", width: "316px", borderRadius: "0px"}} alt="" />}
                                    </div>
                                    <div className='col-md-6'>
                                        <div>
                                            <h5 className='text-truncate fw-bold'><a href={article.url} className="mtlb">{article.title}</a></h5>
                                            { article.description ? <p>{article.description}</p> : <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident obcaecati quis vero veritatis unde consequatur, tenetur excepturi soluta totam maxime quasi necessitatibus quo sunt eligendi id eaque repellat fugiat nulla!</p>}
                                        </div>
                                        <div className=''>
                                            <p className='text-capitalize align-bottom'><span className='fw-bold'>{category}</span> / {new Date(article.publishedAt).toLocaleString('default', { month: 'long' })} {new Date(article.publishedAt).getDate()} {new Date(article.publishedAt).getFullYear()} </p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                    {visible < articles.length && (

                        <div className="row mb-5 pt-1" role="button" id='load-more' onClick={loadMore}>
                            <img src={arrowDown} alt="arrow" className='down-arrow' /> 
                            LOAD MORE
                        </div>

                    )}
                </div>
                <div className="col-4" id="right-section">
                    <div className="row mt-4" style={{display: 'block'}}>
                    <h2>Top Posts</h2>
                    <hr className='bhr'/>
                    <br />
                    {articles.slice(-1).map((element, i) => {
                            return (
                                <>
                                    <img src={element.urlToImage} alt="mountains" id='pbi'/>
                                    <div className="row mt-4 mb-3">
                                        <div className="col-md-7">
                                            <h5 id='ptpit'><a href={element.url} className='mtlb'>{element.title.slice(0, 30)}</a></h5><br />
                                            <p className='text-muted text-capitalize'><span className='fw-bold'>{category}</span> / {new Date(element.publishedAt).toLocaleString('default', { month: 'long' })} {new Date(element.publishedAt).getDate()} {new Date(element.publishedAt).getFullYear()} </p>
                                        </div>
                                        <div className="col-md-5">
                                            <h2 id='post-number'><b>{i+1}</b></h2>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        <div className="row">
                            {articles.slice(16, 20).map((elements, i) => {
                                return (
                                    <div className="card mb-5 small-right-card post-show-card" style={{width: '100%'}}>
                                        <div className="row g-0">
                                            <div className="col-md-6 tpct">
                                                <img src={elements.urlToImage} className="img-fluid rounded-start tpkci" style={{borderRadius: "0px"}} alt="castle"/>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="card-body pcardb">
                                                    <h5 className="card-title tpkct fs-6"><a href={elements.url} className='mtlb' style={{width: "150px"}}>{elements.title.slice(0, 30)}</a></h5><br /><br />
                                                    {/* <p className="card-text really-small"><small className={elements.cardTextMutedClass}><b>{elements.categoryMuted}</b>{elements.categoryMutedDate}</small></p> */}
                                                    <p className='card-text really-small text-capitalize'><span className='fw-bold'>{category}</span> / {new Date(elements.publishedAt).toLocaleString('default', { month: 'long' })} {new Date(elements.publishedAt).getDate()} {new Date(elements.publishedAt).getFullYear()} </p>
                                                </div>
                                            </div>
                                            <div className="col-md-1">
                                                <h2 className='arc-num'><b>{i+2}</b></h2>
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
            }
        </div>
    )
}
