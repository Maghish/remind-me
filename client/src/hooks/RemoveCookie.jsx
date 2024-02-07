import Cookie from 'js-cookie'

function RemoveCookie(cookieName) {
    Cookie.remove(cookieName)
}

export default RemoveCookie