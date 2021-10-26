export default function ({ $axios }) {
  $axios.defaults.params = $axios.defaults.params || {}
  $axios.defaults.params.store_id = process.env.store_id || 3
  console.log('base', process.env.baseUrl)
  console.log('store', process.env.store_id)
}
