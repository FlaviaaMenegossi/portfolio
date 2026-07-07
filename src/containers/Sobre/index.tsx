import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo $tipo="secundario">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, vero
      officiis ab accusamus architecto eveniet soluta at. Maxime, possimus
      nihil, aspernatur sed itaque eum eveniet veritatis delectus temporibus
      beatae iure.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats-fast.vercel.app/api?username=FlaviaaMenegossi&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt="Estatísticas do GitHub de Flavia"
      />
      <img
        src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=FlaviaaMenegossi&layout=compact&langs_count=7&theme=dracula"
        alt="Linguagens mais usadas"
      />
    </GithubSecao>
  </section>
)

export default Sobre
