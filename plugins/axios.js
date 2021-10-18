export default function ({ $axios }) {
  $axios.defaults.params = $axios.defaults.params || {}
  $axios.defaults.params.store_id = '1'

}
