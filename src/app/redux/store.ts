import { configureStore } from "@reduxjs/toolkit";

import { loadingReducer } from "./slice";
// 필요한 reducer 를 불러온다.

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        loading: loadingReducer,
    },
    //redux-toolkit에서는 action에 함수 사용 불가 하기때문에 (직렬화 체크 false)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
