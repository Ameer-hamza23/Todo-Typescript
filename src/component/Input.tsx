import { Box, Flex, Input as ChakraInput, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/TodSlice";

const CustomInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const submitHandler = (): void => {
    if (inputValue.trim() === "") {
      console.log("Cannot add an empty todo");
      return;
    }
    console.log(inputValue);
    dispatch(addTodo(inputValue));
    setInputValue(""); // Clear the input after submission
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <Box m={6}>
      <Flex>
        <Box>
          <ChakraInput
            placeholder="Enter Todo"
            size="lg"
            width="600px"
            variant="flushed"
            p={6}
            textShadow={"inherit"}
            fontSize={"larger"}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={handleKeyPress} // Add the key press handler
          />
        </Box>
        <Box>
          <Button p={6} variant="ghost" onClick={submitHandler}>
            Submit
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default CustomInput;
