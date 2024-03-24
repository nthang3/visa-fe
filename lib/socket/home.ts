import { getSocket, unSubscribeSocket } from "@/lib/socket/socket";
import { store } from "@/store";

export const getLiveEventsHome = () => {
  console.log("getLiveEventsHome");
  const socket = new WebSocket(`${process.env.NEXT_PUBLIC_SOCKET_URL}/statistics`);
  socket.onopen = () => {
    console.log("connected");
    socket.onmessage = function (event: any) {
        console.log('event',JSON.parse(event.data))
      store.dispatch({
        type: 'home/setEventSocket',
        payload: { dataEventSocket: JSON.parse(event.data) },
      });
      // Here you can handle the data received from the server
    };
  };
};
