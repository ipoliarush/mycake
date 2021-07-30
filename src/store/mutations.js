export default {
  RESIZE (state) {
    if (window.innerWidth < 992) state.isOpen = false
    else state.isMobileMenu = false
  },
  REVERSE (state) {
    state.isOpen = !state.isOpen
  },
  MOBILE_MENU_OPEN (state) {
    state.isMobileMenu = true
    document.body.classList.add('overflow-mm-off')
    document.body.classList.remove('overflow-mm-on')
  },
  MOBILE_MENU_CLOSE (state) {
    state.isMobileMenu = false
    document.body.classList.add('overflow-mm-on')
    document.body.classList.remove('overflow-mm-off')
  }
}
