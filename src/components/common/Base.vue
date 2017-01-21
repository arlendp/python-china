<template>
    <div class="home">
        <div class="banner">
        </div>
        <div class="nav-wrapper">
            <nav class="clearfix">
                <ul>
                    <li><a href="/" title="Following">Following</a></li>
                    <li><a href="/?show=all" title="Topics">Topics</a></li>
                    <li><a href="" title="Cafes">Cafes</a></li>
                </ul>
            </nav>
        </div>
        <div class="content-wrapper clearfix">
            <div class="topic-lists">
                <ul class="topics" v-if="topics.length">
                    <topic-item v-for="topic in topics" :data="topic"></topic-item>
                </ul>
                <logo :loadingStatus="true" class="logo" v-if="loading"></logo>
                <p class="loadMore" v-if="!loading" @click="fetchTopics(index)">Load More</p>
            </div>
        </div>
    </div>
</template>
<script>
import api from '../api.js';
import Logo from '../components/Logo.vue';
import TopicItem from '../components/TopicItem.vue';
export default {
    data() {
            return {
                loading: false,
                index: 0,
                topics: []
            }
        },
        created() {
            this.fetchTopics();
        },
        methods: {
            fetchTopics(index) {
                this.loading = true;
                var query = this.$route.query;
                index ? (query.cursor = index) : (query.cursor = this.cursor);
                api.timeline(query, resp => {
                    console.log(resp);
                    this.index = resp.cursor;
                    this.topics = this.topics.concat(resp.data);
                    this.loading = false;
                })
            }
        },
        components: {
            TopicItem,
            Logo
        }
}
</script>
<style>
@import '../../lib/css/base.css';
.home {
    position: relative;
    padding-top: 64px;
    .banner {
        height: 240px;
        background: url(https://dn-yuehu.qbox.me/cover/editors-picks/q8Up172j5piiqQvu.jpg/cover) center / cover;
    }
    .nav-wrapper {
        border-bottom: 1px solid rgba(100, 100, 100, 0.2);
        nav {
            max-width: 1100px;
            margin: 0 auto;
            ul {
                float: left;
                li {
                    float: left;
                    line-height: 48px;
                    a {
                        padding: 0 12px;
                        color: var(--font-nav-color-gray);
                    }
                }
            }
        }
    }
    .content-wrapper {
        max-width: 1100px;
        margin: 20px auto 0;
        padding-bottom: 18px;
        .topic-lists {
            float: left;
            width: 760px;
            .logo {
                margin: 100px auto;
            }
            .loadMore {
            	text-align: center;
            	line-height: 40px;
            	background-color: var(--btn-light-gray);
            	cursor: pointer;
            	color: var(--color-gray);
            	&:hover {
            		background-color: var(--border-color-hover-gray);
            	}
            }
        }
    }
}
</style>
