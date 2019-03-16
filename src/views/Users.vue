<template>
  <div class="container">
    <h1 class="title is-1">Users</h1>
    <ul>
      <router-link
        v-for="user in users"
        :key="user.id"
        tag="li"
        :to="{name: $routeNames.UserProfile, params: {userId: user.id}}">
        <a href="">{{ user.name }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {UserService} from '../common/services/UserService';
  import {IUser} from '../common/interfaces/IUser';

  interface IUsersData {
    users: IUser[];
  }

  export default Vue.extend({
    data(): IUsersData {
      return {
        users: []
      };
    },
    created() {
      UserService.getUserList()
        .then(users => {
          this.users = users;
        });
    }
  });
</script>