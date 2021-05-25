const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "router")));
app.use("/", indexRouter);
app.use("/api/todo", todoRouter);

app.listen(3000, function () {
    console.log(`Server is live at PORT: ${3000}`);
});