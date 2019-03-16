<template>
  <div
    v-if="user"
    class="container">
    <h1 class="title is-1">{{ user.name }}</h1>
    <p>{{ user.description }}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {users} from '../common/mocks/users';
  import {IUser} from '../common/interfaces/IUser';

  interface IUserData {
    user: IUser | null;
  }

  export default Vue.extend({
    data(): IUserData {
      return {
        user: null
      };
    },
    created() {
      this.user = users.find((user: IUser) =>
        user.id === this.$route.params.userId) || null;
    }
  });
</script>