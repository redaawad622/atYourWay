export default function ({ $axios }) {
  $axios.defaults.params = $axios.defaults.params || {}
  $axios.defaults.params.store_id = process.env.store_id
  console.log(process.env)
}
