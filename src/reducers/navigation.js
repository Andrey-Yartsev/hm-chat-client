export default (state = {}, action) => {

  switch (action.type) {
    case 'SCREEN_INIT':
      return Object.assign({}, state, {
        screen: 'Chat',
      });
    case 'SCREEN_CHANGE':
      if (!action.screen) {
        throw new Error("Screen is not defined");
      }
      let data = {screen: action.screen};
      if (action.text) {
        data.text = action.text;
      }
      if (action.subText) {
        data.subText = action.subText;
      }
      return Object.assign({}, state, data);
    case 'SECTION_INIT':
      return Object.assign({}, state, {
        section: 'chat',
      });
    case 'SECTION_CHANGE':
      if (!action.section) {
        throw new Error("Section is not defined");
      }
      return Object.assign({}, state, {
        section: action.section
      });
    default:
      return state;
  }

};