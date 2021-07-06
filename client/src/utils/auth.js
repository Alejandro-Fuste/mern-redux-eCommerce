import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {}

  isTokenExpired(token) {}

  getToken() {}

  login(idToken) {}

  logout() {}
}

export default new AuthService();
