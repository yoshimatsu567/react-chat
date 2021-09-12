import { createStore, combineReducers, applyMiddleware } from 'redux';
import { MessagesReducer, MessagesListReducer } from '../messages/reducers';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const allReducers = combineReducers({
  messages: MessagesReducer,
  messagesList: MessagesListReducer,
});

const persistConfig = {
  key: 'root',
  whitelist: ['messages'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
