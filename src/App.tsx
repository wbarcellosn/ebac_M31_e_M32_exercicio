import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import * as GS from './styles'
import Home from './pages/Home'
import Register from './pages/Register'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'register',
      element: <Register />
    }
  ])
  return (
    <>
      <GS.default />
      <GS.Header>
        <h1>Agenda de Contatos</h1>
      </GS.Header>
      <GS.Container>
        <RouterProvider router={routes} />
      </GS.Container>
    </>
  )
}

export default App
