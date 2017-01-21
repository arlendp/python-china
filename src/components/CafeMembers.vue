<template>
    <div class="members-wrapper">
        <section class="moderators" v-if="users.admins.length">
            <h2>MODERATORS</h2>
            <ul class="moderator-lists clearfix">
                <li v-for="admin in users.admins">
                    <avatar :user="admin" :size="48" class="avatar"></avatar>
                    <p>
                        <a :href="'/u/' + (admin.username)" :title="admin.username" class="username">{{admin.username}}</a>
                    </p>
                </li>
            </ul>
        </section>
        <section class="members" v-if="users.data.length">
            <h2>MEMBERS</h2>
            <ul class="member-lists clearfix">
                <li v-for="member in users.data">
                    <avatar :user="member.user" :size="48" class="avatar"></avatar>
                    <p class="user-info">
                        <a :href="'/u/' + member.user.username" :title="member.user.username" v-text="member.user.username" class="username"></a>
                    </p>
                    <p class="visit-info">
                        {{member.label}} at {{member.created_at | timeago}}
                    </p>
                </li>
            </ul>
        </section>
        <logo :loadingStatus="true" class="logo" v-if="loading"></logo>
        <p class="loadMore" v-if="canLoad" @click="fetch()">Load More</p>
    </div>
</template>
<script>
import Avatar from './Avatar.vue';
import Logo from './Logo.vue';
import api from '../api.js';
import {
    timeago
} from '../filters.js';
export default {
    data() {
        return {
            users: {
                admins: [],
                data: []
            },
            loading: false,
            canLoad: false
        }
    },
    components: {
        Avatar,
        Logo
    },
    filters: {
        timeago
    },
    methods: {
        fetch() {
        	this.loading = true;
        	this.canLoad = false;
            var params = this.$route.params;
            api.cafe.users(params.slug, params.page, resp => {
                this.users.admins = resp.admins;
                this.users.data = this.users.data.concat(resp.data);
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
    created() {
        this.fetch();
    }
}
</script>
<style>
@import '../../lib/css/base.css';
.members-wrapper {
    h2 {
        font-size: var(--font-size-m);
        color: var(--color-gray);
        border-bottom: 1px solid var(--btn-gray);
        margin-bottom: 20px;
    }
    ul {
        li {
            float: left;
            text-align: center;
            width: 200px;
            margin: 0 10px 20px;
            p {
                margin-top: 5px;
            }
        }
    }
    .avatar {
        border-radius: 50%;
        overflow: hidden;
    }
    .username {
        color: var(--color-green);
    }
    .moderators {}
    .members {
        margin-top: 20px;
        .visit-info {
            color: var(--font-color-dark-gray);
        }
    }
    .logo {
    	margin: 100px auto;
    }
}
</style>
