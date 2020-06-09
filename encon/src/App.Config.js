export default {
  baseUrl: 'https://dev-208626.okta.com',
  client_id:'0oadvz08xHN08rIYc4x6' ,
  issuer: 'https://dev-208626.okta.com/oauth2/default',
  redirect_Uri: window.location.origin + '/implicit/callback',
  scopes: ["openid", "profile", "email", 'encon_user'],
  pkce: true
} 