export enum AUTH_ACTION_TYPES {
  SET_ACCESS_TOKEN = "auth/SET_ACCESS_TOKEN",
  REMOVE_ACCESS_TOKEN = "auth/REMOVE_ACCESS_TOKEN",
  SET_REFRESH_TOKEN = "auth/SET_REFRESH_TOKEN",
  REMOVE_REFRESH_TOKEN = "auth/REMOVE_REFRESH_TOKEN",

  LOGIN_START = "auth/LOGIN_START",
  LOGIN_FAILURE = "auth/LOGIN_FAILURE",
  FETCH_REMOTE_USER_START = "auth/FETCH_REMOTE_USER_START",
  FETCH_REMOTE_USER_FAILURE = "auth/FETCH_REMOTE_USER_FAILURE",
  SET_CURRENT_USER = "auth/SET_CURRENT_USER",
  REFRESH_USER="auth/REFRESH_USER",

  FETCH_UPTODATE_Institution = "auth/FETCH_UPTODATE_Institution",

  LOGOUT_START = "auth/LOGOUT_START",
  LOGOUT_FAILURE = "auth/LOGOUT_FAILURE",
  LOGOUT_SUCCESS = "auth/LOGOUT_SUCCESS",
  CLEAR_AUTH_ERROR = "auth/CLEAR_AUTH_ERROR",

  SET_SELECTED_Institution = "auth/SET_SELECTED_Institution",
  ADD_NEW_Institution = "auth/ADD_NEW_Institution",
  SET_ATTACHED_InstitutionS = "auth/SET_ATTACHED_InstitutionS",
  SET_SELECTED_BRANCH = "auth/SET_SELECTED_BRANCH",

  UPDATE_THEME = "auth/UPDATE_THEME",
  REMOVE_THEME = "auth/REMOVE_THEME",

  SET_TEMPORARY_PERMISSIONS = "auth/SET_TEMPORARY_PERMISSIONS",
  CLEAR_TEMPORARY_PERMISSIONS = "auth/CLEAR_TEMPORARY_PERMISSIONS",
  
  SET_SELECTED_TILL = "auth/SET_SELECTED_TILL",
  CLEAR_SELECTED_TILL = "auth/CLEAR_SELECTED_TILL"
}
