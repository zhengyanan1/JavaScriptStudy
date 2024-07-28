

export function formatTime(seconds: number): string{
    if(seconds < 0 || seconds > 3600){
        throw 'unexpected duration of song!';
    }
    let min:any = Math.floor(seconds / 60);
    let sec:any = Math.floor(seconds % 60);

    if(min < 10){
        min = `0${min}`;
    }
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}