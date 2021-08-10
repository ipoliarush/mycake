export default {
  ingridient: [{}],
  cartcake: {
    name: '',
    weight: ''
  },
  costprice: 0,
  savedcake: JSON.parse(localStorage.getItem('savedcake')) || []
}
