import { combineReducers } from 'redux'
import {
  GET_TOPICS_REQUEST,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_FAIL
} from '../actions/home'


const initState = {
  isLoad: 0,
  topicsList: [],
  errorMsg: ""
}

export default function reducers(state = initState, action) {
  
  switch (action.type) {
    case GET_TOPICS_REQUEST:
      return {
        ...state,
        isLoad: 1
      }

    case GET_TOPICS_SUCCESS:
      return {
        ...state,
        isLoad: 2,
        topicsList: action.topicsList
      }

    case GET_TOPICS_FAIL:
      return {
        ...state,
        isLoad: 3,
        errorMsg: action.errorMsg
      }

    default: 
      return state;
  }
}