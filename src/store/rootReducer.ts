import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/auth.slice";
import storage from "redux-persist/lib/storage";
import { websiteReducer } from "./website"
import { tableSizeReducer } from "./tableSize/tableSizeSlice";

const authPersistConfig = {
  key: "auth",
  storage,
};

const tableSizePersistConfig = {
  key: "tableSize",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  tableSize: persistReducer(tableSizePersistConfig, tableSizeReducer),
  website: websiteReducer,
});

export default rootReducer;
