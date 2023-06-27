import moment from 'moment'
import React from 'react'


export default function Item({news} : {news : any}) {
  function clickNews(news : news){
    window.open(news.url,'_blank');
  }
  return (
    <div className='flex justify-between cursor-pointer flex-col md:flex-row-reverse' onClick={() => { clickNews(news)}}>
        <div>
          <img src={news.image} className='w-full h-40 object-cover md:h-32 md:w-32 md:rounded-xl md:my-4 my-2 '/>
        </div>
        <div>
          <div className='text-gray-400 md:mt-4 text-sm' >{news.source}</div>
          <h1 className='text-md md:text-2xl' >{news.title}</h1>
          <p className='text-gray-400 text-sm' >{moment(news.date).fromNow()}</p>
          <p className='text-gray-400 text-sm mb-4' >{news.author}</p>
        </div>
    </div>
  )
}
