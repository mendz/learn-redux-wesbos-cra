// every reducer run every time there is action and we need to write logic in the reducer to decide it to update the state or not
function postComments(state = [], action) {
   switch (action.type) {
      case 'ADD_COMMENT':
         // return the new state with the new comment
         return [
            ...state,
            {
               user: action.author,
               text: action.comment
            }
         ];
      case 'REMOVE_COMMENT':
         console.log('remove comment');
         // we need to return without the deleted comment
         return [
            // from the start to the one we want to remove
            ...state.slice(0, action.i),
            // after the deleted one, to the end
            ...state.slice(action.i + 1),
         ];
      default:
         return state;
   }
}

function comments(state = [], action) {
   if (typeof action.postId !== 'undefined') {
      return {
         // take the current state
         ...state,
         // overwrite this post with a new one
         [action.postId]: postComments(state[action.postId], action)
      }
   }
   return state;
}

export default comments;