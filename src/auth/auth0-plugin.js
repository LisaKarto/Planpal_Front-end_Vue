/**
 *  External Modules
 */

import Vue from 'vue';
import createAuth0Client from '@auth0/auth0-spa-js';
let test = require("@auth0/auth0-spa-js");

/**
 *  Vue.js Instance Definition
 */

let instance;

export const getInstance = () => instance;

/**
 *  Vue.js Instance Initialization
 */

export const useAuth0 = ({
    onRedirectCallback = () =>
        window.history.replaceState({}, document.title, window.location.pathname),
    redirectUri = "https://google.nl",
    ...pluginOptions
}) => {
    if (instance) return instance;

    instance = new Vue({
        data() {
            return {
                auth0Client: null,
                isLoading: true,
                isAuthenticated: false,
                user: {},
                error: null,
            };
        },
        methods: {
            async handleRedirectCallback() {
                this.isLoading = true;
                try {
                    await this.auth0Client.handleRedirectCallback();
                    this.user = await this.auth0Client.getUser();
                    this.isAuthenticated = true;
                } catch (error) {
                    this.error = error;
                } finally {
                    this.isLoading = false;
                }
            },

            loginWithRedirect(options) {
                console.log(this.auth0Client);
                return this.auth0Client.loginWithRedirect(options);
            },

            logout(options) {
                return this.auth0Client.logout(options);
            },

            getTokenSilently(o) {
                return this.auth0Client.getTokenSilently(o);
            },
        },

        async created() {

            console.log(createAuth0Client);
            try {
                this.auth0Client = await test.createAuth0Client({

                    ...pluginOptions,
                    domain: pluginOptions.domain,
                    client_id: pluginOptions.clientId,
                    audience: pluginOptions.audience,
                    redirect_uri: redirectUri,
                });
            } catch (e) { console.log(test); }


            try {
                if (
                    window.location.search.includes('code=') &&
                    window.location.search.includes('state=')
                ) {
                    const { appState } = await this.auth0Client.handleRedirectCallback();

                    onRedirectCallback(appState);
                }
            } catch (error) {
                this.error = error;
            } finally {
                this.isAuthenticated = await this.auth0Client.isAuthenticated();
                this.user = await this.auth0Client.getUser();
                this.isLoading = false;
            }
        },
    });

    return instance;
};

/**
 *  Vue.js Plugin Definition
 */

export const Auth0Plugin = {
    install(Vue, options) {
        Vue.prototype.$auth = useAuth0(options);
    },
};