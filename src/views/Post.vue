<template>
  <div
    v-if="user && post"
    class="container">
    <h1 class="title is-1">Post "{{ post.title }}" by <i>{{ user.name }}</i></h1>
    <p>{{ post.text }}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {users} from '../common/mocks/users';
  import {IUser} from '../common/interfaces/IUser';
  import {IPost} from '../common/interfaces/IPost';

  interface IUserData {
    user: IUser | null;
    post: IPost | null;
  }

  export default Vue.extend({
    data(): IUserData {
      return {
        user: null,
        post: null
      };
    },
    created() {
      this.user = users.find((user: IUser) =>
        user.id === this.$route.params.userId) || null;
      if (this.user) {
        this.post = this.user.posts.find((post: IPost) =>
          post.id === this.$route.params.postId) || null;
      }
    }
  });
</script>