
import styles from './style.module.scss';
import { SongInfo } from '../../typings/types';
import { useEffect, useRef, useState } from 'react';

import iconPlay from './../../assets/icons/play.png';
import iconPause from './../../assets/icons/pause.png'
import { Progress } from '../Progress';


interface Props {
    data: SongInfo;
}
 
export const SongPlayer = (props: Props)=>{
  const { data } = props;
  const palyerRef: any = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

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

  const setUpdateProgress = (progress: number)=>{
    palyerRef.current.currentTime = progress;
  }

  useEffect(()=>{
    if(!data) return;
    setIsPlaying(true);    
    setProgress(0);
  }, [data]);

  useEffect(()=>{
    if(!data) return;

    const timer = setTimeout(()=>{
      setProgress(palyerRef.current.currentTime);
    }, 1000);
    
    return ()=>{
      clearTimeout(timer);
    }
  });

  useEffect(()=>{
    if(!data) return;

    const listener = ()=>{
      setIsPlaying(false);
      palyerRef.current.currentTime = 0;
    }
    palyerRef.current?.addEventListener('ended', listener);
    return ()=>{
      palyerRef.current?.removeEventListener('ended', listener)
    } 
  }, [data]);

  return (
    <div className={styles.root}>
      {data?.src && <audio ref={palyerRef} key={data.id} src={data.src} autoPlay/>}
      <span className={styles.title}>{data?.title || 'There is no one choosed'}</span>
      {data && <img src={isPlaying? iconPause : iconPlay} className={styles.btn} alt={isPlaying? 'Pause': 'Play'} onClick={onPlayOrPause}/>}
      {data && <Progress progress={progress} len={data.duration} setUpdateProgress={setUpdateProgress}/>}
    </div>
  )
}
