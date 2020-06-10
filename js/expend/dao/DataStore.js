import {AsyncStorage} from "react-native";

export default class DataStore {
    /**
     *  保存结果
     *  @param url
     *  @param data
     *  @param callback
     * **/
    saveDate(url, data, callback){
        if(!data || !url ) return;
        AsyncStorage.setItem(url, JSON.stringify(this._wraData(data)), callback )
    }

    _wraData(data){
        return {data, timestamp: new Date().getTime()}
    }

    /**
     *  获取本地数据
     *  @param url
     *  @returns {Promise}
     * **/
    fetchLocalData(url){
        return new Promise((resolve, reject)=>{
            AsyncStorage.getItem(url, (error, result)=>{
                if(!error){
                    try {
                        resolve(JSON.parse(result))
                    } catch (e) {
                        reject(e);
                        console.error(e);
                    }
                } else {
                    reject(error);
                    console.error(error);
                }
            })
        })
    }

    /**
     *  从网络获取数据
     *  @param url
     *  @returns {Promise}
     * **/
    fetchNetData(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
                .then(response=>{
                    if(response.ok){
                        return response.json();
                    }
                    throw new Error('Network response');
                })
                .then(response=>{
                    this.saveDate(url, response);
                    resolve(response);
                })
                .catch(error=>{
                    reject(error);
                })
        })
    }

    /**
     *  获取数据，优先获取本地数据，如果无本地数据或本地数据过期则获取网络请求
     *  @param url
     *  @returns {Promise}
     * **/
    fetchDate(url){
       return new Promise((resolve, reject)=>{
           this.fetchLocalData(url)
               .then(wrapDate=>{
                   if(wrapDate && DataStore.checkTimestampValid(wrapDate.timestamp)){
                       resolve(wrapDate);
                   } else {
                       this.fetchNetData(url).then(data=>{
                           resolve(this._wraData(data))
                       }).catch(error=>{
                           reject(error);
                       })
                   }
               }).catch(error=>{
                   this.fetchNetData(url).then(data=>{
                       resolve(this._wraData(data))
                   }).catch(error=>{
                       reject(error);
                   })
               })
       })
    }

    /**
     *  检查timestamp是否在有效期内
     *  @param timestamp 项目更新时间
     *  @reruens {boolean} true 不需要更新，false 需要更新
     * **/
    static checkTimestampValid(timestamp){
        const currentDate = new Date();
        const targetDate = new Date();
        targetDate.setTime(timestamp);
        if(currentDate.getMonth() !== targetDate.getMonth()) return false;
        if(currentDate.getDate() !== targetDate.getDate()) return false;
        if(currentDate.getHours() - targetDate.getHours() > 1 ) return false;
        return true;
    }
}
