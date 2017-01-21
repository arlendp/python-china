<template>
    <div class="cafe">
        <banner>
            <h2 class="title" v-text="cafe.name"></h2>
            <p class="introduction" v-text="cafe.description"></p>
        </banner>
        <nav-bar>
            <li>
                <router-link :to="{name: 'cafe', params: {slug: cafe.slug}}" title="Topics">Topics</router-link>
            </li>
            <li>
                <router-link :to="{name: 'cafe-members', params: {slug: cafe.slug}}" title="Members">Members</router-link>
            </li>
        </nav-bar>
        <router-view class="cafe-content"></router-view>
    </div>
</template>
<script>
import Banner from '../components/common/Banner.vue';
import NavBar from '../components/common/Nav.vue';
import api from '../api.js';
export default {
    data() {
            return {
                cafe: {
                    slug: 'default'
                }
            }
        },
        created() {
            var slug = this.$route.params.slug;
            api.cafe.view(slug, resp => {
                document.title = this.$site.name + ' — ' + resp.name;
                this.cafe = resp;
            });
        },
        components: {
            Banner,
            NavBar
        }
}
</script>
<style>
.cafe {
    .cafe-content {
        max-width: 1100px;
        margin: 20px auto 0;
        padding-bottom: 18px;
    }
}
</style>
