import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authReducer } from "./auth";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["authState"],
  blacklist: [],
};

const rootReducer = combineReducers({
  authState: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
