import React, { Component } from 'react';

export class Comments extends Component {
   constructor(props) {
      super(props);
      this.commentFormRef = React.createRef();
      this.authorRef = React.createRef();
      this.commentRef = React.createRef();
   }

   renderComments(comment, i) {
      return (
         <div className="comment" key={i}>
            <p>
               <strong>{comment.user}</strong>
               {comment.text}
               <button className="remove-comment">&times;</button>
            </p>
         </div>
      );
   }

   handleSubmit = (e) => {
      e.preventDefault();
      console.log('Submitting the form!');
      const { postId } = this.props.match.params;
      const author = this.authorRef.current.value;
      const comment = this.commentRef.current.value;
      this.props.addComment(postId, author, comment);
   }

   render() {
      return (
         <div className='comments'>
            {this.props.postComments.map(this.renderComments)}
            <form ref={this.commentFormRef} className="comment-form" onSubmit={this.handleSubmit}>
               <input type="text" ref={this.authorRef} placeholder="author" />
               <input type="text" ref={this.commentRef} placeholder="comment" />
               <input type="submit" hidden />
            </form>
         </div>
      )
   }
}

export default Comments;
