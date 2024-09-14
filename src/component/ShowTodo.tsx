import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, CardFooter, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../Redux/TodSlice"; // Import editTodo action

interface ShowTodoProps {
  todoList: string[];
}

const ShowTodo: React.FC<ShowTodoProps> = ({ todoList }) => {
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newTodo, setNewTodo] = useState<string>("");

  const deleteHandler = (index: number) => {
    dispatch(deleteTodo(index));
  };

  const startEditHandler = (index: number) => {
    setEditIndex(index);
    setNewTodo(todoList[index]);
  };

  const saveEditHandler = () => {
    if (editIndex !== null) {
      dispatch(editTodo({ index: editIndex, newTodo }));
      setEditIndex(null);
      setNewTodo("");
    }
  };

  return (
    <>
      {todoList.map((todo, index) => (
        <Card key={index} mb={2}>
          <CardBody>
            {editIndex === index ? (
              <Input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Edit todo"
              />
            ) : (
              <Text>{todo}</Text>
            )}
          </CardBody>
          <CardFooter gap={3}>
            {editIndex === index ? (
              <Box>
                <Button onClick={saveEditHandler}>Save</Button>
              </Box>
            ) : (
              <Box>
                <EditIcon onClick={() => startEditHandler(index)} />
              </Box>
            )}
            <Box>
              <DeleteIcon onClick={() => deleteHandler(index)} />
            </Box>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default ShowTodo;
