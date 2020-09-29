const Todo = require("../models").todos;
const DbService = require("moleculer-db");
const cors = require("cors");
module.exports = {
	// Define service name
	name: "todo",
	mixins: [DbService],
    hooks: {
	},

	model: {
		name: "todos"
	},
	settings: {
    },
	actions: {
		addTodo: {
            rest: "POST /addTodo",
			async handler(ctx){
                const todo = await Todo.create({
                    title: ctx.params.title,
                    completed: ctx.params.completed,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
                return todo;
            }
        },
        getTodo: {
            rest: "GET /getTodo",
            async handler(ctx){
                return Todo.findAll({});
            }
        },
        deleteTodo: {
            rest: "DELETE /deleteTodo",
            async handler(ctx){
                console.log(ctx.params);
                return Todo.destroy({
                    where:{
                        id: ctx.params.id
                    }
                });
            }
        },
        updateTodo: {
            rest: "PUT /updateTodo",
            async handler(ctx){
                const todo = await Todo.findOne({
                    where:{
                        id: ctx.params.id
                    }
                });
                return todo.update({
                    completed: ctx.params.completed
                });
            }
        }
    },
};

