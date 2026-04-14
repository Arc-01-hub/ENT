import keycloak from "./keycloak";

class AuthProvider {
  constructor() {
    this.user = null;
    this.token = localStorage.getItem('token');
    this.refreshToken = localStorage.getItem('refreshToken');
  }

  setUser(user) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    if (!this.user) {
      const storedUser = localStorage.getItem('user');
      this.user = storedUser ? JSON.parse(storedUser) : null;
    }
    return this.user;
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    return this.token;
  }

  setRefreshToken(refreshToken) {
    this.refreshToken = refreshToken;
    localStorage.setItem('refreshToken', refreshToken);
  }

  getRefreshToken() {
    return this.refreshToken;
  }

  logout() {
    this.user = null;
    this.token = null;
    this.refreshToken = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }

  isAuthenticated() {
    return !!this.token && !!this.user;
  }
}

export default new AuthProvider();
