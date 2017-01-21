<template>
    <div class="avatar-wrapper" :style="avatarStyle">
        <img :src="user.avatar_url" :alt="user.username" v-if="user.avatar_url" :width="size">
        <span :style="username" v-else>{{user.username | capitalize}}</span>
    </div>
</template>
<script>
import wordColor from 'word-color';
export default {
    props: ['user', 'size'],
    data() {
    	return {

    	}
    },
    computed: {
        avatarStyle() {
            return {
                width: this.size + 'px',
                height: this.size + 'px',
                "background-color": this.user.username ? (wordColor(this.user.username)) : 'black'
            }
        },
        username() {
        	return {
        		'line-height': this.size + 'px'
        	}
        }
    },
    filters: {
    	capitalize(value) {
    		return value.charAt(0).toUpperCase();
    	}
    }
}
</script>
<style>
@import '../../lib/css/base.css';
.avatar-wrapper {
    display: inline-block;
    text-align: center;
    span {
        color: var(--color-white);
    }
}
</style>
