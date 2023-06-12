import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/Doge.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"100vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          // filter={"grayscale(1)"}
          // mt={"-5"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        color={"#d2b159"}
        
      >
        Coin Bazaar
      </Text>
    </Box>
  );
};

export default Home;
