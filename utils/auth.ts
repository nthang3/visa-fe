'use client';
import { setCookie, deleteCookie, getCookie } from 'cookies-next';

const redirectToLogin = () => {
  const pathname = window.location.pathname;
  console.log(pathname);
  console.log(pathname.includes('login'));
  if (window && pathname && !pathname.includes('login')) {
    window.location.href = '/login';
  }
}

const setCookieLocal = (name: string, value: string) => {
  setCookie(name, value, { path: '/' });
};

const getCookieLocal = (name: string) => getCookie(name) && getCookie(name) !== undefined ? getCookie(name): '' ;

const deleteCookieStore = (name: string) => { deleteCookie(name) };

const loggedOut = () => {
  deleteCookieStore('token');
  deleteCookieStore('refreshToken');
  localStorage.removeItem('currentUser');
  localStorage.removeItem('isRemember');
  sessionStorage.removeItem('isRemember');
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('refreshToken')
  const href = window.location.href.split('/');
  // unSubcribeSocket();
  if (href[href.length - 1] !== 'login') {
    window.location.href = '/login';
  }
};

export {
  setCookieLocal, getCookieLocal, deleteCookieStore, loggedOut, redirectToLogin
};
