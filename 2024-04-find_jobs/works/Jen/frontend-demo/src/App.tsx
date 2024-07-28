import React, { useState } from 'react';
import { SongList } from './components/SongList';
import { SongInfo } from './typings/types';

import mp3Url from './assets/music/danxiaogui.m4a';
import './App.scss';
import { SongPlayer } from './components/SongPlayer';


//TODO: Delete
const  songs: SongInfo[] = [
  {
    title: '胆小鬼1',
    artistName: '梁咏琪',
    albumName: '梁咏琪',
    duration: 260,
    src: mp3Url,
    id: '1234561'
  },
  {
    title: '胆小鬼2',
    artistName: '梁咏琪',
    albumName: '梁咏琪',
    duration: 260,
    src: mp3Url,
    id: '1234562'
  },
  {
    title: '胆小鬼3',
    artistName: '梁咏琪',
    albumName: '梁咏琪',
    duration: 260,
    src: mp3Url,
    id: '1234563'
  },
  {
    title: '胆小鬼4',
    artistName: '梁咏琪',
    albumName: '梁咏琪',
    duration: 260,
    src: mp3Url,
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
