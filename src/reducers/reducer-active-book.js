export default function(state=null, action) {
  console.log("reducer active book state:"+state+" action:"+action.type);
  switch(action.type) {
    case 'BOOK_SELECTED': {
  console.log("reducer active book state:"+state+" action:"+action.type+","+action.payload.title);
      return action.payload;
      }
  }
  return state;
}
