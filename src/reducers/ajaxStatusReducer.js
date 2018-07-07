import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEnded(type) {
  return type == types.AJAX_CALL_ERROR || type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type == types.AJAX_CALL_BEGIN) {
    return state + 1;
  } else if (actionTypeEnded(action.type)) {
    return state - 1;
  }

  return state;
}


