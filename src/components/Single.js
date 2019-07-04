import React from 'react';
import { customConnect } from '../utils/reactReduxConnect';

import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
   render() {
      const { postId } = this.props.match.params;
      // index of the post
      const i = this.props.posts.findIndex(post => post.code === postId);
      // get us the post
      const post = this.props.posts[i];
      // get us the comments
      const postComments = this.props.comments[postId] || [];

      return (
         <div className="single-photo">
            <Photo i={i} post={post} {...this.props} />
            <Comments postComments={postComments} {...this.props} />
         </div>
      );
   }
}

export default customConnect(Single);
