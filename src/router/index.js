import Vue from 'vue'
import Router from 'vue-router'
import BoardList from '@/components/BoardList'
import BoardDetail from '@/components/BoardDetail'

Vue.use(Router)

export default new Router({
    routes : [
        {
            path : '/',
            name : '리스트',
            component : BoardList
        },
        {
            path : '/detail',
            name : '상세보기',
            component : BoardDetail
        },
    ]
})