function isURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
  ) // fragment locator
  return !!pattern.test(str)
}
const imgPath =
  process.env.NODE_ENV === 'production'
    ? ''
    : 'http://localhost:8000/' + 'storage/images/'
export default ({ app }, inject) => {
  inject('getUrl', function (url, id) {
    if (
      typeof url === 'object' &&
      (url instanceof File || url instanceof Blob)
    ) {
      const fr = new FileReader()
      fr.onload = function (event) {
        document.getElementById(id).src = event.target.result
      }
      fr.readAsDataURL(url)
    }
    if (isURL(url)) {
      return url
    } else {
      return imgPath + url
    }
  })
}
