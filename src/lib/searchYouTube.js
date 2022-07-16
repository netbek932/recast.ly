import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';
//import exampleVideoData from './data/exampleVideoData.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    dataType: 'json', // added data type
    data: {
      q: query
    },
    success: function(data) {
      callback(data);
    }
  });
};

export default searchYouTube;