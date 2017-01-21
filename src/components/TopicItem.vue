<template>
    <li class="topic-item clearfix" :id="data.id">
        <a href="" :title="data.user.username" class="user-avatar">
            <avatar :user="data.user" :size="36"></avatar>
        </a>
        <div class="topic-meta clearfix" v-if="data.cafes">
            <span class="cafe" v-for="cafe in data.cafes"><span class="cafe-logo" :style="{'background-color': cafeBgColor(cafe.style.color)}"></span>
            <router-link class="cafe-name" :to="{name: 'cafe', params: {slug: cafe.slug}}">{{cafe.name}}</router-link>
            </span> 
        </div>
        <p class="topic-title">
            <router-link class="title" v-text="data.title" :to="{name: 'topic', params: {topicId: data.id}}"></router-link>
        </p>
        <p class="topic-info">
            <span class="time">{{data.created_at | timeago}}</span>
            <span class="view-count count-item" v-if="data.view_count">{{data.view_count | count('view')}}</span>
            <span class="like-count count-item" v-if="data.like_count">{{data.like_count | count('like')}}</span>
            <span class="comment-count count-item" v-if="data.comment_count">{{data.comment_count | count('comment')}}</span>
        </p>
    </li>
</template>
<script>
import Avatar from './Avatar.vue';
import {timeago} from '../filters.js';
export default {
    props: ['data'],
    computed: {
        
    },
    methods: {
       cafeBgColor(color) {
            return color ? color : 'black';
        }
    },
    components: {
        Avatar
    },
    filters: {
        timeago,
        count(value, label) {
            return value > 1 ? (value + ' ' + label + 's') : (value + ' ' + label);
        }
    }
}
</script>
<style>
@import '../../lib/css/base.css';
.topic-item {
    position: relative;
    margin-bottom: 8px;
    padding: 10px;
    border: 1px solid var(--border-color-gray);
    .user-avatar {
        position: absolute;
        top: 8px;
        right: 8px;
        border-radius: 50%;
        overflow: hidden;
    }
    .topic-meta {
        font-size: var(--font-size-m);
        .cafe {
            float: left;
            .cafe-logo {
                display: inline-block;
                vertical-align: middle;
                width: 1em;
                height: 1em;
                margin-right: 0.5em;
            }
            .cafe-name {
                color: var(--color-green);
                vertical-align: middle;
            }
        }
    }
    &:hover {
        border-color: var(--border-color-hover-gray);
    }
    .topic-title {
        font-size: var(--font-size-xl);
        margin: 8px 50px 0 0;
        @mixin text-overflow;
        .title {
            color: var(--font-color-dark-gray);
        }
    }
    .topic-info {
        margin-top: 8px;
        font-size: var(--font-size-s);
        color: var(--color-gray);
        .count-item {
            margin-left: 10px;
        }
    }
}
</style>
