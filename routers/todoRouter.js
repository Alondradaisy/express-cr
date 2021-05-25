const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;

let todos = [
    {
    id: "haf24jd",
    todo: "do laundry",
    done: "false"
    },
    {
    id: "jp2nkl2",
    todo: "wash dishes",
    done: "true"
    }
]

router.get("/get-all-todos", function(req, res) {
    res.json({ payload: todos});
});

router.get("/get-todo-by-id/:id", function(req, res) {
    let todoArrayIndex = todos.findIndex((item) => item.id === req.params.id);

    if (todoArrayIndex === -1) {
        res.status(404).json({ message: "Todo item not found. Search another item!"});
    } else {
        let todoItem = todos[todoArrayIndex];
        res.json({ payload: todoItem });
    }
});

router.get("/get-todos-by-done", function(req, res) {

});

router.post("/create-new-todo", function(req, res) {
    let { todo, description } = req.body;

    if(todo.length === 0 || description.length === 0) {
        res.status(500).json({ message: "Must fill in text area!"});
    }
    let todoArrayIndex = todos.findIndex((item) => item.todo === req.body.todo);

    if (todoArrayIndex > -1) { // in other words does not exist
        res.status(500).json({ message: "Sorry, todo item already exists."});
    } else {
        let newTodoObj = {
            id: uuidv4(),
            todo,
            description
        };
        todos.push(newTodoObj);
        res.json({ payload: todos }); //todos data from obj
    }
});


module.exports = router;