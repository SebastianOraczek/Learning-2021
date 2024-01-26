import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/TodosContext";

function EditTodoForm(props) {
    const dispatch = useContext(DispatchContext);
    const { task, id, toggleEditForm } = props;
    const [value, handleChange, reset] = useInputState(task);

    const handleEditTodo = evt => {
        evt.preventDefault();
        dispatch({ type: "EDIT", id: id, task: value })
        reset();
        toggleEditForm();
    };

    return (
        <form onSubmit={handleEditTodo}
            style={{ marginLeft: "0.8rem", width: "60%" }}
        >
            <TextField
                value={value}
                onChange={handleChange}
                margin="normal"
                fullWidth
                autoFocus
            />
        </form>
    );
};

export default EditTodoForm;