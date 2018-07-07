import * as types from './actionTypes';

export function ajaxBegin() {
  return { type: types.AJAX_CALL_BEGIN };
}

export function ajaxError() {
  return { type: types.AJAX_CALL_ERROR };
}
