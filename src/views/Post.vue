<template>
  <div
    v-if="user && post"
    class="container">
    <h1 class="title is-1">Post "{{ post.title }}" by <i>{{ user.name }}</i></h1>
    <p>{{ post.text }}</p>
    <h2 class="title is-2">Other posts by <i>{{ user.name }}</i></h2>
    <ul class="other-posts">
      <router-link
        v-for="postItem in otherPosts"
        :key="postItem.id"
        tag="li"
        :to="'/users/' + user.id + '/posts/' + postItem.id">
        <a href="">{{ postItem.title }}</a>
      </router-link>
    </ul>
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
    computed: {
      otherPosts(): IPost[] {
        return this.user.posts.filter((postItem: IPost) => postItem.id !== this.post.id);
      }
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