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
            <Text width='500px'>
            My part-time job at Noroff Accelerate is one I've held since my second semester at UiB. 
            Noroff Accelerate focuses on bootcamps for people and companies seeking more experience in specific professional fields, whether in frontend/backend development or computer security.
                
            <br />
            <br />
            This job has taught me a lot about work environments and the importance of inclusion. 
            I've learned to take responsibility, not only by serving as an assistant lecturer in a Python course but also by starting as a lecturer in an HTML/CSS course this September. 
            My tasks have ranged from assembling office desks to lecturing in HTML/CSS. 
            Over time, I've shifted more toward the teaching side as I've continued to work, and I've really come to appreciate my coworkers, making it an amazing place to work.
                
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
  