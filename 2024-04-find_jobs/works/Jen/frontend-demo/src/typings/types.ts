export interface SongInfo{
    id: string; //歌曲唯一标识id
    title: string;
    artistName: string;
    albumName: string;
    duration: number; // unit: second
    src: string;
}