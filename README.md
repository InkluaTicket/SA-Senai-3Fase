
![Logo do InkluaTicket](assetsReadme/Logo.svg)

# Requisitos funcionais e não funcionais

## Histórico de revisão

| Data     | Versão | Descrição                                             | Autor                          |
|----------|--------|-----------------------------------------------------|--------------------------------|
| 19/02/25 | 1.0    | Elaboração para a análise da primeira versão do documento | Samuel Bordignon Wiegand |

## Introdução

Esta seção tem como objetivo especificar os requisitos funcionais e não funcionais que o sistema **InkluaTicket** deve atender, fornecendo aos desenvolvedores as informações necessárias para o sistema web. Desenvolvido no **CT** de Análise e Desenvolvimento de Sistemas, o sistema **Inklua** visa buscar promover a conscientização sobre acessibilidade em eventos diversos, fornecendo ferramentas de filtragem de pesquisa e uma comunidade transparente.

## Integrantes
[Samuel Bordignon Wiegand ]()

[Darlan Matheus Hildebrando da Silva ]()

[Eduardo Henzo Freitas dos Santos]()

[Jailton Costa Pereira]()

[Júlia Bandeira Busch]()


## Convenções, termos e abreviações

| Termos e Abreviações | Definições |
|----------------------|------------|
| **CT**              | Curso técnico |
| **RNF**             | Requisitos não funcionais |
| **RF**              | Requisitos funcionais |
| **Cliente, Empresa e Moderador** | Atores/tipos de perfis presentes no sistema |

## Requisitos Funcionais

### [RF0] Cadastro de usuários
O sistema permitirá o cadastro de usuários com informações como **email, senha e nome**.

**Atores:** Clientes e Empresa  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF1] Login de usuário
O sistema permitirá que os usuários realizem login utilizando **email e senha**.

**Atores:** Clientes e Empresa  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF2] Gerenciamento de perfil
Os usuários poderão atualizar suas informações de perfil, como **nome, email, senha e preferências**.

**Atores:** Clientes e Empresa  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF3] Visualizar eventos
Os usuários poderão visualizar eventos disponíveis na plataforma.

**Atores:** Clientes e Empresa  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF4] Comprar um ingresso para o evento
Os clientes poderão adquirir ingressos para eventos disponíveis na plataforma.

**Atores:** Clientes  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF5] Comentar no evento
Os clientes poderão comentar sobre eventos que participaram ou possuem interesse.

**Atores:** Clientes  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF6] Adaptação do visual
O sistema permitirá a personalização da interface para melhor acessibilidade.

**Atores:** Clientes e Empresa  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF7] Sistema de recompensa por presença no site
O sistema oferecerá um sistema de recompensas para usuários ativos.

**Atores:** Clientes e Empresa  
**Prioridade:** ☐ Essencial ☑ Crítica ☐ Desejável

### [RF8] Cadastro e login de empresa
O sistema permitirá que empresas se cadastrem e façam login para gerenciar seus eventos.

**Atores:** Empresa  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF9] Criação e edição de eventos
As empresas poderão criar e editar eventos, incluindo **descrição, data, local e ingressos**.

**Atores:** Empresa  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF10] Visualizar e responder comentários do evento
As empresas poderão visualizar e responder aos comentários deixados pelos clientes.

**Atores:** Empresa  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF11] Criar ingressos
As empresas poderão configurar tipos de ingressos e valores para seus eventos.

**Atores:** Empresa  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF12] Check-list de validação do evento
Os moderadores terão acesso a um check-list para validar eventos antes da publicação.

**Atores:** Moderador  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF13] Login do moderador
Os moderadores terão um sistema de autenticação para acessar suas funções administrativas.

**Atores:** Moderador  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF14] Verificar eventos em análise
Os moderadores poderão visualizar uma lista de eventos pendentes de aprovação.

**Atores:** Moderador  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF15] Aceitar ou negar eventos em análise
Os moderadores poderão aprovar ou rejeitar eventos enviados pelas empresas.

**Atores:** Moderador  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF16] Excluir comentários
Os moderadores poderão excluir comentários considerados inadequados ou ofensivos.

**Atores:** Moderador  
**Prioridade:** ☑ Essencial ☐ Crítica ☐ Desejável

### [RF17] Liberação de verificação de qualidade para empresa
Os moderadores poderão conceder um selo de verificação para empresas confiáveis.

**Atores:** Moderador  
**Prioridade:** ☐ Essencial ☑ Crítica ☐ Desejável

### [RF18] Dashboard interativo sobre eventos
O sistema fornecerá um dashboard interativo para análise de eventos cadastrados.

**Atores:** Empresa e Moderador  
**Prioridade:** ☐ Essencial ☑ Crítica ☐ Desejável
