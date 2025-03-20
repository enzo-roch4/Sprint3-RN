# Sprint3-RN

## Chamadas de APIs

Este aplicativo futuramente realizará chamadas a APIs para manipulação de dados de usuários e análise de imagens odontológicas. As informações cadastradas na tela de **Cadastro** serão utilizadas para autenticação e personalização dos serviços dentro da API. A tela de **Em Desenvolvimento** conterá a implementação futura de uma Inteligência Artificial que analisará imagens de exames bucais, auxiliando na identificação de problemas odontológicos.

## Diagrama de Arquitetura (Estrutura de Pastas)

A estrutura do projeto está organizada da seguinte forma:

```
/Appodontoprev
│── /app
│   │── /(tabs)  → Contém todas as telas do app
│   │   │── _layout.tsx   → configura um layout de navegação
│   │   │── Cadastro.tsx
│   │   │── Login.tsx
│   │   │── index.tsx
│   │   │── updates.tsx
│   │   │── Integrantes.tsx
|   |── _layout.tsx → Essa tela configura o layout raiz do aplicativo, lidando com o tema, a exibição da splash screen e a inicialização das fontes
|   |── +not-found.tsx → Essa tela é a tela de erro que é exibida quando o usuário tenta acessar uma página que não existe no aplicativo.
│── package.json
│── ...


### Membros do Grupo
- **Enzo Franco Rocha** - RM: 553643
- **João Pedro Pereira** - RM: 553698
- **Hebert Santos de Sousa** - RM: 553227

