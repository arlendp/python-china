<template>
    <form action="session" method="post" accept-charset="utf-8" class="login" @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="username" class="sr-only">Username</label>
            <input type="text" name="username" id="username" placeholder="Username/Email" v-model="username" required autofocus>
        </div>
        <div class="form-group">
            <label for="password" class="sr-only"></label>
            <input type="text" name="password" id="password" placeholder="Password" v-model="password" required>
        </div>
        <div class="form-group">
            <label>
                <input type="checkbox" v-model="remember">Remember Me</label>
        </div>
        <div class="form-group form-submit">
            <button type="submit" class="btn-submit login">Log In</button>
            <a title="find password" class="find-password">Find Password</a>
        </div>
    </form>
</template>
<script>
import api from '../api.js';
import errorMessage from '../util.js';
export default {
    data() {
            return {
                username: '',
                password: '',
                remember: true
            }
        },
        methods: {
            shakeError() {
                this.$emit('shakeError', true);
                setTimeout(() => {
                    this.$emit('shakeError', false);
                }, 1000);
            },
            onSubmit() {
                var data = {
                    username: this.username,
                    password: this.password,
                    permanent: this.remember
                };
                api.user.login(data, resp => {
                    this.$root.showLogin = false;
                }).error(this.shakeError.bind(this));
            }
        }
}
</script>
