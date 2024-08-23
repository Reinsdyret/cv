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

} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Education from './Education';
import Work from './Work';
import Experience from './Experience';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Card>
          <CardHeader>
            <Heading size='lg'>CV Lars Haukland</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>h
            <Center>
              <Image
                borderRadius='full'
                boxSize='300px'
                src='meg.jpg'
                alt='Lars Haukland'
              />
            </Center>
              <Box>
                <Heading size='md' textTransform='uppercase'>
                  Utdanning
                </Heading>
                <Education />
              </Box>
              <Box>
                <Heading size='md' textTransform='uppercase'>
                  Erfaring
                </Heading>
                <Work />
              </Box>
              <Box>
                <Heading size='md' textTransform='uppercase'>
                  Brukte språk/verktøy
                </Heading>
                <Experience />
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <ColorModeSwitcher aria-label="toggle theme" position="fixed" top={4} left={4} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
