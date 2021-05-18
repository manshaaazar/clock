const app = require("express")();
const exphbrs = require("express-handlebars");
const http = require("http");
app.engine("handlebars", exphbrs());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 3005;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
