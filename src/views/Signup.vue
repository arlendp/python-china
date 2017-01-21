<template>
    <form action="session/new" method="post" accept-charset="utf-8" class="login" @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="email" class="sr-only">Email</label>
            <input type="text" name="email" id="email" v-model="email" placeholder="Email" required autofocus>
        </div>
        <div class="form-group form-submit">
            <button type="submit" class="btn-submit login">Sign Up</button>
        </div>
    </form>
</template>
<script>
import api from '../api.js';
import errorMessage from '../util.js';
export default {
    data() {
            return {
                email: ''
            }
        },
        methods: {
            shakeError() {
                this.$emit('shakeError', true);
                setTimeout(() => {
                    this.$emit('shakeError', false);
                }, 1000);
            },
            onSubmit(e) {
                e.preventDefault();
                api.user.signup(this.email, resp => {
                    this.$root.show('info', resp.message);
                }).error(resp => {
                    this.$root.show('error', errorMessage(resp.error_form));
                    this.shakeError();
                });
            }
        }
}
</script>
