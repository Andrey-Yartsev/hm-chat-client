let LocalStorage = {

  clean: function() {
    if (!localStorage) return;
    try {
      for (let k in localStorage) {
        localStorage.removeItem(k);
      }
    } catch (e) {
      for (let i = 0; i < localStorage.length; i++)
        localStorage.removeItem(localStorage[i]);
    }
  },

  remove: function(key) {
    if (!localStorage) return false;
    localStorage.removeItem(key);
  }

};

LocalStorage.json = {

  get: function(key) {
    if (!localStorage) return false;
    return JSON.parse(localStorage.getItem(key));
  },

  set: function(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

};

export default LocalStorage;