import styles from './style.module.scss';
 
export const SongListTopBar = ()=>{
  return (
    <div className={styles.root}>
        <span style={{flex: 3}}>TITLE</span>
        <span style={{flex: 3}}>ARTISTS</span>
        <span style={{flex: 3}}>ALBUM</span>
        <span style={{flex: 2}}>TIME</span>
    </div>
  )
}
