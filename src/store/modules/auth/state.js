export default {
  status: '',
  recovery: '',
  register: '',
  token: JSON.parse(localStorage.getItem('token')) || '',
  user: JSON.parse(localStorage.getItem('user')) || {}
}