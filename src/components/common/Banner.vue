<template>
    <div class="banner">
        <div class="info-container">
            <div class="info">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<style>
@import '../../../lib/css/base.css';
.banner {
    position: relative;
    height: 240px;
    background: url(https://dn-yuehu.qbox.me/cover/editors-picks/q8Up172j5piiqQvu.jpg/cover) center / cover;
    color: var(--color-white);
    .info-container {
        position: absolute;
        bottom: 0;
        padding: 20px 0;
        width: 100%;
        .info {
            max-width: 1100px;
            margin: 0 auto;
        }
    }
}
</style>
