import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
  domain: 'kwapfumu.eu.auth0.com',
  clientID: 'c21cqrxXlF86TIxGZdJ1N_MLYMSQPimg',
  redirectUri: 'http://localhost:3000/isokoranye',
  audience: 'https://kwapfumu.eu.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid',
  grant_type: 'implicit',
});
let aUserEmail = '';
const currentUserMail = {};
// requests login code to be sent to  the sent/provided email
const sendEmail = function sendEmail(anEmail) {
  // Sends a verification code using email
  webAuth.passwordlessStart({
    connection: 'email',
    send: 'code',
    email: anEmail,
    // eslint-disable-next-line func-names,prefer-arrow-callback
  }, function (err, res) {
    if (err) {
      if (res.status >= 200 && res.status < 300) {
        return res;
      }
      const error = new Error(res.statusText);
      error.response = res;
      throw error;
    }
    aUserEmail = anEmail;
    // eslint-disable-next-line no-console
    return console.log(res);
  });
};

const setSession = function setSession(authResult) {
  // Set the time that the access token will expire at
  const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);
};

const login = function login(aCode) {
  // Verify code sent via email
  webAuth.passwordlessLogin({
    connection: 'email',
    email: aUserEmail,
    password: aCode,
    // eslint-disable-next-line func-names,prefer-arrow-callback, consistent-return
  }, function (err, res) {
    if (err) {
      // eslint-disable-next-line no-console
      return console.log(err);
      // if (res.status >= 200 && res.status < 300) {
      //  return res;
      // }
      // const error = new Error(res.statusText);
      // error.response = res;
      // throw error;
    }
    // eslint-disable-next-line no-console
    console.log(res);
    /* After authentication occurs, the parseHash method parses a URL hash
    * fragment to extract the result of an Auth0 authentication response . */
    // eslint-disable-next-line func-names,prefer-arrow-callback
    webAuth.parseHash(window.location.hash, function (er, authResult) {
      if (er) {
        // eslint-disable-next-line no-console
        return console.log(er);
      }
      /* the client.userInfo method can be called passing the returned authResult.accessToken.
      * It will make a request to the /userinfo endpoint and return the user object, which
      * contains the user's information */
      if (authResult && authResult.accessToken && authResult.idToken) {
        // eslint-disable-next-line func-names,prefer-arrow-callback
        webAuth.client.userInfo(authResult.accessToken, function (erro, user) {
          if (erro) {
            // eslint-disable-next-line no-console
            return console.log(erro);
          }
          // now you have the user info
          // user.email to create currentUserInfo
          return Object.assign(currentUserMail, { email: user.email });
        });
        // persist currentUser in db if user doesn't already exist'
        // getCurrentUser(currentUserInfo);
        // save the user's token and proceed
        setSession(authResult);
        // Todo verify if this is the right way to call history
        // this.props.history.push('/isokoranye');
      }
      // eslint-disable-next-line no-console
      return console.log(authResult);
    });
  });
};

const logout = function logout() {
  webAuth.logout({
    /* Note that if the clientID parameter is included, the returnTo URL that is provided must
      * be listed in the Client's Allowed Logout URLs in the Auth0 dashboard. However, if the
      * clientID parameter is not included, the returnTo URL must be listed in the Allowed Logout
     * URLs at the account level in the Auth0 dashboard. */
    returnTo: 'http://localhost:3000',
    client_id: 'c21cqrxXlF86TIxGZdJ1N_MLYMSQPimg',
  });
};
export { sendEmail, login, logout };
