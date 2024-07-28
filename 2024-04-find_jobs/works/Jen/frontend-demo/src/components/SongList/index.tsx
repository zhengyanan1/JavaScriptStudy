import styles from './style.module.scss';
import { SongInfo } from '../../typings/types';
import { SongListTopBar } from '../SongListTopBar';
import { ListItem } from '../ListItem';

interface Props {
  songs: SongInfo[];
  change: (index: number) => void;
  curIndex: number;
}

export const SongList = (props: Props) => {
  const { songs, curIndex, change } = props;
  return (
    <div className={styles.root}>
      <SongListTopBar />
      {songs.map((item, index) => {
        return <ListItem key={item.id} index={index} checked={curIndex === index} data={item} change={change} />
      })}
    </div>

  )
}
