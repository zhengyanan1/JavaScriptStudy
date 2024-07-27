import styles from './style.module.scss';
import { SongInfo } from '../../typings/types';
import { TopBar } from '../TopBar';
import { ListItem } from '../ListItem';
import { useState } from 'react';

interface Props {
  songs: SongInfo[];
}

export const SongList = (props: Props) => {
  const [curIndex, setIndex] = useState(2);

  const change = (index: number) => {
    setIndex(index);
  };

  const { songs } = props;
  return (
    <div className={styles.root}>
      <TopBar />
      {songs.map((item, index) => {

        return <ListItem key={index + item.title} index={index} checked={curIndex === index} data={item} change={change} />
      })}
    </div>

  )
}
