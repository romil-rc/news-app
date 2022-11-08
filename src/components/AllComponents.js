import React, { useEffect, useState } from 'react'
import arrowDown from '../assets/arrow.png'
import '../styles/bthff.css'
import axios from 'axios';
import { TailSpin } from  'react-loader-spinner'

const AllComponents = ({ title, country, category, pageSize, apiKey }) => {
    const [articles, setArticles] = useState([]);
    const [visible, setVisible] = useState(pageSize);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        
        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: {q: title, lang: 'en', countries: country, sort_by: 'relevancy', page: '1'},
            headers: {
              'x-api-key': apiKey
            }
        };        
        
        axios.request(options).then(function (response) {
            setLoading(true);
            setArticles(response.data.articles);
            setLoading(false);
        }).catch(function (error) {
            console.error(error);
        });


    }, [country, title, apiKey]);
    
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
                            <div className='container' key={i}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        { article.media ? <img src={article.media} style={{height: "232px", width: "316px", borderRadius: "0px"}} alt="" /> : <img src="https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg" style={{height: "232px", width: "316px", borderRadius: "0px"}} alt="" />}
                                    </div>
                                    <div className='col-md-6'>
                                        <div>
                                            <h5 className='text-truncate fw-bold'><a target="_blank" rel="noreferrer" href={article.link} className="mtlb">{article.title}</a></h5>
                                            { article.excerpt ? <p>{article.excerpt}</p> : <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident obcaecati quis vero veritatis unde consequatur, tenetur excepturi soluta totam maxime quasi necessitatibus quo sunt eligendi id eaque repellat fugiat nulla!</p>}
                                        </div>
                                        <div className=''>
                                            <p className='text-capitalize align-bottom'><span className='fw-bold'>{category}</span> / {new Date(article.published_date).toLocaleString('default', { month: 'long' })} {new Date(article.published_date).getDate()} {new Date(article.published_date).getFullYear()} </p>
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
                                <div key={i}>
                                    <img src={element.media} alt="mountains" id='pbi'/>
                                    <div className="row mt-4 mb-3">
                                        <div className="col-md-7">
                                            <h5 id='ptpit'><a  target="_blank" rel="noreferrer" href={element.link} className='mtlb'>{element.title.slice(0, 30)}</a></h5><br />
                                            <p className='text-muted text-capitalize'><span className='fw-bold'>{category}</span> / {new Date(element.published_date).toLocaleString('default', { month: 'long' })} {new Date(element.published_date).getDate()} {new Date(element.published_date).getFullYear()} </p>
                                        </div>
                                        <div className="col-md-5">
                                            <h2 id='post-number'><b>{i+1}</b></h2>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="row">
                            {articles.slice(16, 20).map((elements, i) => {
                                return (
                                    <div className="card mb-5 small-right-card post-show-card" style={{width: '100%'}} key={i}>
                                        <div className="row g-0">
                                            <div className="col-md-6 tpct">
                                                <img src={elements.media} className="img-fluid rounded-start tpkci" style={{borderRadius: "0px"}} alt="castle"/>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="card-body pcardb">
                                                    <h5 className="card-title tpkct fs-6"><a  target="_blank" rel="noreferrer" href={elements.link} className='mtlb' style={{width: "150px"}}>{elements.title.slice(0, 30)}</a></h5><br /><br />
                                                    <p className='card-text really-small text-capitalize'><span className='fw-bold'>{category}</span> / {new Date(elements.published_date).toLocaleString('default', { month: 'long' })} {new Date(elements.published_date).getDate()} {new Date(elements.published_date).getFullYear()} </p>
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


export default AllComponents;