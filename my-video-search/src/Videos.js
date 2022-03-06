import React from 'react';
import ReactDOM from 'react-dom';
import data from './api/data.json'

 

const Videos = () => {

function logger(e) {
    console.log("click")
}

      return (
          <div>
              <div className="vote">
                  <i>thumb</i><div className='counter'>1</div><i>thumb</i>
              </div>
              <h2 onClick={()=>logger()}>Title</h2>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/{VIDEO_ID_GOES_HERE}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <button className="delete">Delete</button>
          </div>
      );
    }

    export default Videos;