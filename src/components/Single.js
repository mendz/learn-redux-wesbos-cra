import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

const Single = () => {
   return (
      <div className="single-photo">
         I'm the single
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

export default connect(mapStateToProps, mapDispatchToProps)(Single);
