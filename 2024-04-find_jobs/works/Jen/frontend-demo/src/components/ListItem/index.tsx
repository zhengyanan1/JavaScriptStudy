
import styles from './style.module.scss';
import { SongInfo } from '../../typings/types';

interface Props {
    data: SongInfo;
    index: number;
    checked?: boolean;
    change: (index: number) => void;
}
 
export const ListItem = (props: Props)=>{
  const { data, index, checked, change } = props;
  const {title, artistName, albumName, duration } = data;

  const onClick = ()=>{
    if(checked) return;
    change(index);
  }

  return (
    <div className={`${styles.root} ${checked ? styles['root--choosed']: ''}` } onClick={onClick}>
        <span style={{flex: 3}}>{title}</span>
        <span style={{flex: 3}}>{artistName}</span>
        <span style={{flex: 3}}>{albumName}</span>
        <span style={{flex: 2}}>{duration}</span>
    </div>

  )
}
