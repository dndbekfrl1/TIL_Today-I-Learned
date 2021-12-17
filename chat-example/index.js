const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat message", (msg) => {
    console.log("msg", msg);
    //socket.broadcast.emit("chat message", msg); /* 전송자(socket) 이외에게 브로드 캐스트 */
    io.emit("chat message", msg); /* 전송자 포함해서 브로드 캐스트 */
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
