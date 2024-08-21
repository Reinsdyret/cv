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


} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';


function Education() {
    return (
        <Accordion allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                    <Heading size='md'>UiB: Bachelor in Datateknologi</Heading>
                    <Heading size='sm'>08.21 - 06.24</Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text>
                In my bachelor i learned the basics of computer science. 
                Using languages like java, python, haskell and javascript I learned the basics within software development.
                I took some specialising courses within algorithms which lead me to start my masters.
            </Text>
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                <Heading size='md'>UiB: Masters in Informatics, Algorithms</Heading>
                <Heading size='sm'>08.24 - 06.26</Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text>
                While doing some algorithm courses within my bachelor I really got the sense for algorithms and the theoretical and practical sides.
                Since it still is early in the masters I have not decided on what my thesis will be about but I am planning to do something in a theoretical direction.
            </Text>
            </AccordionPanel>
        </AccordionItem>

        </Accordion>
    );
  }
  
  export default Education;
  