import { Flex } from "@chakra-ui/react";
import { IoCameraOutline } from "react-icons/io5";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";


import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Button,
  Image,
  VStack,
} from '@chakra-ui/react';


const BlinkingCursorComponent: React.FC = () => (
  <Flex
    className="self-stretch bg-whitesmoke-100"
    flexDirection="row"
    alignItems="center"
    marginX="auto"
    justifyContent="space-between"
    py="2"
    px="4"
    borderWidth="1px"
    borderColor="gray.200"
    rounded="lg"
    w={"350px"}
    position="sticky"
    mt={-380}
  >
    <Flex
      flex="1"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      py="11px"
      px="3"
      borderWidth="1px"
      borderColor="gray.200"
      rounded="lg"
      maxW="full"
      bg="white"
    >
      <Box
        fontWeight="semibold"
        minW="4px"
        display="inline-block"
        position="relative"
        flex="1"
      flexDirection="row"
      >
        <Box
          as="span"
          // display="inline-block"
          w="1px"
          h="1.2em"
          bg="black"
          animation="blinkingCursor 1s infinite"
        />
        <Box className="relative text-gray">Reply to @Rohit Yadav</Box>
      </Box>

      <Box>
      <Popover>
        <PopoverTrigger>
          <Image
            className="h-5 w-5"
            src="/paperclip.svg"
            alt="Paperclip Icon"
            loading="lazy"
            mr={3}
            cursor="pointer" // Adds a pointer cursor to indicate it's clickable
          />
        </PopoverTrigger>
        <PopoverContent width="fit-content" _focus={{ boxShadow: 'none' }} borderRadius="20px" color="white" bg={'green'}>
          <PopoverArrow bg={'green'}/>
          <PopoverCloseButton />
          <PopoverBody >
            <VStack spacing={2} display="flex"  flexDirection="row" >
              <IoCameraOutline size={23}/>

              <AiOutlineVideoCamera size={23}/>

              <HiOutlineDocumentArrowDown size={23}/>

            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
    
      <Image
        className="h-5 w-5"
        src="/send03.svg"
        alt="Send Icon"
        loading="lazy"
      />
    </Flex>
  </Flex>
);

export default BlinkingCursorComponent;
