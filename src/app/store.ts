import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSageMiddleware from "redux-saga";
import productReducer from "../features/Product/productSlice";
import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
  product: productReducer,
});

const sagaMiddleware = createSageMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
