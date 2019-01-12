//action type
const Add_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'

//reducer
export function counter(state=0, action){
    switch(action.type){
        case Add_GUN:
          return state+1
        case REMOVE_GUN:
          return state-1
        default:
          return 10
    }
}

//action creator
export function addGUN(){
    return {type: Add_GUN}
}
export function removeGUN(){
    return {type: REMOVE_GUN}
}
//异步函数提交dispatch
export function addGunAsync(){
    return dispatch => {
        setTimeout(() => {
           dispatch(addGUN())
        }, 2000)
    }
}

