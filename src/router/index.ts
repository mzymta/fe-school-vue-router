import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Users from '../views/Users.vue';
import User from '../views/User.vue';
import UserProfile from '../views/UserProfile.vue';
import UserPosts from '../views/UserPosts.vue';
import UserFriends from '../views/UserFriends.vue';
import Post from '../views/Post.vue';
import PageNotFound from '../views/PageNotFound.vue';
import {RouteNames} from '@/router/RouteNames';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-exact-active',
  routes: [
    {
      path: '/',
      component: Home,
      name: RouteNames.Home
    },
    {
      path: '/home',
      redirect: {name: RouteNames.Home}
    },
    {
      path: '/about',
      component: About,
      name: RouteNames.About
    },
    {
      path: '/users',
      component: Users,
      name: RouteNames.Users
    },
    {
      path: '/users/:userId',
      component: User,
      children: [
        {
          path: '',
          component: UserProfile,
          name: RouteNames.UserProfile
        },
        {
          path: 'posts',
          component: UserPosts,
          name: RouteNames.UserPosts
        },
        {
          path: 'friends',
          component: UserFriends,
          name: RouteNames.UserFriends
        }
      ]
    },
    {
      path: '/users/:userId/posts/:postId',
      component: Post,
      name: RouteNames.Post
    },
    {
      path: '*',
      component: PageNotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {x: 0, y: 0};
  }
});
