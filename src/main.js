import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import the Auth0 configuration and plugin
import { domain, clientId, audience } from '../auth_config.json';
import { Auth0Plugin } from '@/auth/auth0-plugin';

Vue.config.productionTip = false
console.log({ domain, clientId, audience });
Vue.use(Auth0Plugin, {
  domain: domain,
  clientId: clientId,
  audience: audience,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
