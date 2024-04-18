import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
           h="410px"
           p="1px"
        >
          <ModalHeader
            fontSize="40px"
            fontFamily="Work Sans, sans-serif"
            display="flex"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <div>
              <Image
                src={user.pic}
                alt={user.name}
                borderRadius="full"
                boxSize="150px"
                border="6px solid gray"
                m="auto"
                />
              <Text
              fontFamily="Work Sans"
              fontSize={{ base: "28px", md: "30px" }}
              >
              Email: {user.email}
              </Text>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
