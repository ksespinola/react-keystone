var axios = require('axios');
var {API_BASE} = require('../constants.json');
var CollectionActions = require('../actions/collection');

const CollectionSource = {
  find: {
    remote(state) {
      return axios.get(`${API_BASE}${state.get('model')}`);
    },
    
    local(state){
      return state.get('data');
    },
    loading: CollectionActions.loading,
    success: CollectionActions.findSuccess, // (required)
    error: CollectionActions.error, // (required)

    shouldFetch(state) {
      return state.get('data').count() === 0;
    }
    
  },
};

module.exports = CollectionSource;