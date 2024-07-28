
import styles from './style.module.scss';
import { formatNum, formatTime } from '../../utils';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  progress: number; //seconds
  len: number; //seconds,
  setUpdateProgress: (progress: number)=>void;
}
 
export const Progress = memo((props: Props)=>{
  const {len, progress, setUpdateProgress} = props;

  const [tempProgress, setTempProgress] = useState(0);
  const unit = useRef(1); //1秒对应几像素，用于拖拽进度时
  const progressRef = useRef<HTMLDivElement>(null);
  const isMoving = useRef(false);
  const tempBaseInfo = useRef({
    progress: 0,
    clientX: 0,
    tempProgress: 0, //同tempProgress的state一个意思，给mousemove事件和mouseup事件用的，用state的话，会有闭包的问题。
  });

  useEffect(()=>{
    const resizeListener = ()=>{
      // 不一样长度的歌或者屏幕尺寸，需要重新计算单位
      if(progressRef.current){
        const size = progressRef.current.getBoundingClientRect();
        unit.current = Math.floor(size.width / len * 100) / 100;
      }
    };
    resizeListener();

    window.addEventListener('resize', resizeListener);
    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);

    return ()=>{
      window.removeEventListener('resize', resizeListener);
      document.removeEventListener('mousemove', mouseMoveListener);
      document.removeEventListener('mouseup', mouseUpListener);
    }
  }, [len]);

  const onMouseDown = (event:any)=>{
    isMoving.current = true;
    setTempProgress(progress);

    const {clientX} = event;
    tempBaseInfo.current = {
      progress: progress,
      clientX,
      tempProgress: progress,
    }
  }

  const mouseMoveListener = useCallback((event: any)=>{
    if(isMoving.current){
      const {clientX} = event;

      const diff = clientX - tempBaseInfo.current.clientX;
      const curProgress = tempBaseInfo.current.progress + diff / unit.current;
      setTempProgress(curProgress)
      tempBaseInfo.current.tempProgress = curProgress;
    }
  }, [])

  const mouseUpListener = useCallback((event: any)=>{
    if(isMoving.current){
      const updateProgress = formatNum(tempBaseInfo.current.tempProgress, 0, len);
      setUpdateProgress(updateProgress);

      isMoving.current = false;
    }
  }, [tempBaseInfo, len, setUpdateProgress]);

  const realProgress = isMoving.current ? formatNum(tempProgress, 0, len) : progress;
  const percent = Math.floor(realProgress / len * 1000) / 10;

  return (
    <div className={styles.root}>
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
