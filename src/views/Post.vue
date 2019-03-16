<template>
  <div
    v-if="user && post"
    class="container">
    <h1 class="title is-1">Post "{{ post.title }}" by <i>{{ user.name }}</i></h1>
    <p>{{ post.text }}</p>
    <div v-if="otherPosts.length">
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
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {IUser} from '../common/interfaces/IUser';
  import {IPost} from '../common/interfaces/IPost';
  import {UserService} from '../common/services/UserService';

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
    watch: {
      $route() {
        this.initPostData();
      }
    },
    computed: {
      otherPosts(): IPost[] {
        return this.user && this.post ?
          this.user.posts.filter((postItem: IPost) => postItem.id !== this.post!.id) :
          [];
      }
    },
    methods: {
      initPostData() {
        UserService.getUserById(this.$route.params.userId)
          .then(user => {
            this.user = user;
          });
        UserService.getUserPostById(this.$route.params.userId, this.$route.params.postId)
          .then(post => {
            this.post = post;
          });
      }
    },
    created() {
      this.initPostData();
    }
  });
</script>
