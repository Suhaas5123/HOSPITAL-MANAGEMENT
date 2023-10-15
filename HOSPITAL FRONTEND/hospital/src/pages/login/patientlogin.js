import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  ChakraProvider,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const  PatientLoginForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [email, setEmail] = useState("");
  
  
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const handleUsernameChange = (e) => {
    dispatch({ type: "SET_USERNAME", payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("email", event.target.elements.email.value);
    // formData.append("password", event.target.elements.password.value);
  
    // const data = { email: formData.get("email"), password: formData.get("password") };
    const data={
      email:email,
      password:password
    }
    
    axios.get("http://localhost:8080/api/patient/"+email)
      .then((response) => {
        console.log(response.data.password);
        if(response.data.password === data.password) {
          navigate("/home")
        }else{
          alert("wrong password")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <>
    <ChakraProvider>
     <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login into patient account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Your details will not be revealed
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email"  name="email" onChange={handleEmailChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"  name="password" onChange={handlePasswordChange}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'} href="/patientsignup">Sign up</Link>
              </Stack>
              <Button
                bg={'#00C1A2'}
                color={'white'}
                _hover={{
                  bg: '#00C1A2',
                }}
                onClick={submitHandler}
                >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </ChakraProvider>
    </>
  );
};

export default PatientLoginForm;
