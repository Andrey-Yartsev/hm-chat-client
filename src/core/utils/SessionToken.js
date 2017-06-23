import LocalStorage from './LocalStorage';

export class SessionToken {

  save(token, userId, fcmToken) {
    LocalStorage.set('session', {
      token,
      userId,
      fcmToken
    });
  }

  get() {
    LocalStorage.get('session');
  }

  delete() {
    LocalStorage.remove('session');
  }

}

export let sessionToken = new SessionToken();
