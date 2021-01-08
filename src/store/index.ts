import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import { authReducer } from "./auth";
import { checkLoggedInMiddleware } from "./middleware";
import { wisataListReducer, wisataReducer } from "./wisata";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "wisata"],
  blacklist: [],
};

const rootReducer = combineReducers({
  auth: authReducer,
  wisatas: wisataListReducer,
  wisata: wisataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(
  persistedReducer,
  applyMiddleware(checkLoggedInMiddleware, thunk)
);
export const persistor = persistStore(store);
