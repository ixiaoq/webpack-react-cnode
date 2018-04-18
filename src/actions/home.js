import axios from 'axios';
import API from 'api/api';

export const GET_TOPICS_REQUEST = 'topics/GET_TOPICS_REQUEST';
export const GET_TOPICS_SUCCESS = 'topics/GET_TOPICS_SUCCESS';
export const GET_TOPICS_FAIL = 'topics/GET_TOPICS_FAIL';

const getTopicsRequest = () => {
  return { 
    type: GET_TOPICS_REQUEST 
  }
};

const getTopicsSuccess = (topicsList) => {
  return {
    type: GET_TOPICS_SUCCESS,
    topicsList
  }
}

const getTopicsFail = (errorMsg) => {
  return {
    type: GET_TOPICS_FAIL,
    errorMsg
  }
}


export default function getTopics(options) {

  return dispatch => {

    dispatch(getTopicsRequest());

    return axios
      .get(API.getTopics, {
        params: {
          ...options
        }
      })

      .then(({ data }) => {
        dispatch(getTopicsSuccess(data.data))
      })

      .catch(errorMsg => {
        dispatch(getTopicsFail(errorMsg));
      })
  }
}