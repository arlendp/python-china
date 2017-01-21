import Vue from 'vue';
var zerqu = window.ZERQU || {};
if (process.env.NODE_ENV == 'development') {
    window.ga = function() {};
    Vue.config.debug = true;
}

require('../lib/css/base.css');
require('../lib/css/ui.css');


import VueRouter from 'vue-router';
import App from './App.vue';
import * as filters from './filters';

Object.defineProperty(Vue.prototype, '$site', {
    get: function() {
        return zerqu.site || { name: 'ZERQU' }
    }
});

// Object.keys(filters).forEach(function(v) {
//     Vue.filter(v, filters[v]);
// });

Vue.use(VueRouter);

import views from './views';

var router = new VueRouter({
    mode: 'history',
    routes: views
});

new Vue({
    el: "#app",
    router,
    template: "<app></app>",
    components: {
        App
    }
});
// router.map(views);

// router.start(App, "#app");
require('./api').register(router.app);
