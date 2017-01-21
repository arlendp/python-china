<template>
    <div class="overlay">
        <div class="overlay-mask" @click="changeLogin">
        </div>
        <div class="overlay-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            changeLogin() {
                this.$emit('changeStatus', false);
                // 路由回到首页
                this.$router.push('/');
            }
        }
    }
</script>
<style>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    .overlay-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.95);
    }
    .overlay-content {
        position: relative;
        max-width: 860px;
        padding: 0 200px;
    }
}
</style>
