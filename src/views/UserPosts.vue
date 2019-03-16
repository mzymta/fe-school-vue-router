<template>
  <div>
    <h2 class="title is-2">Posts</h2>
    <ul>
      <router-link
        v-for="post in posts"
        :key="post.id"
        tag="li"
        :to="{name: $routeNames.Post, params: {postId: post.id}}">
        <a href="">{{ post.title }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {IPost} from '../common/interfaces/IPost';
  import {UserService} from '../common/services/UserService';

  interface IUserPostsData {
    posts: IPost[];
  }

  export default Vue.extend({
    data(): IUserPostsData {
      return {
        posts: []
      };
    },
    created() {
      UserService.getUserPosts(this.$route.params.userId)
        .then(posts => {
          this.posts = posts;
        });
    }
  });
</script>