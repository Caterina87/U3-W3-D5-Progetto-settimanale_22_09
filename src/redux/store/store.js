import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";
import playReducer from "../reducers/playReducer";
import likeReducer from "../reducers/likeReducer";

const store = configureStore({
  reducer: combineReducers({
    search: searchReducer,
    player: playReducer,
    likes: likeReducer,
  }),
});

export default store;
