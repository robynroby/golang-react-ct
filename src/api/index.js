var socket = new WebSocket('ws://localhost:9000/ws');

let connect = (cb) => {
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("Successfully Connected");
    }

    socket.onmessage = msg => {
        console.log("message from websocket:", msg);
    }

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    }

    socket.onerror = error => {
        console.log("Socket Error: ", error);
    }
}

let sendMsg = msg => {
    console.log("sending msg: ", msg);
    socket.send(msg);
}