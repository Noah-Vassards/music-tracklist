import { combineReducers } from "redux";
import { musicData, MusicTrack } from "../assets/musics";
import { createAsyncThunk } from "@reduxjs/toolkit";
import swapElements from "../utils/swapElements";

interface PlaylistState {
  tracks: MusicTrack[],
  status: 'idle' | 'loading' | 'failed'
}

interface FilterState {
  page: number,
  itemPerPage: number,
  filter: string
}

const INITITAL_FILTER_STATE: FilterState = {
  page: 1,
  itemPerPage: 4,
  filter: ""
}

const INITIAL_STATE: PlaylistState = {
  tracks: [],
  status: "idle"
}

export const loadAsync = createAsyncThunk(
  'loadAsync',
  async () => {
    const response = await musicData
    return response
  }
)

export const musicReducer = (
  state = INITIAL_STATE,
  action: any
) => {

  switch (action.type) {
    case "UPDATE_TRACK":
      return {
        ...state,
        tracks: state.tracks.map(track =>
          track.id === action.payload.id ? { ...track, ...action.payload.updatedData } : track
        )
      };
    case "MOVE_TRACK":
      return {
        ...state,
        tracks: swapElements(state.tracks, action.payload.id, action.payload.direction)
      }

    case loadAsync.pending.type:
      return { ...state, status: "loading" };
    case loadAsync.fulfilled.type:
      return { ...state, status: "idle", tracks: action.payload }; // Assuming the response contains tracks
    case loadAsync.rejected.type:
      return { ...state, status: "failed" };

    default:
      return state
  }
}

export const filterReducer = (
  state = INITITAL_FILTER_STATE,
  action: any
) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return { ...state, page: action.payload.newPage };
    case "CHANGE_ITEM_PER_PAGE":
      return { ...state, itemPerPage: action.payload.newValue };
    case "APPLY_FILTER":
      return { ...state, filter: action.payload.newFilter};
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  musics: musicReducer,
  filter: filterReducer
})


export default rootReducer;
