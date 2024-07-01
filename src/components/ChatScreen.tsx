import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Box, VStack, Flex, Image, Text, Button } from "@chakra-ui/react"; // Import Chakra UI components
import ChatMessageComponent from "./ChatMessage";
import { ChatMessage } from "../types";
import FrameComponent from "./FrameComponent";
import CellularConnectionIcon from "../images/cellular-connection.svg";
import wifiimage from "../images/wifi.svg";
import { FaBatteryFull } from "react-icons/fa";
import backicon from "../images/back.svg";
import edit05 from "../images/edit05.svg";

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedMessages, setDisplayedMessages] = useState<ChatMessage[]>([]);



  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    // Initially display 4 messages
    setDisplayedMessages(messages.slice(-4).reverse());
  }, [messages]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleLoadMore = () => {
    if (!loading) {
      setLoading(true);
  
      const startIndex = messages.length - (page * 4);
  
      fetchChatData(page + 1) // Increment page to fetch the next set of messages
        .then((response) => {
          const newMessages = response.chats.reverse(); // Reverse the new messages from the response
          setMessages((prevMessages) => [...prevMessages, ...newMessages]);
          setLoading(false);
          setPage((prevPage) => prevPage + 1); // Increment page after successful load
        })
        .catch((error) => {
          console.error("Error fetching chat data:", error);
          setLoading(false); // Reset loading state on error
        });
    }
  };
        


  

  const [currentTime, setCurrentTime] = useState<string>(() =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    }, 1000); // Update the time every second

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  useEffect(() => {
    setLoading(true);

    fetchChatData(page)
      .then((response) => {
        if (response.chats && Array.isArray(response.chats)) {
          setMessages((prevMessages) => [...prevMessages, ...response.chats]);
          setFrom(response.from);
          setTo(response.to);
        } else {
          console.error("Received unexpected data format:", response);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching chat data:", error);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    console.log("Messages: ", messages);
    console.log("From: ", from);
    console.log("To: ", to);
  }, [messages, from, to]);

  const fetchChatData = async (
    page: number
  ): Promise<{ chats: ChatMessage[]; from: string; to: string }> => {
    try {
      const response = await axios.get(
        `https://qa.corider.in/assignment/chat?page=${page}`
      );
      console.log("Response: ", response);
      return response.data;
    } catch (error) {
      console.error("Error in fetchChatData:", error);
      return { chats: [], from: "", to: "" };
    }
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    const isAtTop = scrollTop === 0;

    if (isAtTop && !loading && scrollTop > 0) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
      // Optionally, fetch more messages here based on `page`
    }
  };

  return (
    <Box
      className="w-full relative rounded-[32px]"
      bg="#FAF9F4"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      pt={0}
      px={0}
      pb={0.5}
      gap={4}
      lineHeight="normal"
      letterSpacing="normal"
    >
      <Flex
        className="self-stretch"
        marginX="auto"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        pt={3.5}
        pr={26}
        pl={27}
        top={0}
        zIndex={99}
        position="sticky"
        gap={40}
        textAlign="center"
        color="mid"
        fontFamily="body"
        fontWeight="regular"
        mb={4}
      >
        <Box
          h="21px"
          w="54px"
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          pt={0}
          px={0}
          pb={0}
        >
          <Box
            flex="1"
            position="relative"
            lineHeight="22px"
            fontWeight="semibold"
          >
            {currentTime}
          </Box>
        </Box>
        <Box
          w="78.3px"
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          pt={1}
          px={0}
          pb={0}
        >
          <Flex
            className="self-stretch"
            flexDirection="row"
            justify="center"
            align="center"
            justifyContent="flex-start"
            gap={7.4}
          >
            <Image
              className="w-19.2px relative"
              loading="lazy"
              alt=""
              src={CellularConnectionIcon}
            />
            <Image
              className=" w-17px relative"
              loading="lazy"
              alt=""
              src={wifiimage}
            />
            <FaBatteryFull size={20} />
          </Flex>
        </Box>
      </Flex>

      <Flex
        className={`w-[355px] !m-[0] absolute top-[47px] right-[0px] left-[0px] box-border flex flex-row items-start justify-start pt-5 px-4 pb-3.5 gap-[8px] text-left text-5xl text-gray-200 font-mulish border-b-[1px] border-solid border-gainsboro `}
        marginX="auto"
        borderBottomWidth="1px"
        position="sticky"
      >
        <Flex
          flex={1}
          flexDir="column"
          alignItems="flex-start"
          justify="flex-start"
          gap={16}
        >
          <Flex justify="flex-start" alignItems="center" gap={3}>
            <Box flexDir="column" alignItems="flex-start" px={0} pb={0}>
              <Image
                className="w-6 h-6 relative overflow-hidden shrink-0"
                src={backicon}
                alt=""
              />
            </Box>
            <Text
              m={0}
              flex={1}
              fontWeight="bold"
              color="inherit"
              fontSize="2xl"
            >
              Trip 1
            </Text>
          </Flex>

          <Flex
            w="299px"
            marginTop="-40px"
            alignItems="flex-start"
            justify="flex-start"
            py={0}
            pr={5}
            pl={0}
            gap={5}
            fontSize="lg"
            pb={5}
          >
            <Box
              h="12"
              w="12"
              rounded="full"
              bg="white"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="white"
              overflow="hidden"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                {/* Top-left image */}
                <Box flex="1" position="relative">
                  <Image
                    className="w-26 h-26 object-cover"
                    src="/rectangle-12@2x.png"
                    alt=""
                  />
                </Box>
                {/* Top-right image */}
                <Box flex="1" position="relative">
                  <Image
                    className="w-26 h-26 object-cover"
                    src="/rectangle-14@2x.png"
                    alt=""
                  />
                </Box>
              </Flex>
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                {/* Bottom-left image */}
                <Box flex="1" position="relative">
                  <Image
                    className="w-26 h-26 object-cover"
                    src="/rectangle-13@2x.png"
                    alt=""
                  />
                </Box>
                {/* Bottom-right image */}
                <Box flex="1" position="relative">
                  <Image
                    className="w-26 h-26 object-cover"
                    src="/rectangle-15@2x.png"
                    alt=""
                  />
                </Box>
              </Flex>
            </Box>

            <Box flex={1} position="relative">
              <Text m={0}>
                <Text
                  as="span"
                  fontSize="base"
                  fontWeight="medium"
                  fontFamily="mulish"
                  color="dimgray.100"
                >
                  From
                </Text>
                <Text as="span" fontWeight="semibold" fontFamily="mulish">
                  {" "}
                  {from}
                </Text>
              </Text>
              <Text m={0}>
                <Text
                  as="span"
                  fontSize="base"
                  fontWeight="medium"
                  fontFamily="mulish"
                  color="dimgray.100"
                >
                  To
                </Text>
                <Text
                  as="span"
                  fontWeight="semibold"
                  fontFamily="mulish"
                  whiteSpace="pre-wrap"
                >
                  {"  "}
                  {to}
                </Text>
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Flex
          flexDir="column"
          alignItems="flex-start"
          justify="flex-start"
          px={0}
          pb={0}
        >
          <Flex
            flexDir="column"
            alignItems="flex-end"
            justify="flex-start"
            gap={33}
            position="relative"
          >
            <Image
              className="w-10 h-10 relative overflow-hidden shrink-0"
              width="30px"
              height="30px"
              src={edit05}
              alt=""
            />
            <Image
              className="w-6 h-6 relative overflow-hidden shrink-0"
              src="/dotsvertical.svg"
              width="30px"
              height="30px"
              alt=""
              cursor="pointer"
              _hover={{ cursor: "pointer" }}
              _focus={{ cursor: "pointer" }}
              onClick={toggleOptions}
            />
            {showOptions && (
              <Flex
                position="absolute"  
                flex="1"
                rounded="lg"
                shadow="0px 4px 8px rgba(0, 0, 0, 0.12)"
                flexDir="column"
                color="black"
                zIndex="1"
                mt={24}
                width={170}
              >
                <Image
                  w="116px"
                  h="1px"
                  className="hidden"
                  alt=""
                  src="/vector-14.svg"
                />
                <Flex
                  roundedTop="lg"
                  roundedBottom="none"
                  bg="white"
                  flexDir="row"
                  justify="start"
                  p="3"
                  gap="12px"
                  borderWidth="1px"
                  borderColor="gainsboro"
                >
                  <Image
                    h="5"
                    w="5"
                    className="overflow-hidden shrink-0 min-h-20px"
                    alt=""
                    src="/members.svg"
                  />
                  <Flex flexDir="column" justify="start" pt="1px" px="0" pb="0">
                    <Text
                      as="a"
                      textDecoration="none"
                      fontWeight="semibold"
                      minW="61px"
                    >
                      Members
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  bg="white"
                  flexDir="row"
                  justify="start"
                  pt="3.5"
                  px="3"
                  pb="3"
                  gap="12px"
                  borderWidth="1px"
                  borderRightWidth="1px"
                  borderBottomWidth="1px"
                  borderLeftWidth="1px"
                  borderColor="gainsboro"
                >
                  <Image
                    h="5"
                    w="5"
                    className="overflow-hidden shrink-0 min-h-20px"
                    alt=""
                    loading="lazy"
                    src="/call.svg"
                  />
                  <Flex flexDir="column" justify="start" pt="1px" px="0" pb="0">
                    <Text fontWeight="semibold" minW="95px">
                      Share Number
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  roundedTop="none"
                  roundedBottom="lg"
                  bg="white"
                  flexDir="row"
                  justify="start"
                  pt="3.5"
                  px="3"
                  pb="3"
                  gap="12px"
                  borderWidth="1px"
                  borderRightWidth="1px"
                  borderBottomWidth="1px"
                  borderLeftWidth="1px"
                  borderColor="gainsboro"
                >
                  <Image
                    h="5"
                    w="5"
                    className="overflow-hidden shrink-0 min-h-20px"
                    alt=""
                    src="/report-message.svg"
                  />
                  <Flex flexDir="column" justify="start" pt="1px" px="0" pb="0">
                    <Text fontWeight="semibold" minW="45px">
                      Report
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>

      <Flex mx="auto" mt={6}>
      {messages.length > displayedMessages.length && (
        <Button onClick={handleLoadMore} isLoading={loading} loadingText="Loading more...">
          Load More
        </Button>
      )}
      </Flex>


      <Box
      onScroll={handleScroll}
      overflowY="auto"
      height="100vh"
      w={'355px'}
      marginX="auto"
      ref={containerRef}
    >
      <VStack spacing={4} alignItems="flex-start" w={'355px'}>
        {displayedMessages.map((message) => (
          <ChatMessageComponent key={message.id} {...message} />
        ))}
      </VStack>
    </Box>

      <FrameComponent />
    </Box>
  );
};

export default ChatScreen;
