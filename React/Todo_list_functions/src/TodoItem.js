import React, { useContext, memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import EditTodoForm from "./EditTodoForm";
import useToggleState from "./hooks/useToggleState";
import { DispatchContext } from "./contexts/TodosContext";

function TodoItem(props) {
    const { task, completed, id } = props;
    const dispatch = useContext(DispatchContext);
    const [isEditing, toggle] = useToggleState(false);

    const handleRemove = () => {
        dispatch({ type: "REMOVE", id: id });
    };

    const handleToggle = () => {
        dispatch({ type: "TOGGLE", id: id });
    };

    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing
                ? <EditTodoForm task={task} id={id} toggleEditForm={toggle} />
                :
                <>
                    <Checkbox
                        checked={completed}
                        tabIndex={-1}
                        onClick={handleToggle}
                    />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
                    <IconButton aria-label="Delete" onClick={handleRemove} >
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={toggle}>
                        <EditIcon />
                    </IconButton>
                </>
            }
        </ListItem>
    );
};

export default memo(TodoItem);