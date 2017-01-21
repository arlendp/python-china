<template>
    <div class="topic-wrapper">
        <article>
            <section class="topic-content">
                <h1 v-text="topic.title"></h1>
                <div class="entry-info" v-if="topic.cafes">
                    <router-link v-for="cafe in topic.cafes" :to="{name: 'cafe', params: {slug: cafe.slug}}" class="cafe-link">
                        <span class="cafe-logo" :style="{'background-color': cafeBgColor(cafe.style.color)}"></span>
                    </router-link>
                    <span class="time">{{topic.created_at | timeago}}</span>
                    <router-link class="username" v-text="'@' + topic.user.username" :to="'/u/' + topic.user.username"></router-link>
                </div>
                <div class="content" v-html="topic.content">
                </div>
            </section>
        </article>
    </div>
</template>
<script>
import api from '../api.js';
import {timeago} from '../filters.js';
export default {
    data() {
        return {
            topic: {
                user: {}
            }
        }
    },
    methods: {
        fetch() {
            var id = this.$route.params.topicId;
            api.topic.view(id, resp => {
                document.title = this.$site.name + ' — ' + resp.title;
                this.topic = resp;
                console.log(resp);
            });
        },
        cafeBgColor(color) {
            return color ? color : 'black';
        }
    },
    created() {
        this.fetch();
    },
    filters: {
        timeago
    }
}
</script>
<style>
@import '../../lib/css/base.css';
.topic-wrapper {
    max-width: 680px;
    padding-top: 60px;
    margin: 0 auto;
    article {
        .topic-content {
            h1 {
                font-size: var(--font-size-xxl);
                color: var(--title-color-black);
                font-weight: 400;
                line-height: 1.2;
            }
            .entry-info {
                padding: 10px 0;
            	font-size: var(--font-size-m);
            	color: var(--color-gray);
                .cafe-logo {
                    display: inline-block;
                    vertical-align: middle;
                    width: 1.5em;
                    height: 1.5em;
                    margin-right: 0.5em;
                }
                .username {
                    color: var(--color-green);
                    margin-left: 5px;
                }
            }
            .content {
                font-family: var(--font-topic);
                font-size: var(--font-size-l);
                font-weight: 400;
                line-height: 1.6;
                color: var(--color-topic-gray);
                a {
                    color: var(--color-green);
                }
                figure {
                    margin: 25px 0 30px;
                }
                img {
                    @mixin img-responsive;
                }
            }
        }
    }
}
</style>
