import React, { useState } from 'react';
import { SongList } from './components/SongList';
import { SongInfo } from './typings/types';

import mp3Url1 from './assets/music/danxiaogui.m4a';
import mp3Url2 from './assets/music/aiyaotandangdang.mp3';
import mp3Url3 from './assets/music/iloveyoubaby.m4a';
import mp3Url4 from './assets/music/allisyou.m4a';


import './App.scss';
import { SongPlayer } from './components/SongPlayer';


const  songs: SongInfo[] = [
  {
    title: '胆小鬼',
    artistName: '梁咏琪',
    albumName: '梁咏琪',
    duration: 260,
    src: mp3Url1,
    id: '1234561'
  },
  {
    title: '爱要坦荡荡',
    artistName: '丁丁',
    albumName: '爱要坦荡荡',
    duration: 135,
    src: mp3Url2,
    id: '1234562'
  },
  {
    title: 'I Love You Baby',
    artistName: 'Paul Anka',
    albumName: 'Songs I Love to Sing',
    duration: 226,
    src: mp3Url3,
    id: '1234563'
  },
  {
    title: '全部都是你',
    artistName: 'DP龙猪',
    albumName: '全部都是你',
    duration: 203,
    src: mp3Url4,
    id: '1234564'
  }
];

function App() {
  const [index, setIndex] = useState(-1);

  const change = (index: number) => {
    setIndex(index);
  };

  return (
    <div className="App">
      <SongList songs={songs} curIndex={index} change={change}/>
      <SongPlayer data={songs[index]}/>
    </div>
  );
}

export default App;
