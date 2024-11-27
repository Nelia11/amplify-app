import './App.css'
import { Button, Flex, Image, useAuthenticator } from '@aws-amplify/ui-react'
import logo from '../src/assets/logo.png'

const App = () => {
  const { signOut } = useAuthenticator();

  return (
    <Flex
      direction='column'
      alignItems="space-between"
      minHeight="100vh"
    >
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        padding="1rem"
        backgroundColor="darkgreen"
      >
        <Image src={logo} alt='logo' height={50} />
        <Button onClick={signOut}>Sign out</Button>
      </Flex>
      <Flex justifyContent="center">
        In plants we trust
      </Flex>
    </Flex>
  )
}

export default App
