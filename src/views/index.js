import Login from './Login.vue';
import Signup from './Signup.vue';
import Home from './Home.vue';
import Cafe from './Cafe.vue';
import CafeList from './CafeList.vue';
import CafeTopics from '../components/CafeTopics.vue';
import CafeMembers from '../components/CafeMembers.vue';
import Topic from './Topic.vue';
export default [{
        path: '/',
        components: {
            main: Home
        }
    }, {
        path: '/login',
        components: {
            login: Login
        }
    }, {
        path: '/signup',
        components: {
            login: Signup
        }
    },

    {
        path: '/c',
        name: 'cafe-list',
        components: {
            main: CafeList
        }
    }, {
        path: '/c/:slug',
        name: 'cafe',
        components: {
            main: Cafe,
        },
        // 这里通过重定向来解决有时默认不进入cafe-topics的问题
        // https://github.com/vuejs/vue-router/issues/608
        redirect: {
            name: 'cafe-topics'
        },
        children: [{
            path: '',
            name: 'cafe-topics',
            component: CafeTopics
        }, {
            path: 'members',
            name: 'cafe-members',
            component: CafeMembers
        }]
    }, {
        path: '/t/:topicId',
        name: 'topic',
        components: {
            main: Topic
        }
    }
]
