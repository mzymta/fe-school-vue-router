let loggedIn = false;

export class AuthService {
  static isLoggedIn(): boolean {
    return loggedIn;
  }

  static login() {
    loggedIn = true;
  }

  static logout() {
    loggedIn = false;
  }
}
