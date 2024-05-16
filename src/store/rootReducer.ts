import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/auth.slice";
import { regionReducer } from "./regions";
import storage from "redux-persist/lib/storage";
import { websiteReducer } from "./website";
import { tableSizeReducer } from "./tableSize/tableSizeSlice";

const authPersistConfig = {
  key: "auth",
  storage,
};

const tableSizePersistConfig = {
  key: "tableSize",
  storage,
};

const regionPersistConfig = {
  key: "regions",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  regions: persistReducer(regionPersistConfig, regionReducer),
  tableSize: persistReducer(tableSizePersistConfig, tableSizeReducer),
  website: websiteReducer,
});

export default rootReducer;
