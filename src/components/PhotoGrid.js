import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

const PhotoGrid = () => {
   return (
      <div className="photo-grid">
         I'm the photo grid
      </div>
   )
}

function mapStateToProps(state) {
   return {
      posts: state.posts,
      comments: state.comments,
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
