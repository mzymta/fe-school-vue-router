import Vue from 'vue'
import {RouteNames} from '@/router/RouteNames';

declare module 'vue/types/vue' {
  interface Vue {
    $routeNames: typeof RouteNames
  }
}