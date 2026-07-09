import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaDark from './themes/dark'
import temaLight from './themes/light'

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false)

  function alternarTema() {
    setTemaEscuro(!temaEscuro)
  }

  return (
    <ThemeProvider theme={temaEscuro ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar aoClicar={alternarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
