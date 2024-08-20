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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Card>
          <CardHeader>
            <Heading size='lg'>Curriculum Vitae</Heading>
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
                  Education
                </Heading>
                <Education />
              </Box>
              <Box>
                <Heading size='md' textTransform='uppercase'>
                  Work Experience
                </Heading>
                <Work />
              </Box>
              <Box>
                <Heading size='md' textTransform='uppercase'>
                  Experience with
                </Heading>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </ChakraProvider>
  );
}

export default App;
