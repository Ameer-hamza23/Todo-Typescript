import { Divider, Flex, Heading, Input } from "@chakra-ui/react";
import CustomInput from "./component/Input";
import ShowTodo from "./component/ShowTodo";
import { useSelector } from "react-redux";

function App() {
  const todoList = useSelector((state: any) => state.todo.todo);

  return (
    <Flex justifyContent={"center"} p={2}>
      <Flex direction={"column"}>
        <Heading as="h1" alignSelf={"center"}>
          Todo
        </Heading>
        <CustomInput />
        <Divider color={"black"} size={"lg"} />
        <ShowTodo todoList={todoList} /> {/* Pass todoList as props */}
      </Flex>
    </Flex>
  );
}

export default App;
