export default (token, state, dispatch, message) => {
  dispatch({
    type: 'NEW_MESSAGE',
    message
  });
  // if (state.auth.profileId !== message.author._id) {
  //   const notification = new Notification('Cообщение от ' + message.author.name, {
  //       body: message.text,
  //       icon: '/icon.png'
  //     }
  //   );
  //   notification.onclick = () => {
  //     window.location = '/client/chat/' + message.line;
  //     notification.close();
  //   }
  // }
};
