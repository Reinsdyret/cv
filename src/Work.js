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
                    <Heading size='md'>Success Manager, Noroff Accelerate Bergen</Heading>
                    <Heading size='sm'>01.22 - ...</Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text>
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
                <Heading size='md'>Backend Summer Intern, Mnemonic</Heading>
                <Heading size='sm'>06.24 - 08.24</Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text>
                At Mnemonic I had my first intership at it was a great experience. 
                Mnemonic is a leading company in data security with amazing products.
                This was my first real experience in the world of software development, and I found it fun but very challenging.
                I learned to much to write but what I take away is how important it is to read and understand code before one does anything.
                I learned that when working with large code bases, you spend more time understanding code than actually writing it.
                <br />
                <br />
                I worked with java and with one other summer intern we expanded a REST api. 
                We worked with alot with design patterns, websockets, database management and setup.
                What I found most fun but also most challenging was working with large datasets together with a large database and thinking of how can a program run fast and swift.
            </Text>
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                <Heading size='md'>Group leader, UiB</Heading>
                <Heading size='sm'>08.22 - 06.24</Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text>
                I was a group leader for 4 semesters at UiB. A group leader is one who helps out in a course by having group sessions with students 1 or 2 times a week.
                At group sessions students can ask question or just work on hand ins and ask whenever something is not clear.
                <br />
                <br />
                Being a group leader taught me a lot about how different people think about the same problem.
                It also made it easier for me to explain programming concepts or ideas to different people of varying experience.
            </Text>
            </AccordionPanel>
        </AccordionItem>

        </Accordion>
    );
  }
  
  export default Work;
  