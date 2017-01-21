<template>
    <div class="home">
        <banner>
            <h2 class="title">ZERQU</h2>
            <p class="introduction">ZERQU is not a forum, it is an API based application</p>
        </banner>
        <nav-bar>
            <li>
                <router-link to="/" title="Following">Following</router-link>
            </li>
            <li>
                <router-link to="/?show=all" title="Topics">Topics</router-link>
            </li>
            <li>
                <router-link :to="{name: 'cafe-list'}" title="Cafes">Cafes</router-link>
            </li>
        </nav-bar>
        <lists :index="index" :loading="loading" :topics="topics" @fetchData="fetchTopics"></lists>
    </div>
</template>
<script>
import api from '../api.js';
import Logo from '../components/Logo.vue';
import TopicItem from '../components/TopicItem.vue';
import Banner from '../components/common/Banner.vue';
import NavBar from '../components/common/Nav.vue';
import Lists from '../components/common/Lists.vue';
export default {
    data() {
            return {
                loading: false,
                index: 0,
                topics: []
            }
        },

        methods: {
            fetchTopics(index) {
                this.loading = true;
                var query = this.$route.query;
                index ? (query.cursor = index) : (query.cursor = this.cursor);
                api.timeline(query, resp => {
                    this.index = resp.cursor;
                    this.topics = this.topics.concat(resp.data);
                    this.loading = false;
                })
            }
        },
        components: {
            Banner,
            NavBar,
            TopicItem,
            Logo,
            Lists
        }
}
</script>

