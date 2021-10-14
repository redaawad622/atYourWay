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

  inject('isTouchDevice', function () {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    )
  })

  inject('setLocal', function (name, item, stringfiy = true, alwase = true) {
    if (stringfiy && item) {
      item = JSON.stringify(item)
    }
    if (alwase) {
      localStorage.setItem(name, item)
    } else {
      sessionStorage.setItem(name, item)
    }
    return true
  })
  inject('getLocal', function (name, parse = true) {
    let item = localStorage.getItem(name) || sessionStorage.getItem(name)
    if (item && parse) {
      item = JSON.parse(item)
    }
    return item
  })
  inject('shallowEqual', function (object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)
    if (keys1.length !== keys2.length) {
      return false
    }
    for (const key of keys1) {
      if (object1[key] !== object2[key]) {
        return false
      }
    }
    return true
  })
}
