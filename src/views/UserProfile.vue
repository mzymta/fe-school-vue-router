<template>
  <div v-if="user">
    <h2 class="title is-2">Profile</h2>
    <p>{{ user.description }}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {IUser} from '../common/interfaces/IUser';
  import {UserService} from '../common/services/UserService';

  interface IUserProfileData {
    user: IUser | null;
  }

  export default Vue.extend({
    data(): IUserProfileData {
      return {
        user: null
      };
    },
    created() {
      UserService.getUserById(this.$route.params.userId)
        .then(user => {
          this.user = user;
        });
    }
  });
</script>