import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from './RightAside';
import { Link, useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
  const data =useLoaderData();
  const {id} =useParams();
  
  const [news,setNews] =useState({});
  useEffect(()=>{
    const newsDetails = data.find((singleNews)=>singleNews.id==id);
    setNews(newsDetails);
  },[data,id])
  
  return (
    <div className='p-5 max-w-[1600px] mx-auto'>
      <header className='mb-5'>
        <Header></Header>
      </header>
      <main className='grid grid-cols-9'>
        <section className='col-span-6 '>
          <h1 className='font-bold mb-2'>Dragon News</h1>
          <div className='space-y-5'>
            <img src={news.image_url} alt="" srcset="" />
            <h2 className='font-bold'>{news.title}</h2>
            <p>{news.details}</p>
            <Link className='btn btn-primary' to={`/categores/&{news.category_id}`}>Back to Home</Link>
          </div>
        </section>
        <aside className='col-span-3'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;