<template>
    <div class="cafe-list-wrapper">
        <h2>CAFES</h2>
        <logo :loadingStatus="true" class="logo" v-if="loading"></logo>
        <ul class="cafe-list" v-if="cafes.length">
            <cafe-card v-for="cafe in cafes" :cafe="cafe"></cafe-card>
        </ul>
    </div>
</template>
<script>
import CafeCard from '../components/CafeCard.vue';
import api from '../api.js';
import Logo from '../components/Logo.vue';
export default {
    data() {
            return {
                cafes: [],
                index: 0,
                loading: false
            }
        },
        methods: {
            fetch() {
            	this.loading = true;
                api.cafe.list(resp => {
                    this.cafes = resp.data;
                    this.index = resp.cursor;
                    this.loading = false;
                });
            }
        },
        created() {
            this.fetch();
        },
        components: {
            CafeCard,
            Logo
        }
}
</script>
<style>
@import '../../lib/css/base.css';
.cafe-list-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 20px;
    text-align: center;
    h2 {
        font-size: var(--font-size-m);
        color: var(--color-gray);
        border-bottom: 1px solid var(--btn-gray);
        margin-bottom: 5px;
        padding-bottom: 8px;
        font-weight: 400;
    }
    .logo {
    	margin: 100px auto;
    }
}
</style>
