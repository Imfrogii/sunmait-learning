import { ACTION_CHANGE_STR_TO_FIND, ACTION_ADD_BLOCKS } from "../actionsTypes";
import { getBlocks } from "../../store/server";

export const actionAddBlocks = () => dispatch =>{
    getBlocks()
    .then(
      result => {
        dispatch({
            type: ACTION_ADD_BLOCKS,
            payload: result,
        });
      },
      err => {
        throw new Error("There are no blocks");
      }
    )
    .catch((error)=>{
      alert(error.message);
    })
}

export const actionChangeStrToFind = (str) => {
    return {
        type: ACTION_CHANGE_STR_TO_FIND,
        payload: str,
    }
}
   