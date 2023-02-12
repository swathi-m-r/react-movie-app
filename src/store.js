
import { configureStore } from "@reduxjs/toolkit";
import rootReducer  from "./reducers/rootReducer";
//import watchMoviesSaga from "./sagas/MoviesSaga";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleWare = createSagaMiddleware()
const store = configureStore({
    reducer:rootReducer,
    middleware: () => [sagaMiddleWare]
})

sagaMiddleWare.run(rootSaga)
export default store