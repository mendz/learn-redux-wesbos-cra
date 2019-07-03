import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';


function mapStateToProps(state) {
   return {
      posts: state.posts,
      comments: state.comments,
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(actionCreators, dispatch);
}

export const customConnect = Component => {
   return connect(mapStateToProps, mapDispatchToProps)(Component);
}