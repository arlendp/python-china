<template>
    <div class="nav-wrapper">
        <nav class="clearfix">
            <ul>
                <slot></slot>
            </ul>
        </nav>
    </div>
</template>
<style>
@import '../../../lib/css/base.css';
.nav-wrapper {
    border-bottom: 1px solid rgba(100, 100, 100, 0.2);
    nav {
        max-width: 1100px;
        margin: 0 auto;
        ul {
            float: left;
            li {
                float: left;
                line-height: 48px;
                a {
                    padding: 0 12px;
                    color: var(--font-nav-color-gray);
                }
            }
        }
    }
}
</style>
