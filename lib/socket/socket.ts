'use client'
import socketIOClient from 'socket.io-client';
import Cookies from 'js-cookie';
import store from '@/store';
let socket: any;
const getSocket = () => {
  socket = new WebSocket(process.env.NEXT_PUBLIC_SOCKET_URL || '');
  if (socket) {
    // client-side
    socket.onopen = () => {
      console.log('socket conected')
    }
    socket.onclose = () => {
      console.log('socket close')
    }
    socket.onerror = () => {
      console.log('socket error')
    }
  }
  return socket;
};

const unSubscribeSocket = () => {
  if (socket) {
    socket.close();
    socket.onmessage = null; // Unsubscribe from events
  }
};
export { getSocket, unSubscribeSocket };
