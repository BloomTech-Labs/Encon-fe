import React, { useEffect } from 'react';
import * as OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

import config from '../../App.Config.js';

 const Login = () => {
  useEffect(() => {
   
    const widget = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an OIDC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: 'https://dev-208626.okta.com/oauth2/default' ,
      client_id: config.client_id,
      redirect_Uri: config.redirect_Uri,
      logo: '/react.svg',
      i18n: {
        en: {
          'primaryauth.title': 'EnCon',
        },
      },
      authParams: {
        pkce: config.pkce,
        issuer: config.issuer,
        display: 'page',
        
      },
      registration: {
        parseSchema: function(schema, onSuccess, onFailure) {
           // handle parseSchema callback
           onSuccess(schema);
        },


      },

      features: {
        registration: true
      }
      
      
    });

    widget.renderEl(
      { el: '#sign-in-widget' },
      () => {
        
        /**
         * In this flow, the success handler will not be called beacuse we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      (err) => {
        throw err;
      },
    );
  }, []);

  return (
    <div>
      <div id="sign-in-widget" />
    </div>
  );
};

export default Login;