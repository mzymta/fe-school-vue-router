<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="inner">
          <div class="logo"/>
          <nav class="main-nav">
            <router-link
              exact
              :to="{name: $routeNames.Home}">Home</router-link>
            <router-link :to="{name: $routeNames.About}">About</router-link>
            <router-link disabled :to="{name: $routeNames.Users}">Users</router-link>
          </nav>
          <button
            @click="toggleLogin"
            class="button is-primary is-small">{{ loggedIn ? 'Logout' : 'Login' }}</button>
        </div>
      </div>
    </header>
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {AuthService} from './common/services/AuthService';

  export default Vue.extend({
    data() {
      return {
        loggedIn: false
      };
    },
    methods: {
      toggleLogin() {
        if (this.loggedIn) {
          this.loggedIn = false;
          AuthService.logout();
        } else {
          this.loggedIn = true;
          AuthService.login();
        }
      }
    }
  });
</script>
