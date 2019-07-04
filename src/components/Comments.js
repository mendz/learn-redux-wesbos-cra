import React, { Component } from 'react';

export class Comments extends Component {
   // constructor(props) {
   //    super(props);
   //    this.commentFormRef = React.createRef();
   //    this.authorRef = React.createRef();
   //    this.commentRef = React.createRef();
   // }

   state = {
      author: '',
      comment: '',
   }

   handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({
         [name]: value,
      });
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
      // const author = this.authorRef.current.value;
      // const comment = this.commentRef.current.value;
      this.props.addComment(postId, this.state.author, this.state.comment);
   }

   render() {
      return (
         <div className='comments'>
            {this.props.postComments.map(this.renderComments)}
            <form /* ref={this.commentFormRef} */ className="comment-form" onSubmit={this.handleSubmit}>
               <input type="text" name="author" /* ref={this.authorRef} */ placeholder="author" onChange={this.handleInputChange} />
               <input type="text" name="comment" /* ref={this.commentRef} */ placeholder="comment" onChange={this.handleInputChange} />
               <input type="submit" hidden />
            </form>
         </div>
      )
   }
}

export default Comments;
