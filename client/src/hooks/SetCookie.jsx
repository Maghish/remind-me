import Cookie from 'js-cookie'

function SetCookie(cookieName, value) {
    Cookie.set(cookieName, value, {
        expires: 30,
        secure: true,
        sameSite: 'strict',
        path: '/',
    })
}

export default SetCookie