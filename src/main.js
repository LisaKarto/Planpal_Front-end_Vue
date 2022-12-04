import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import the Auth0 configuration and plugin
import AuthConfigFile from '../auth_config.json';
import { Auth0Plugin } from '@/auth/auth0-plugin';

Vue.config.productionTip = false

Vue.use(Auth0Plugin, {
  domain: AuthConfigFile.domain,
  clientId: AuthConfigFile.clientId,
  audience: AuthConfigFile.audience,
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
