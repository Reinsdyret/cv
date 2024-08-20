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


function Work() {
    return (
        <Accordion allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                    <Heading size='sm'>Success Manager, Noroff Accelerate Bergen</Heading>
                    <Heading size='sm'>01.22 - ...</Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text>
                My part time job at Noroff Accelerate is where I have worked since my second semester at UiB.
                
            </Text>
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                <Heading size='sm'></Heading>
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
  
  export default Work;
  