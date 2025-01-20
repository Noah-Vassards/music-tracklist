import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { MusicTrack } from './assets/musics';
import { Card } from './components/Card';
import { loadAsync } from './redux/rootReducer';
import { AppDispatch } from './redux/store';

enum Direction {
  UP = -1,
  DOWN = 1
}

function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>()
  const { tracks, status } = useSelector((state: any) => state.musics);
  const { page, itemPerPage, filter } = useSelector((state: any) => state.filter)
  const [filteredTracks, setFilteredTracks] = useState(tracks)

  const [allLiked, setAllLiked] = useState<string[]>([])
  const [allDisliked, setAllDisliked] = useState<string[]>([])
  const categories = [...new Set(tracks.map((item: MusicTrack) => item.category))];
  const currentPage = (page - 1) * itemPerPage;

  const moveTrack = (id: string, direction: Direction) => {
    dispatch({
      type: "MOVE_TRACK",
      payload: {
        id,
        direction
      }
    })
  };

  const changeFilter = (event: any) => {
    dispatch({
      type: "APPLY_FILTER",
      payload: {
        newFilter: event.target.value
      }
    })
  };

  const changeItemPerPage = (event: any) => {
    dispatch({
      type: "CHANGE_ITEM_PER_PAGE",
      payload: {
        newValue: event.target.value
      }
    })
  }

  const changePage = (newPage: number) => {
    const maxPage = Math.ceil(filteredTracks.length / itemPerPage);
    if (newPage < 1 || newPage > maxPage || isNaN(newPage)) {
      return
    }
    dispatch({
      type: "CHANGE_PAGE",
      payload: {
        newPage
      }
    })
  }

  const likeTrack = (track: MusicTrack) => {
    if (allLiked.find(id => id === track.id)) {
      return
    }
    let disliked = false
    const idx = allDisliked.findIndex(dislikedId => dislikedId === track.id)
    if (idx !== -1) {
      allDisliked.splice(idx, 1)
      disliked = true
    }
    setAllLiked([...allLiked, track.id])
    dispatch({
      type: "UPDATE_TRACK",
      payload: {
        id: track.id,
        updatedData: { likes: track.likes + 1, dislikes: disliked ? track.dislikes - 1 : track.dislikes }
      }
    })
  }

  const dislikeTrack = (track: MusicTrack) => {
    if (allDisliked.find(id => id === track.id)) {
      return
    }
    let liked = false
    const idx = allLiked.findIndex(likedId => likedId === track.id)
    if (idx !== -1) {
      allLiked.splice(idx, 1)
      liked = true
    }
    setAllDisliked([...allDisliked, track.id])
    dispatch({
      type: "UPDATE_TRACK",
      payload: {
        id: track.id,
        updatedData: { dislikes: track.dislikes + 1, likes: liked ? track.likes - 1 : track.likes }
      }
    })
  }

  useEffect(() => {
    if (filter !== "") {
      setFilteredTracks(tracks.filter((track: MusicTrack) => track.category === filter))
    } else {
      setFilteredTracks(tracks)
    }
  }, [filter, tracks, page, itemPerPage])

  useEffect(() => {
    dispatch(loadAsync())
  }, [dispatch])

  return (
    <div className="App">
      <h1>Music Playlist</h1>
      <div className='header'>
        <select id="filter" onChange={(e) => changeFilter(e)}>
          <option value="">No filter</option>
          {categories.map((category: any, idx) => <option key={idx}>{category}</option>)}
        </select>
        <select id='itemPerPage' onChange={(e) => changeItemPerPage(e)}>
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
        </select>
        <div className='pagination'>
          <button onClick={() => changePage(page - 1)}>{'<'}</button>
          <label>{page}</label>
          <button onClick={() => changePage(page + 1)}>{'>'}</button>
        </div>
      </div>
      <div className='body'>
        <div className='card-container'>
          {filteredTracks.slice(currentPage, currentPage + itemPerPage).length === 0 ? (
            <p>No tracks available</p>
          ) :
            filteredTracks.slice(currentPage, currentPage + itemPerPage).map((track: MusicTrack) => (
              <Card
                id={track.id}
                title={track.title}
                category={track.category}
                artist={track.artist}
                likes={track.likes}
                dislikes={track.dislikes}
                onMoveTrackUp={() => moveTrack(track.id, Direction.UP)}
                onMoveTrackDown={() => moveTrack(track.id, Direction.DOWN)}
                onLikeTrack={() => likeTrack(track)}
                onDislikeTrack={() => dislikeTrack(track)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
