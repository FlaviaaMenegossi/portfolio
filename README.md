# Portfólio — Flavia Menegossi

Portfólio pessoal desenvolvido em React com TypeScript, com sistema de temas (claro e escuro), layout responsivo e integração com as estatísticas do GitHub. O projeto foi construído seguindo a metodologia **Atomic Design** para organização dos componentes.

## Demonstração

O portfólio apresenta uma barra lateral com foto, nome e profissão, uma seção "Sobre mim" com estatísticas do GitHub, e uma galeria de projetos. Um botão permite alternar entre o tema claro e o escuro.

## Tecnologias utilizadas

- **React** — biblioteca para construção da interface
- **TypeScript** — tipagem estática sobre o JavaScript
- **styled-components** — estilização com CSS-in-JS
- **Create React App (react-scripts)** — ambiente de desenvolvimento e build
- **ESLint** — análise de qualidade do código
- **Prettier** — formatação automática do código

## Conceitos aplicados

- Componentização seguindo o **Atomic Design** (átomos, moléculas e organismos)
- Tipagem de props com TypeScript (props opcionais e tipos literais)
- Estilização condicional com props no styled-components
- Transient props (prefixo `$`) para evitar props inválidas no HTML
- Herança de estilos entre componentes
- Estilos globais com `createGlobalStyle`
- Sistema de temas com `ThemeProvider` e o Hook `useState`
- Layout responsivo com media queries

## Estrutura do projeto

```
src/
├── components/        # Componentes reutilizáveis (átomos)
│   ├── Avatar/
│   ├── Paragrafo/
│   ├── Projeto/
│   └── Titulo/
├── containers/        # Seções da página (organismos)
│   ├── Projetos/
│   ├── Sidebar/
│   └── Sobre/
├── themes/            # Temas de cores (claro e escuro)
│   ├── light.ts
│   └── dark.ts
├── App.tsx            # Componente raiz
├── index.tsx          # Ponto de entrada da aplicação
└── styles.ts          # Estilos globais e container principal
```

Cada componente é organizado em dois arquivos: `index.tsx` (estrutura e lógica) e `styles.ts` (estilos).

## Como rodar o projeto

Antes de começar, é necessário ter o **Node.js** e o **Git** instalados.

Clone o repositório:

```bash
git clone https://github.com/FlaviaaMenegossi/portfolio.git
```

Entre na pasta do projeto:

```bash
cd portfolio
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

O projeto ficará disponível em `http://localhost:3000`.

## Scripts disponíveis

- `npm start` — inicia o servidor de desenvolvimento
- `npm run build` — gera a versão de produção
- `npm test` — executa os testes

## Autora

**Flavia Menegossi**
GitHub: [@FlaviaaMenegossi](https://github.com/FlaviaaMenegossi)
