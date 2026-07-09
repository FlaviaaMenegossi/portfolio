import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  aoClicar: () => void
}

const Sidebar = ({ aoClicar }: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Flavia Menegossi</Titulo>
      <Paragrafo $tipo="secundario" fontSize={16}>
        FlaviaaMenegossi
      </Paragrafo>
      <Descricao $tipo="principal" fontSize={12}>
        Engenheira front-end
      </Descricao>
      <BotaoTema onClick={aoClicar}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
