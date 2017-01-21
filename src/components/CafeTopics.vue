<template>
    <lists :index="index" :loading="loading" :canLoad="canLoad" :topics="topics" @fetchData="fetchTopics"></lists>
</template>
<script>
import Lists from './common/Lists.vue';
import api from '../api.js';
export default {
    data() {
            return {
                index: 0,
                loading: false,
                canLoad: false,
                topics: []
            }
        },
        methods: {
            fetchTopics(index) {
                this.loading = true;
                this.canLoad = false;
                var params = this.$route.params;
                api.cafe.topics(params.slug, params.page, resp => {
                    this.topics = this.topics.concat(resp.data);
                    params.page = resp.pagination.next;
                    if (resp.pagination.next === null) {
                        this.canLoad = false;
                    } else {
                        this.canLoad = true;
                    }
                    this.loading = false;
                });
            }
        },
        components: {
            Lists
        }
}
</script>
