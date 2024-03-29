import React from 'react'

const VideoCard = ({info}) => {
  // console.log(info)
  const {snippet, statistics} = info
  const {channelTitle, title, thumbnails} = snippet;


  return (
    <div className='p-2 m-2 w-72 shadow-md'>
        <img className='rounded-lg m-1' alt="Thumbnail"src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold my-1'>{title}</li>
            <li>{channelTitle}</li>
            <li> Views : {statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCard
