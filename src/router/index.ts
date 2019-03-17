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
import {AuthService} from '@/common/services/AuthService';

Vue.use(Router);

const router = new Router({
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
      name: RouteNames.Users,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/users/:userId',
      component: User,
      props: true,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '',
          component: UserProfile,
          name: RouteNames.UserProfile,
          props: true,
          meta: {
            noScroll: true
          }
        },
        {
          path: 'posts',
          component: UserPosts,
          name: RouteNames.UserPosts,
          props: true,
          meta: {
            noScroll: true
          }
        },
        {
          path: 'friends',
          component: UserFriends,
          name: RouteNames.UserFriends,
          props: true,
          meta: {
            noScroll: true
          }
        }
      ]
    },
    {
      path: '/users/:userId/posts/:postId',
      component: Post,
      name: RouteNames.Post,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      component: PageNotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.noScroll && from.meta.noScroll) {
      return;
    }
    return savedPosition || {x: 0, y: 0};
  }
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);
  if (requiresAuth && !AuthService.isLoggedIn()) {
    // tslint:disable-next-line
    console.log('401 - not authorized');
    next({name: RouteNames.Home});
  } else {
    next();
  }
});

export default router;
