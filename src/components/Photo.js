import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export class Photo extends Component {
   render() {
      const { post, i, comments } = this.props;
      return (
         <figure className="grid-figure">
            <div className="grid-photo-wrap">
               <Link to={`/view/${post.code}`}>
                  <img src={post.display_src} alt={post.caption} className="grid-photo" />
               </Link>
               <TransitionGroup component="span" className="likes-heart">
                  <CSSTransition classNames="likes-heart" key={post.likes} timeout={{ enter: 500, exit: 500 }}>
                     <span>{post.likes}</span>
                  </CSSTransition>
               </TransitionGroup>
            </div>

            <figcaption>
               <p>{post.caption}</p>
               <div className="control-buttons">
                  <button className="likes">&hearts; {post.likes}</button>
                  <Link className="button" to={`/view/${post.code}`}>
                     <span className="comment-count">
                        <span className="speech-bubble"></span>
                        {comments[post.code] ? comments[post.code].length : 0}
                     </span>
                  </Link>
               </div>
            </figcaption>
         </figure>
      )
   }
}

export default Photo;
