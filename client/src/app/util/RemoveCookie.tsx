import Cookie from "js-cookie";

function RemoveCookie(cookieName: string) {
  Cookie.remove(cookieName);
}

export default RemoveCookie;
