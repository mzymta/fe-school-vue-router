<template>
  <div class="container">
    <h1 class="title is-1">Users</h1>
    <ul>
      <router-link
        v-for="user in users"
        :key="user.id"
        tag="li"
        :to="'/users/' + user.id">
        <a href="">{{ user.name }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {users} from '../common/mocks/users';

  export default Vue.extend({
    data() {
      return {
        users
      };
    }
  });
</script>