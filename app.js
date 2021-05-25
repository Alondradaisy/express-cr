const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();

app.set("routers", path.join(__dirname, "routers"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "routers")));
app.use("/", indexRouter);
app.use("/api/todo", todoRouter);

// //app.listen(3000, function () {
//     console.log(`Server is live at PORT: ${3000}`);
// });

module.exports = router;