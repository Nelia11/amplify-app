import './App.css'
import { Button, Flex, Image, useAuthenticator } from '@aws-amplify/ui-react'
import logo from '../src/assets/logo.png'

const App = () => {
  const { user, signOut } = useAuthenticator();

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
        <Image src={logo} alt="logo" height={50} />
        <Button onClick={signOut}>Sign out</Button>
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
      >
        <h1>{user?.signInDetails?.loginId}</h1>
        <p>In plants we trust</p>
      </Flex>
    </Flex>
  )
}

export default App
