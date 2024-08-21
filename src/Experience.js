import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Card,
  CardHeader,
  Heading,
  CardBody,
  StackDivider,
  Stack,
  Image,
  Center,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Avatar, 
  AvatarBadge, 
  AvatarGroup,
  WrapItem,
  Wrap,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';


function Experience() {
    return (
        
            <Stack>
                <Center>
    <Wrap>
        <WrapItem>
            <Avatar name='Java' src='https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png' />
        </WrapItem>
        <WrapItem>
            <Avatar name='Python' src='https://www.svgrepo.com/show/376344/python.svg' />
        </WrapItem>
        <WrapItem>
            <Avatar name='Haskell' src='https://www.svgrepo.com/show/373660/haskell.svg' />
        </WrapItem>
        <WrapItem>
            <Avatar name='Rust' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png' />
        </WrapItem>
        <WrapItem>
            <Avatar name='JS' src='https://cdn.worldvectorlogo.com/logos/javascript-1.svg' />
        </WrapItem>
        <WrapItem>
            <Avatar name='Mvn' src='https://www.svgrepo.com/show/373829/maven.svg' />
        </WrapItem>
        <WrapItem>
            <Avatar name='Spring' src='https://cdn.worldvectorlogo.com/logos/spring-3.svg' />
        </WrapItem>
        <WrapItem>
            <Avatar name="postgresql" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png" />
        </WrapItem>
    </Wrap>
    </Center>
    <Box>
    <Text>
        These are the languages, frameworks, build systems etc I have worked with, had in school or just used in a hobby project. Please note that I do not have proffessional proficiency in these tools but I am very willing to learn more about everything!
    </Text>
    </Box>
    </Stack>

    );
  }
  
  export default Experience;
  