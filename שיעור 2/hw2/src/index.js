import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ListStudentComp } from './studentComp';
import { GetYoutubeVideos } from './youtubevideo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <><ListStudentComp></ListStudentComp>
 <GetYoutubeVideos></GetYoutubeVideos>
 </>
    
);


