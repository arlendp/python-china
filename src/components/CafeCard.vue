<template>
    <li class="cafe-card">
        <div class="card-content">
            <router-link class="card-link" :style="cardStyle" :to="'/c/' + cafe.slug">
                <h3 v-text="cafe.name"></h3>
            </router-link>
            <router-link class="user-link" :to="'/u/' + cafe.user.username">
                <avatar :user="cafe.user" :size="36"></avatar>
            </router-link>
        </div>
        <p class="card-info" v-text="cafe.description"></p>
    </li>
</template>
<script>
import Avatar from './Avatar.vue';
export default {
    props: ['cafe'],
    components: {
        Avatar
    },
    computed: {
        cardStyle() {
            if (this.cafe.style.color) {
                return {
                    'background-color': this.cafe.style.color
                }
            } else if (this.cafe.style.cover) {
                return {
                    'background-image': 'url(' + this.cafe.style.cover + ')'
                }
            } else {
            	return {
            		'background-color': 'rgba(0, 0, 0, 0.8)'
            	}
            }
        }
    }
}
</script>
<style>
@import '../../lib/css/base.css';
.cafe-card {
    display: inline-block;
    width: 300px;
    margin: 15px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    .card-content {
        position: relative;
        .user-link {
            position: absolute;
            top: 10px;
            right: 10px;
            border-radius: 50%;
            overflow: hidden;
            &:hover {
            	opacity: 0.8;
            }
        }
        .card-link {
            display: block;
            height: 120px;
            position: relative;
            &:hover {
            	opacity: 0.8;
            }
            h3 {
            	width: 100%;
            	box-sizing: border-box;
            	position: absolute;
            	bottom: 0;
            	padding: 20px 14px;
            	color: var(--color-white);
            	font-weight: 400;
            	background-image: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.4));
            }
        }
    }
    .card-info {
    	@mixin text-overflow;
    	font-size: var(--font-size-m);
    	line-height: 40px;
    	color: var(--font-color-dark-gray);
    	padding: 0 10px;
    }
}
</style>
