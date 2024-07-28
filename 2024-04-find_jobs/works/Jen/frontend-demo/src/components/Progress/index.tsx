
import styles from './style.module.scss';
import { formatNum, formatTime } from '../../utils';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { verify } from 'crypto';

interface Props {
  progress: number; //seconds
  len: number; //seconds,
  setUpdateProgress: (progress: number)=>void;
}
 
export const Progress = memo((props: Props)=>{
  const {len, progress, setUpdateProgress} = props;

  const progressRef = useRef<HTMLDivElement>(null);
  const isMoving = useRef(false);
  const [tempProgress, setTempProgress] = useState(0);
  const tempBaseInfo = useRef({
    progress: 0,
    clientX: 0,
  });
  const unit = useRef(1); //1秒对应几像素，用于拖拽进度时

  useEffect(()=>{
    const resizeListener = ()=>{
      if(progressRef.current){
        const size = progressRef.current.getBoundingClientRect();
        unit.current = Math.floor(size.width / len * 100) / 100;
      }
    };

    resizeListener();
    window.addEventListener('resize', resizeListener);
    return ()=>{
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  const onMouseDown = (event:any)=>{
    console.log('=====down');
    isMoving.current = true;
    setTempProgress(progress);

    const {clientX} = event;
    tempBaseInfo.current = {
      progress: progress,
      clientX,
    }
  }

  const onMouseMove = (event: any)=>{
    if(isMoving.current){
      const {clientX} = event;

      const diff = clientX - tempBaseInfo.current.clientX;
      setTempProgress(tempBaseInfo.current.progress + diff / unit.current);
    }
  }

  const finishProgressUpdate = (event: any)=>{
    if(isMoving.current){
      isMoving.current = false;
      const updateProgress = formatNum(tempProgress, 0, len);
      setUpdateProgress(updateProgress);
    }
  }

  const realProgress = isMoving.current ? formatNum(tempProgress, 0, len) : progress;
  const percent = Math.floor(realProgress / len * 1000) / 10;

  return (
    <div className={styles.root} onMouseMove={onMouseMove} onMouseUp={finishProgressUpdate} onMouseLeave={finishProgressUpdate}>
        <span className={styles.time}>{formatTime(realProgress)}</span>
        <div ref={progressRef} className={styles.outter}>
          <div className={styles.inner} style={{width: `${percent}%`}}>
            <div className={styles.dotWrapper}
              onMouseDown={onMouseDown}>
              <span className={styles.dot} />
            </div>
          </div>
        </div>
        <span className={styles.time}>{formatTime(len)}</span>
    </div>

  )
});
