import React, { useState } from "react";
import ReactDOM from 'react-dom';
import data from './api/data.json'



const Videos = (props) => {
      return (
          <div>
              <div>
                 
              </div>
              <h2 >Title</h2>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/{VIDEO_ID_GOES_HERE}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <button className="delete">Delete</button>
          </div>
      );
    }

    export default Videos;