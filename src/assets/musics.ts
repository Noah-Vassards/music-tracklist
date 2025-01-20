export type MusicTrack = {
  id: string,
  title: string,
  artist: string,
  album: string,
  category: string,
  likes: number,
  dislikes: number,
  order: number,
}

const musicList : MusicTrack[] = [
{
  id: '1',
  title: 'Bohemian Rhapsody',
  artist: 'Queen',
  album: 'A Night at the Opera',
  category: 'Rock',
  likes: 1200,
  dislikes: 100,
  order: 1
},
{
  id: '2',
  title: 'Imagine',
  artist: 'John Lennon',
  album: 'Imagine',
  category: 'Pop',
  likes: 1500,
  dislikes: 50,
  order: 2
},
{
  id: '3',
  title: 'Billie Jean',
  artist: 'Michael Jackson',
  album: 'Thriller',
  category: 'Pop',
  likes: 2000,
  dislikes: 80,
  order: 3
},
{
  id: '4',
  title: 'Hotel California',
  artist: 'Eagles',
  album: 'Hotel California',
  category: 'Rock',
  likes: 1800,
  dislikes: 70,
  order: 4
},
{
  id: '5',
  title: 'Smells Like Teen Spirit',
  artist: 'Nirvana',
  album: 'Nevermind',
  category: 'Grunge',
  likes: 1700,
  dislikes: 90,
  order: 5
},
{
  id: '6',
  title: 'Like a Rolling Stone',
  artist: 'Bob Dylan',
  album: 'Highway 61 Revisited',
  category: 'Folk Rock',
  likes: 1600,
  dislikes: 60,
  order: 6
},
{
  id: '7',
  title: 'What a Wonderful World',
  artist: 'Louis Armstrong',
  album: 'What a Wonderful World',
  category: 'Jazz',
  likes: 1400,
  dislikes: 40,
  order: 7
},
{
  id: '8',
  title: 'Hey Jude',
  artist: 'The Beatles',
  album: 'Hey Jude',
  category: 'Rock',
  likes: 1900,
  dislikes: 30,
  order: 8
},
{
  id: '9',
  title: 'Respect',
  artist: 'Aretha Franklin',
  album: 'I Never Loved a Man the Way I Love You',
  category: 'Soul',
  likes: 1300,
  dislikes: 20,
  order: 9
},
{
  id: '10',
  title: 'Good Vibrations',
  artist: 'The Beach Boys',
  album: 'Smiley Smile',
  category: 'Rock',
  likes: 1100,
  dislikes: 25,
  order: 10
},
{
  id: '11',
  title: 'Purple Haze',
  artist: 'Jimi Hendrix',
  album: 'Are You Experienced',
  category: 'Rock',
  likes: 1250,
  dislikes: 35,
  order: 11
},
{
  id: '12',
  title: 'Superstition',
  artist: 'Stevie Wonder',
  album: 'Talking Book',
  category: 'Funk',
  likes: 1350,
  dislikes: 45,
  order: 12
}
]

export  const musicData = new Promise((resolve, reject) => setTimeout(resolve, 100, musicList))
