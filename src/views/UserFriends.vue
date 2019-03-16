<template>
  <div>
    <h2 class="title is-2">Friends</h2>
    <ul>
      <router-link
        v-for="friend in friends"
        :key="friend.id"
        tag="li"
        :to="{name: $routeNames.UserProfile, params: {userId: friend.id}}">
        <a href="">{{ friend.name }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {UserService} from '../common/services/UserService';
  import {IUser} from '../common/interfaces/IUser';

  interface IUserFriendsData {
    friends: IUser[];
  }

  export default Vue.extend({
    data(): IUserFriendsData {
      return {
        friends: []
      };
    },
    created() {
      UserService.getUserFriends(this.$route.params.userId)
        .then(friends => {
          this.friends = friends;
        });
    }
  });
</script>