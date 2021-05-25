const routers = require("express");

routers.get("/", function(req, res) {
    res.json({ message: "Welcome to my App"});
});

module.exports = Router;