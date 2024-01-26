import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import useTodoState from "./hooks/useTodoState";
import { TodosProvider } from "./contexts/TodosContext";

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
    const { todos } = useTodoState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <Paper style={{ height: "100vh", backgroundColor: "#fafafa" }}>
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <ToolBar>
                    <Typography color="inherit">TODO APP WITH HOOKS</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default TodoApp;