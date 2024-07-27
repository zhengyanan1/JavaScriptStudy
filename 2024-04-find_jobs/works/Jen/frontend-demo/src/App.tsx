import React from 'react';
import './App.scss';
import { ListItem } from './components/ListItem';
import { SongList } from './components/SongList';

//TODO: Delete
const  songs = [
  {
    title: '胆小鬼',
    artistName: '梁咏琪',
    albumName: '梁咏琪',
    duration: 260,
  },
  {
    title: '胆小鬼',
    artistName: '梁咏琪',
    albumName: '梁咏琪',
    duration: 260,
  },
  {
    title: '胆小鬼',
    artistName: '梁咏琪',
    albumName: '梁咏琪',
    duration: 260,
  },
  {
    title: '胆小鬼',
    artistName: '梁咏琪',
    albumName: '梁咏琪',
    duration: 260,
  }
];

function App() {
  return (
    <div className="App">
      <SongList songs={songs}/>
    </div>
  );
}

export default App;
