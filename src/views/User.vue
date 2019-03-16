<template>
  <div
    v-if="user"
    class="container">
    <h1 class="title is-1">{{ user.name }}</h1>
    <div class="tabs">
      <ul class="user-menu">
        <router-link
          tag="li"
          exact
          :to="{name: $routeNames.UserProfile}">
          <a href="">Profile</a>
        </router-link>
        <router-link
          tag="li"
          :to="{name: $routeNames.UserPosts}">
          <a href="">Posts</a>
        </router-link>
        <router-link
          tag="li"
          v-if="user.friendIds.length"
          :to="{name: $routeNames.UserFriends}">
          <a href="">Friends ({{ user.friendIds.length }})</a>
        </router-link>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {IUser} from '../common/interfaces/IUser';
  import {UserService} from '../common/services/UserService';

  interface IUserData {
    user: IUser | null;
  }

  export default Vue.extend({
    data(): IUserData {
      return {
        user: null
      };
    },
    watch: {
      $route() {
        this.getUser();
      }
    },
    created() {
      this.getUser();
    },
    methods: {
      getUser() {
        UserService.getUserById(this.$route.params.userId)
          .then(user => {
            this.user = user;
          });
      }
    }
  });
</script>

<style lang="scss" scoped>
  .user-menu li {
    margin-top: 0;
  }
</style>