<template>
    <div>
        <header id="header">
            <div class="container clearfix">
                <div class="navs">
                    <router-link class="site-logo" to="/">
                        <logo></logo>
                    </router-link>
                    <nav>
                        <ul v-if="$site.links.length">
                            <li v-for='link in $site.links'>
                                <a :href="link.url" :title="link.name" v-text="link.name"></a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="account-info">
                    <div class="btn-wrapper" v-if="!user.name">
                        <button class="login" @click="login">Log in</button>
                    </div>
                    <div class="user-info" v-if="user">
                        <a class="avatar"></a>
                        <ul class="">
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <router-view name="main" class="main-content"></router-view>
        <transition name="fade">
            <overlay v-if="showLogin" @changeStatus="changeLogin" transition="fade">
                <login-form></login-form>
            </overlay>
        </transition>
        <footer>
            <div class="site-info clearfix">
                <p class="copyright">Copyright &copy; {{year}} ZERQU</p>
                <p class="theme">
                    <a href="https://github.com/lepture/zerqu" title="ZERQU">ZERQU</a> ·
                    <a href="https://github.com/zerqu/qingcheng" title="青城">青城</a>
                </p>
            </div>
        </footer>
    </div>
</template>
<script>
import Logo from './components/Logo.vue';
import Overlay from './components/Overlay.vue';
import LoginForm from './components/LoginForm.vue';
export default {
    data() {
            return {
                user: {},
                showLogin: false
            }
        },
        computed: {
            year() {
                return (new Date()).getYear() + 1900;
            }
        },
        components: {
            Logo,
            Overlay,
            LoginForm
        },
        methods: {
            login() {
                console.log('click');
                this.showLogin = true;
            },
            // 监听overlay模块事件
            changeLogin(status) {
                this.showLogin = status;
            }
        }
}
</script>
<style>
@import '../lib/css/base.css';
header {
    position: relative;
    z-index: 1;
    box-shadow: 0 1px 0 var(--border-color-hover-gray);
    .container {
        max-width: 1100px;
        margin: 0 auto;
        .navs {
            float: left;
            .site-logo {
                margin-top: 10px;
                float: left;
                transform: scale(0.64);
            }
            nav {
                float: left;
                font-family: var(--nav-font);
                ul {
                    li {
                        display: inline-block;
                        > a {
                            font-size: var(--font-size-m);
                            line-height: 64px;
                            padding: 0 12px;
                            color: var(--font-color-gray);
                        }
                    }
                }
            }
        }
        .account-info {
            float: right;
            .btn-wrapper {
                line-height: 64px;
                float: right;
                button.login {
                    background-color: var(--btn-green);
                    padding: 0 24px;
                    line-height: 32px;
                    font-family: var(--btn-font);
                    font-size: var(--font-size-s);
                    color: var(--color-white);
                    border-radius: 32px;
                }
            }
        }
    }
}

.main-content {
    position: relative;
}

footer {
    border-top: 1px solid #eee;
    padding: 18px 0;
    .site-info {
        width: 1100px;
        margin: 0 auto;
        font-size: var(--font-size-m);
        .copyright {
            float: left;
            font-size: var(--font-size-m);
            color: var(--color-gray);
        }
        .theme {
            float: right;
            a {
                color: var(--color-green);
            }
        }
    }
}
</style>
