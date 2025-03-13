import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <ListItem
      sx={{
        bgcolor: task.completed ? "#e0f7fa" : "#fff",
        mb: 1,
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <Checkbox
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        color="primary"
      />
      <ListItemText
        primary={task.title}
        secondary={task.description}
        sx={{ textDecoration: task.completed ? "line-through" : "none" }}
      />
      <Tooltip title="Delete Task">
        <IconButton edge="end" onClick={() => deleteTask(task.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
}

export default TaskItem;
