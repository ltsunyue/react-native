
export default class NavigationUtil {
    /**
     * 指定到指定界面
     * @param params
     * **/
    static goPage(params, page){
        const navigation = NavigationUtil.navigation;
        if(!navigation){
            console.log('不能为空');
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }

    /**
     * 重置到首页
     * @param params
     * **/
    static resetToHomePage(params){
        const {navigation} = params;
        navigation.navigate('Main')
    }
}