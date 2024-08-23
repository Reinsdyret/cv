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
                    <Heading size='md'>UiB: Bachelor i Datateknologi</Heading>
                    <Heading size='sm'>08.21 - 06.24</Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text align="left">
            I bacheloren min gikk vi gjennom det grunnleggende innenfor utvikling.
            Jeg fikk tatt noen algoritme valgfag og fikk veldig sansen for dette, noe som ledet meg til å begynne på master.
            Vi brukte språk som java, python, haskell og javascript til å lære teori men og ha prosjekt.
            Et prosjekt jeg er stolt over er et spill vi lagde som en gruppe på 6.
            Repo kan bli funnet her: https://git.app.uib.no/javajunkies/shmup
            </Text>
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                <Heading size='md'>UiB: Master i Informatikk, Algoritmer</Heading>
                <Heading size='sm'>08.24 - 06.26</Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text align="left">
                Jeg startet akkurat på master på UiB. Dette er i informatikk, med spesialisering i algoritmer.
                Jeg vet enda ikke om jeg skal gå en teoretisk vei eller praktisk men gleder med uansett til oppgaven.
            </Text>
            </AccordionPanel>
        </AccordionItem>

        </Accordion>
    );
  }
  
  export default Education;
  