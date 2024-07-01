import React from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { ChatMessage } from "../types";

const ChatMessageComponent: React.FC<ChatMessage> = ({
  id,
  message,
  sender,
  time,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      borderRadius="4xl"
      flexDirection="row"
    >
      <Avatar
        size="md"
        h={'30px'}
        w={'30px'}
        mb={10}
        src={sender.image}
        mr={2} // Margin right to create space between Avatar and Text
        ml={2}
      />
      <Text
        bg="white"
        h="70px"
        w="287px"
        mx="auto"
        p={1}
        overflow="hidden" // Hide overflowing content
        textOverflow="ellipsis" // Show ellipsis (...) when text overflows
        borderRadius="xl"
        borderWidth="1px" 
        borderColor="gray.200"
        borderTopLeftRadius={0} 

        dangerouslySetInnerHTML={{ __html: message }}
      />
    </Box>
  );
};

export default ChatMessageComponent;
