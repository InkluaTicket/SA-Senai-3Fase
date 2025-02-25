
![Logo do InkluaTicket](assetsReadme/Logo.svg)

Requisitos Funcionais e Não Funcionais

Autores:
- Samuel Bordignon Wiegand
- Darlan Matheus Hildebrando da Silva
- Eduardo Henzo Freitas dos Santos
- Jailton Costa Pereira
- Júlia Bandeira Busch

---

## Histórico de Revisão

| Data     | Versão | Descrição                                                      | Autor                                        |
|----------|--------|----------------------------------------------------------------|----------------------------------------------|
| 19/02/25 | 1.0    | Elaboração para a análise da primeira versão do documento     | Samuel Bordignon Wiegand                    |
| 23/02/25 | 1.2    | Elaboração dos requisitos não funcionais e aprimoramento da tabela de convenções | Samuel Bordignon Wiegand |
| 23/02/25 | 1.3    | Elaboração dos requisitos não funcionais e aprimoramento da tabela de convenções | Darlan Matheus Hildebrando da Silva |
| 24/02/25 | 2.0    | Elaboração da tabela de responsabilidades e distribuição de tarefas da equipe    |  Samuel Bordignon Wiegand  |

---

## Conteúdo
1. Introdução
2. Convenções, Termos e Abreviações
3. Funções da Equipe
4. Tabela de Requisitos
5. Requisitos Funcionais
6. Requisitos Não Funcionais
    - Segurança
    - Usabilidade
    - Acessibilidade
    - Personalização e Experiência do Usuário

---

## Introdução
Este documento tem como objetivo especificar os requisitos funcionais e não funcionais que o sistema **InkluaTicket** deve atender, fornecendo aos desenvolvedores as informações necessárias para a construção do sistema web. Desenvolvido no contexto do curso técnico de Análise e Desenvolvimento de Sistemas, o **InkluaTicket** visa promover a conscientização sobre acessibilidade em eventos diversos, fornecendo ferramentas de filtragem de pesquisa e uma comunidade transparente.

---

## Convenções, Termos e Abreviações

| Termo/Acrônimo | Definição |
|---------------|-----------|
| CT           | Curso Técnico |
| RNF          | Requisitos Não Funcionais |
| RF           | Requisitos Funcionais |
| Cliente, Empresa, Moderador | Perfis de usuário do sistema |
| UX           | Experiência do Usuário |
| UI           | Interface do Usuário |
| ARIA         | Conjunto de atributos que melhoram a acessibilidade |
| JWT          | Token seguro usado para autenticação |
| Dashboard    | Interface gráfica que exibe informações de forma clara e intuitiva |
| BCRYPT       | Algoritmo de hash para criptografia de senhas |
| Check-list   | Lista de itens ou requisitos a serem revisados |
| Feedback     | Resposta ou reação do sistema às ações do usuário |

---

## Requisitos Funcionais

### [RF0] Cadastro e Login de Clientes
- Permitir que clientes se cadastrem e façam login para gerenciar seus perfis.
- **Atores:** Clientes
- **Prioridade:** ☑ Essencial

### [RF1] Gerenciamento de Perfil
- Usuários poderão atualizar nome, email, senha e preferências.
- **Atores:** Clientes e Empresas
- **Prioridade:** ☑ Essencial

### [RF2] Visualizar Eventos
- Usuários poderão visualizar eventos disponíveis na plataforma.
- **Atores:** Clientes e Empresas
- **Prioridade:** ☑ Essencial

### [RF3] Comprar Ingressos
- Clientes poderão adquirir ingressos para eventos.
- **Atores:** Clientes
- **Prioridade:** ☑ Essencial

### [RF4] Comentar em Eventos
- Clientes poderão comentar sobre eventos que participaram.
- **Atores:** Clientes
- **Prioridade:** ☑ Essencial

### [RF5] Adaptação do Visual
- Permitir a personalização da interface para acessibilidade.
- **Atores:** Clientes e Empresas
- **Prioridade:** ☑ Essencial

### [RF6] Sistema de Recompensa
- Criar sistema de recompensas para usuários ativos.
- **Atores:** Clientes
- **Prioridade:** ☑ Crítica

### [RF7] Cadastro e Login de Empresa
- Empresas poderão se cadastrar e gerenciar seus eventos.
- **Atores:** Empresas
- **Prioridade:** ☑ Essencial

### [RF8] Criação e Edição de Eventos
- Empresas poderão criar e editar eventos.
- **Atores:** Empresas
- **Prioridade:** ☑ Essencial

### [RF9] Gerenciamento de Comentários
- Empresas poderão visualizar e responder comentários.
- **Atores:** Empresas
- **Prioridade:** ☑ Essencial

### [RF10] Criar Ingressos
- Empresas poderão configurar tipos de ingressos e preços.
- **Atores:** Empresas
- **Prioridade:** ☑ Essencial

### [RF11] Validação de Eventos
- Moderadores terão um check-list para validar eventos.
- **Atores:** Moderadores
- **Prioridade:** ☑ Essencial

### [RF12] Login do Moderador
- Moderadores terão sistema de autenticação.
- **Atores:** Moderadores
- **Prioridade:** ☑ Essencial

### [RF13] Verificar Eventos em Análise
- Moderadores poderão visualizar eventos pendentes.
- **Atores:** Moderadores
- **Prioridade:** ☑ Essencial

### [RF14] Aprovação ou Rejeição de Eventos
- Moderadores poderão aprovar ou negar eventos.
- **Atores:** Moderadores
- **Prioridade:** ☑ Essencial

### [RF16] Exclusão de Comentários
- Moderadores poderão excluir comentários inadequados.
- **Atores:** Moderadores
- **Prioridade:** ☑ Essencial

### [RF17] Verificação de Qualidade
- Moderadores poderão conceder selo de verificação.
- **Atores:** Moderadores
- **Prioridade:** ☑ Crítica

### [RF18] Dashboard Interativo
- Fornecer dashboard para análise de eventos.
- **Atores:** Empresas e Moderadores
- **Prioridade:** ☑ Crítica

### [RF19] Área de Ingressos
- Interface para usuários visualizarem ingressos comprados.
- **Atores:** Clientes
- **Prioridade:** ☑ Essencial

### [RF20] Tela de Customização
- Permitir personalização da interface com pré-visualização.
- **Atores:** Clientes e Empresas
- **Prioridade:** ☑ Essencial

---

## Requisitos Não Funcionais

### Segurança
- [RNF0] Armazenamento seguro de senhas (bcrypt)
- [RNF1] Autenticação utilizando JWT
- [RNF2] Prevenção de duplicação de e-mails
- [RNF3] Identificação do usuário por e-mail no login

### Usabilidade
- [RNF5] Interface intuitiva
- [RNF6] Facilidade de uso

### Acessibilidade
- [RNF8] Compatibilidade com leitores de tela
- [RNF9] Navegação por teclado

### Personalização e Experiência do Usuário
- [RNF10] Personalização de cores e fontes
- [RNF11] Personalização da interface em tempo real
- [RNF12] Tela de customização

---

## Funções da Equipe

## Tabela de Requisitos

### Requisitos Funcionais

| Código | Responsáveis |
|----------|--------------|
| RF0  | Jailton Costa Pereira |
| RF1  | Jailton Costa Pereira |
| RF2  | Samuel Bordignon Wiegand |
| RF3  | Darlan Matheus Hildebrando da Silva |
| RF4  | Eduardo Henzo Freitas dos Santos |
| RF5  | Samuel Bordignon Wiegand |
| RF6  | Samuel Bordignon Wiegand |
| RF7  | Jailton Costa Pereira |
| RF8  | Júlia Bandeira Busch |
| RF9  | Eduardo Henzo Freitas dos Santos |
| RF10 | Darlan Matheus Hildebrando da Silva |
| RF11 | Júlia Bandeira Busch |
| RF12 | Jailton Costa Pereira |
| RF13 | Samuel Bordignon Wiegand |
| RF14 | Júlia Bandeira Busch |
| RF16 | Eduardo Henzo Freitas dos Santos |
| RF17 | Júlia Bandeira Busch |
| RF18 | Júlia Bandeira Busch |
| RF19 | Darlan Matheus Hildebrando da Silva |
| RF20 | Samuel Bordignon Wiegand |

### Requisitos Não Funcionais

#### Segurança

| Código | Responsáveis |
|----------|--------------|
| RNF0 | Jailton Costa Pereira |
| RNF1 | Jailton Costa Pereira |
| RNF2 | Jailton Costa Pereira |
| RNF3 | Jailton Costa Pereira |

#### Usabilidade

| Código | Responsáveis |
|----------|--------------|
| RNF5 | Todos os envolvidos |
| RNF6 | Todos os envolvidos |

#### Acessibilidade

| Código | Responsáveis |
|----------|--------------|
| RNF8 | Todos os envolvidos |
| RNF9 | Todos os envolvidos |

#### Personalização e Experiência do Usuário

| Código | Responsáveis |
|----------|--------------|
| RNF10 | Samuel Bordignon Wiegand |
| RNF11 | Samuel Bordignon Wiegand |
| RNF12 | Samuel Bordignon Wiegand |