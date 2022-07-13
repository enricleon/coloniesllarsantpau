// import { ServiceInstance } from '@/modules/shared/services/service-instance';
import { Plugin } from '@nuxt/types'

import Vue from 'vue';

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $device: any
    // $serviceInstance: ServiceInstance,
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    // $serviceInstance: ServiceInstance,
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    // $serviceInstance: ServiceInstance,
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  interface Store<S> {
    // $serviceInstance: ServiceInstance,
  }
}

const registerServices: Plugin = (context, inject) => {
  // const serviceInstance = new ServiceInstance(context);

  // Vue.prototype.$serviceInstance = serviceInstance;

  // inject('serviceInstance', serviceInstance);
}

export default registerServices;
















