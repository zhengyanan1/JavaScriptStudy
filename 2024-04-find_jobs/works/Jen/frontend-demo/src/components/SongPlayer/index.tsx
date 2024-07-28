
import styles from './style.module.scss';
import { SongInfo } from '../../typings/types';
import { useEffect, useRef, useState } from 'react';

import iconPlay from './../../assets/icons/play.png';
import iconPause from './../../assets/icons/pause.png'


interface Props {
    data: SongInfo;
}
 
export const SongPlayer = (props: Props)=>{
  const { data } = props;
  const palyerRef: any = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const onPlayOrPause = ()=>{
    if(!data){
      return;
    }
    setIsPlaying(!isPlaying);
    if(isPlaying){
      palyerRef.current?.pause();
    }else{
      palyerRef.current?.play();
    }
  }

  useEffect(()=>{
    setIsPlaying(true);
  }, [data]);

  return (
    <div className={styles.root}>
      {data?.src && <audio ref={palyerRef} key={data.id} src={data.src} autoPlay/>}
      <span className={styles.title}>{data?.title || 'There is no one choosed'}</span>
      {data && <img src={isPlaying? iconPause : iconPlay} className={styles.btn} alt={isPlaying? 'Pause': 'Play'} onClick={onPlayOrPause}/>}
    </div>
  )
}
