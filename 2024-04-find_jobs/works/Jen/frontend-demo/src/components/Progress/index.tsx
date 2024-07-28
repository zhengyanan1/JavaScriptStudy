
import styles from './style.module.scss';
import { formatTime } from '../../utils';
import { memo } from 'react';

interface Props {
  progress: number; //seconds
  len: number; //seconds,
}
 
export const Progress = memo((props: Props)=>{
  const { progress, len} = props;

  const percent = Math.floor(progress / len * 1000) / 10;
  console.log(percent);

  return (
    <div className={styles.root}>
        <span className={styles.time}>{formatTime(progress)}</span>
        <div className={styles.outter}>
          <div className={styles.inner} style={{width: `${percent}%`}}>
            <div className={styles.dot}/>
          </div>
        </div>
        <span className={styles.time}>{formatTime(len)}</span>
    </div>

  )
});
