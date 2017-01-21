<template>
    <div class="content-wrapper clearfix">
        <div class="topic-lists">
            <ul class="topics" v-if="topics.length">
                <topic-item v-for="topic in topics" :data="topic"></topic-item>
            </ul>
            <logo :loadingStatus="true" class="logo" v-if="loading"></logo>
            <p class="loadMore" v-if="loadMore" @click="fetch(index)">Load More</p>
        </div>
    </div>
</template>
<script>
import Logo from '../Logo.vue';
import TopicItem from '../TopicItem.vue';
export default {
    props: ['index', 'topics', 'loading', 'canLoad'],
    computed: {
        loadMore() {
            if (typeof this.canLoad == "undefined") {
                return !(this.loading);
            } else {
                return this.canLoad;
            }
        }
    },
    created() {
        this.fetch();
    },
    methods: {
        fetch(index) {
            this.$emit('fetchData', index);
        }
    },
    components: {
        Logo,
        TopicItem
    }
}
</script>
<style>
@import '../../../lib/css/base.css';
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
    }
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
</style>
