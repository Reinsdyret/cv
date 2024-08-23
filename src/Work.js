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
            <Text align="left">
            Ved siden av studie har jeg en deltidsjobb hos Noroff Accelerate som jeg har hatt siden mitt andre semester på UiB.
            Noroff Accelerate har et fokus på kode bootcamps, som for eksempel et 10 ukers kurs i .NET, frontend etc.
                            
            <br />
            <br />
            I Accelerate startet jeg med mye kontorarbeid og noen ganger montere ikea møbler for kontoret.
            Nå har jeg gått over til å være lærer i bootcampene og har en del mer ansvar.
            Jeg skal begynne å ha HTML og CSS delen av et frontend kurs som jeg gleder meg veldig til!
            Jeg har og vært reserve lærer i en python bootcamp.

            Av jobben har jeg lært mye om å jobbe sammen med andre over lengre tid. 
            Jeg har lært hvor viktig miljø i kontoret og hvordan man bidrar til det.
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
            <Text align="left">
                I mnemonic hadde jeg mitt første intership innenfor utvikling. 
                Det var en veldig fin erfaring, men også veldig utfordrende.
                Jeg hadde ikke jobbet veldig mye med store prosjekter med så mye abstraksjon, dette gjorde at jeg lærte utrolig mye.
                <br />
                <br />
                Vi var to stykker som jobbet sammen på backend for sommeren. Vår jobb var å utvide en rest api ved å sette opp databasen, sette opp importering av ny data, lage endepunkt og sette opp websocket for ny data.
                I tillegg var det utrolig mye testing!
                <br />
                <br />
                Hva jeg tar med meg av læring fra sommeren er tre hoved temaer. <br />
                1. Å lese kode og forstå den er det viktigste. Jeg lærte at det er ikke vits i å skrive kode med mindre man skjønner hva som skjer. <br />
                2. Teste teste teste, tror vi brukte minst halvparten av sommeren på å bare skrive tester. Jeg har lært mye av mocking og hvordan man tenker på edgecases. <br />
                3. Hvordan å fordele arbeid. Vi innså at vi kunne vært mye mer effektiv om vi hadde hatt mer fokus på å fordele arbeided, lage mindre pull requests og fokusere på kvalitet i stedet for å gjøre det raskt.
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
            <Text align="left">
                Jeg var en gruppeleder i 4 semester på UiB. En gruppeleder er en som hjelper til i et kurs ved å ha gruppetimer hvor studenter kommer og stiller spørsmål til gruppelederen om kurset. <br />
                Fagene jeg har vært gruppeleder i er: <br />
                INF100: Innføring i programmering <br />
                INF115: Databaser og modellering (2 ganger) <br />
                INF122: Funksjonell programmering <br /> <br />
                Å være en gruppeleder har lært meg mye om å forklare konsepter til personer som tenker forskjellig. Og hvordan man kan forklare noe på forskjellige måter for å la alle forstå.
            </Text>
            </AccordionPanel>
        </AccordionItem>

        </Accordion>
    );
  }
  
  export default Work;
  