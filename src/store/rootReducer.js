import { combineReducers } from 'redux';
import ModalReducer from '../components/Modal/redux/reducer';
import ReplenishmentReducer from '../components/Replenishment/redux/reducer';

export const rootReducer = combineReducers({
  modal: ModalReducer,
  replenishment: ReplenishmentReducer,
});
