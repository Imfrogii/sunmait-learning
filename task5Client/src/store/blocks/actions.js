import { ACTION_CHANGE_STR_TO_FIND, ACTION_ADD_BLOCKS } from "../actionsTypes";

export const actionAddBlocks = () => dispatch =>{
  fetch("http://localhost:3001/blocks")
    .then(
      result =>
        result.json().then(data => {
          dispatch({
            type: ACTION_ADD_BLOCKS,
            payload: data
          });
        }),
      err => {
        throw new Error("There are no blocks");
      }
    )
    .catch(error => {
      alert(error.message);
    });
}

export const actionChangeStrToFind = (str) => {
    return {
        type: ACTION_CHANGE_STR_TO_FIND,
        payload: str,
    }
}
   