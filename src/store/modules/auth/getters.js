export default {
  IS_LOGGED_IN: state => !!state.token,
  authStatus: state => state.status,
  RECOVERY_STATUS: state => state.recovery,
  REGISTER_STATUS: state => state.register,
  USER: state => state.user
}