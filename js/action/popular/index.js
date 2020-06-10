import Type from "../types";
import DataStore from "../../expend/dao/DataStore";


/**
 * 获取最新数据的异步action
 * @param storeName 获取哪一个菜单下面的数据
 * @param url 请求地址
 * **/
export function onLoadPopularData(storeName, url){
    return dispatch => {
        dispatch({type: Type.POPULAR_REFRESH, storeName});
        let datastore = new DataStore();
        datastore.fetchDate(url)
            .then(data=>{
                console.log(data);
                console.log(111);
                handleData(dispatch, storeName, data)
            })
            .catch(error=>{
                dispatch({
                    type: Type.LOAD_POPULAR_FAIL,
                    storeName,
                    error
                })
            })
    }
}
function handleData(dispatch, storeName, data) {
    dispatch({
        type: Type.LOAD_POPULAR_SUCCESS,
        items: data && data.data && data.data.items,
        storeName
    })
}
