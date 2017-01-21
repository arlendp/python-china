<template>
    <div class="login-form" :class="{shake: error}">
        <ul class="logTab clearfix">
            <li @click="login(true)">
                <router-link :class="{active: loginStatus}" to="login" title="LOG IN">LOG IN</router-link>
            </li>
            <li @click="login(false)">
                <router-link :class="{active: !loginStatus}" to="signup" title="SIGN UP">SIGN UP</router-link>
            </li>
        </ul>
        <router-view @shakeError="isError" name="login"></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginStatus: true,
            error: false
        }
    },
    created() {
    	this.$router.push("login");
    },
    methods: {
        login(status) {
            this.loginStatus = status;
        },
        isError(status) {
            this.error = status;
        }
    }
}
</script>
<style>
@import '../../lib/css/base.css';
.login-form {
    position: relative;
    width: 460px;
    margin-top: 120px;
    .logTab {
        margin-bottom: 35px;
        li {
            float: left;
            a {
                display: inline-block;
                padding: 10px 30px;
                color: var(--color-white);
                background-color: var(--btn-gray);
                font-weight: 300;
                &.active {
                    background-color: var(--btn-green);
                }
            }
        }
    }
    form.login {
        .form-group {
            padding: 10px 0;
        }
        input[type="text"] {
            background-color: transparent;
            border: none;
            border-bottom: 1px solid var(--input-border);
            box-sizing: border-box;
            width: 100%;
            font: var(--font-size-l) var(--font-input);
            transition: border 0.1s ease;
            padding: 6px 2px;
            color: var(--input-login);
            &:focus {
                outline: none;
                border-color: var(--input-border-focus);
            }
            &::placeholder {
                font-weight: 300;
            }
        }
        label {
            input[type="checkbox"] {
                vertical-align: top;
            }
            color: var(--font-color-form-gray);
        }
        .find-password {
            color: var(--color-green);
        }
        .form-submit {
            padding-top: 20px;
        }
    }
}
</style>
