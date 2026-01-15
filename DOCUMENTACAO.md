# 📖 Documentação - Sistema Além do Sangue

## 📋 Visão Geral

Sistema completo de gestão de fichas de personagens para RPG, desenvolvido em HTML5, CSS3 e JavaScript vanilla. O sistema permite criar, gerenciar e acessar múltiplos personagens através de um sistema de autenticação por chave de acesso.

---

## 🏗️ Estrutura do Projeto

```
Projeto/HTML/
├── index.html           # Página de seleção de personagens
├── personagem.html      # Ficha completa do personagem
├── ref.css              # Estilos CSS (opcional)
└── DOCUMENTACAO.md      # Este arquivo
```

---

## 🎮 Página 1: Seleção de Personagens (index.html)

### Descrição
Tela inicial do sistema que exibe 8 quadrados representando diferentes personagens. O usuário seleciona um personagem e digita a chave de acesso para acessar sua ficha.

### Funcionalidades Principais

#### 1. **Exibição de Personagens**
- Grid responsivo com até 8 personagens
- Cada personagem possui:
  - Emoji (ícone visual)
  - Nome
  - Chave de acesso para proteção

#### 2. **Sistema de Autenticação**
- Ao clicar em um personagem, abre modal pedindo chave de acesso
- Chave incorreta mostra mensagem de erro
- Chave correta redireciona para a ficha do personagem

#### 3. **Gerenciador de Perfis**
- Botão "Gerenciar Perfis" abre modal com editor
- Permite:
  - Editar nome do personagem
  - Alterar emoji
  - Mudar chave de acesso
  - Remover personagens existentes
  - Adicionar novos personagens

### Dados Padrão dos Personagens

| Nome | Emoji | Chave |
|------|-------|-------|
| Personagem 1 | 🧛 | 1234 |
| Personagem 2 | 👩‍🎤 | 5678 |
| Personagem 3 | 🦋 | 9012 |
| Personagem 4 | 👱‍♀️ | 3456 |
| Personagem 5 | 🧁 | 7890 |
| Personagem 6 | 🎨 | 2345 |
| Personagem 7 | ⚔️ | 6789 |
| Personagem 8 | 🗝️ | 0123 |

### LocalStorage
Dados salvos em `localStorage`:
- **Chave**: `personagens`
- **Valor**: Array JSON com todos os personagens
- **Persistência**: Dados permanecem mesmo após fechar o navegador

### Funções JavaScript Principais

```javascript
renderizarPersonagens()          // Renderiza grid de personagens
selecionarPersonagem(id)         // Abre modal de chave
verificarChave()                 // Verifica chave de acesso
abrirGerenciador()               // Abre editor de perfis
salvarPersonagens()              // Salva alterações em localStorage
adicionarPersonagem()            // Adiciona novo personagem
removerPersonagem(index)         // Remove personagem
```

---

## 🎭 Página 2: Ficha do Personagem (personagem.html)

### Descrição
Página detalhada com a ficha completa do personagem, dividida em dois painéis: **Painel Esquerdo** (dados básicos e recursos) e **Painel Direito** (perícias e abas).

### Layout Responsivo
- **Desktop**: 2 colunas (600px + 1fr)
- **Tablet/Mobile**: 1 coluna automática

---

## 📊 Painel Esquerdo

### 1. Cabeçalho do Personagem
```
┌─────────────────────────┐
│ 🧛 │ Nome: [input]      │
│    │ Origem: [input]    │
│    │ Jogador: [input]   │
│    │ Classe: [input]    │
└─────────────────────────┘
```

**Campos Editáveis:**
- Nome do Personagem
- Origem
- Jogador
- Classe

### 2. Círculo de Atributos
Exibe 5 atributos principais em um padrão circular:

```
        FOR
      /  |  \
    AGI  |  INT
      \  |  /
       PRE VIG
```

**Atributos**:
- **FOR** (Força) - Potência e resistência
- **AGI** (Agilidade) - Velocidade e esquiva
- **INT** (Inteligência) - Conhecimento e raciocínio
- **PRE** (Presença) - Carisma e influência
- **VIG** (Vigor) - Vitalidade e resistência

Cada atributo pode ser editado diretamente clicando no valor.

### 3. NEX (Nível de Experiência)
- Campo editável
- Representa o nível do personagem
- Valor padrão: 1

### 4. Deslocamento
- Movimento em metros e quadrados
- Valor padrão: 9 m / 6 q
- Editável

### 5. Barras de Recurso

#### **VIDA** (Vermelha)
```
┌─────────────────────┐
│ VIDA        9/9     │
│ [████████████████]  │
│ ◀ ◀◀ ▶ ▶▶           │
└─────────────────────┘
```
- Valor atual / Valor máximo
- Botões para diminuir/aumentar (-1, -5, +1, +5)
- Barra visual percentual
- Cores dinâmicas

#### **SANIDADE** (Roxa)
```
┌─────────────────────┐
│ SANIDADE    6/8     │
│ [█████████░░░░░░]   │
│ ◀ ◀◀ ▶ ▶▶           │
└─────────────────────┘
```

#### **ESFORÇO** (Laranja)
```
┌─────────────────────┐
│ ESFORÇO     3/3     │
│ [████████████████]  │
│ ◀ ◀◀ ▶ ▶▶           │
└─────────────────────┘
```

### 6. Defesa
```
┌─────────────────────┐
│    DEFESA: 12       │
│  BLOQUEIO: 0        │
│  ESQUIVA: 12        │
└─────────────────────┘
```
- Valor total editável
- Bloqueio (defesa física)
- Esquiva (evasão)

### 7. Proteção
Campo de texto livre para anotações sobre armadura ou proteções mágicas.

### 8. Resistências
Campo de texto para listar resistências especiais do personagem.

---

## 🎯 Painel Direito

### Sistema de Abas
6 abas principais com conteúdo diferente:

#### **1. PERÍCIAS** (Aba Ativa por Padrão)

**Funcionalidades:**
- Tabela com todas as 28 perícias
- Campo de busca/filtro
- Colunas:
  - 🎲 PERÍCIA (com ícone clicável)
  - DADOS (atributo associado)
  - BÔNUS (Treino + Outros)
  - Treino (editável)
  - Outros (editável)

**Lista de Perícias:**
1. Acrobacia (AGI)
2. Adestramento (PRE)
3. Artes (PRE)
4. Atletismo (FOR)
5. Atualidades (INT)
6. Ciências (INT)
7. Crime (AGI)
8. Diplomacia (PRE)
9. Enganação (PRE)
10. Fortitude (VIG)
11. Furtividade (AGI)
12. Iniciativa (AGI)
13. Intimidação (PRE)
14. Intuição (PRE)
15. Investigação (INT)
16. Luta (FOR)
17. Medicina (INT)
18. Ocultismo (INT)
19. Percepção (PRE)
20. Pilotagem (AGI)
21. Pontaria (AGI)
22. Profissão (INT)
23. Reflexos (AGI)
24. Religião (PRE)
25. Sobrevivência (INT)
26. Tática (INT)
27. Tecnologia (INT)
28. Vontade (PRE)

**Sistema de Rolagem de Dados:**
- Clique no 🎲 para rolar 1d20 + Bônus
- Resultado aparece em popup no canto inferior direito
- Cores do resultado:
  - 🟡 Ouro: Crítico (20)
  - 🟢 Verde: Normal
  - 🔴 Vermelho: Falha crítica (1)

**Filtro:**
- Digite para filtrar perícias em tempo real
- Busca no nome da perícia

#### **2. COMBATE**
Placeholder para sistema de combate (não implementado)

#### **3. HABILIDADES**
Placeholder para habilidades especiais (não implementado)

#### **4. RITUAIS**
Placeholder para rituais mágicos (não implementado)

#### **5. INVENTÁRIO**
Placeholder para itens do personagem (não implementado)

#### **6. DESCRIÇÃO**
- TextArea grande para descrição detalhada do personagem
- Salva automaticamente

---

## 💾 Sistema de Salvamento

### Auto-Save
Dados são salvos automaticamente em:
- Ao alterar qualquer campo editável
- Ao alterar barra de recurso
- Ao mudar perícia

### LocalStorage
- **Chave**: `personagem_{id}`
- **Valor**: Objeto JSON com:
  ```json
  {
    "origem": "string",
    "jogador": "string",
    "classe": "string",
    "deslocamento": "string",
    "protecao": "string",
    "resistencias": "string",
    "descricao": "string",
    "pericias": [array de perícias]
  }
  ```

### Sincronização
Dados do personagem ativo armazenados em:
- **Chave**: `personagemAtivo`
- **Valor**: Objeto com id, nome, emoji e chave

---

## 🎨 Design e Estilos

### Cores Principais
- **Fundo**: `#0a0a0a` (Preto profundo)
- **Painéis**: `#1a1a1a` (Preto escuro)
- **Bordas**: `#444` (Cinza escuro)
- **Destaque**: `#FFD700` (Ouro)
- **Sucesso**: `#4CAF50` (Verde)
- **Erro**: `#FF6B6B` (Vermelho)

### Tipografia
- **Fonte**: Arial, sans-serif
- **Tamanho padrão**: 12px
- **Títulos**: 14-48px conforme contexto

### Responsividade
- Mobile-first design
- Grid adapta automaticamente
- Scroll vertical em painéis grandes

---

## 🔑 Funcionalidades de Perícias

### Estrutura de Dados
```javascript
const pericias = [
  {
    nome: "Acrobacia",
    atributo: "AGI",
    treino: 0,
    outros: 0
  },
  // ... mais perícias
]
```

### Cálculo de Bônus
```
BÔNUS = TREINO + OUTROS
```

### Rolagem de Dados
```javascript
function rolarDado(pericia, bonus) {
  const d20 = Math.floor(Math.random() * 20) + 1;
  const total = d20 + bonus;
  // Mostra resultado em popup
}
```

---

## 🔄 Fluxo do Usuário

### 1. Início do Sistema
```
index.html
    ↓
[Selecionar Personagem]
    ↓
[Digitar Chave]
    ↓
Verificação de Chave
    ↓ Correta
personagem.html
    ↓ Salva em localStorage
    ↓
Exibe Ficha Completa
```

### 2. Usando a Ficha
```
personagem.html
    ├─ Editar Dados
    │   └─ Auto-salva
    ├─ Rodar Perícias
    │   └─ Popup com resultado
    └─ Voltar
        └─ localStorage.removeItem('personagemAtivo')
        └─ Retorna a index.html
```

### 3. Gerenciar Perfis
```
index.html
    ↓
[Gerenciar Perfis]
    ↓
Modal de Edição
    ├─ Editar nome
    ├─ Alterar emoji
    ├─ Mudar chave
    ├─ Remover personagem
    └─ Adicionar novo
        ↓
[Salvar]
    ↓
localStorage atualizado
    ↓
Recarrega personagens
```

---

## 🛠️ Como Usar

### Acessar um Personagem
1. Abra `index.html` no navegador
2. Clique em um dos 8 quadrados
3. Digite a chave de acesso (ex: 1234 para Personagem 1)
4. Clique em "Entrar"
5. Você será redirecionado para a ficha do personagem

### Editar Dados do Personagem
1. Na ficha, edite qualquer campo
2. Os dados são salvos automaticamente
3. Recarregue a página - os dados persistem

### Rodar Dados
1. Na aba PERÍCIAS
2. Clique no ícone 🎲 de qualquer perícia
3. Um popup aparecerá no canto inferior direito com o resultado
4. O popup desaparece após 3 segundos

### Gerenciar Personagens
1. Em `index.html`, clique em "Gerenciar Perfis"
2. Edit name, emoji ou chave de cada personagem
3. Clique em "Salvar Alterações"
4. Ou clique em "Adicionar Novo" para criar um personagem
5. Clique em "Remover" para deletar um personagem

### Alterar Barras de Recurso
1. Clique nos botões ◀/◀◀/▶/▶▶
2. ◀ = -1 | ◀◀ = -5 | ▶ = +1 | ▶▶ = +5
3. A barra visual atualiza em tempo real
4. Os valores são salvos automaticamente

---

## 📱 Responsividade

### Desktop (> 1000px)
- Layout 2 colunas lado a lado
- Painel esquerdo fixo em 600px
- Painel direito expandido

### Tablet (768px - 1000px)
- Layout começa a se adaptar
- Grid de personagens em 2 colunas

### Mobile (< 768px)
- Layout 1 coluna
- Painéis empilhados
- Grid de personagens em 2 colunas
- Scroll vertical necessário

---

## 🐛 Problemas Conhecidos & Soluções

| Problema | Solução |
|----------|---------|
| Dados não salvam | Verificar se localStorage está ativado |
| Chave não funciona | Verificar maiúsculas/minúsculas |
| Página em branco | Limpar cache do navegador (Ctrl+Shift+Delete) |
| Barras não atualizam | Recarregar página (F5) |

---

## 📝 Notas Importantes

### Segurança
- Sistema utiliza localStorage (local do navegador)
- Chaves não são criptografadas
- **Não é adequado para produção com dados sensíveis**

### Performance
- Usa JavaScript vanilla (sem dependências)
- Renderização otimizada
- Atualização em tempo real

### Compatibilidade
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers modernos

---

## 🚀 Próximas Melhorias Sugeridas

1. **Backend**: Implementar servidor para salvar dados na nuvem
2. **Autenticação**: Sistema de login real com hash de senhas
3. **Exportação**: Salvar fichas em PDF ou imagem
4. **Integração**: Conectar com sistemas de RPG online
5. **Temas**: Adicionar tema claro/escuro
6. **Multiplicador**: Permitir múltiplos usuários por personagem
7. **Dados**: Implementar as abas vazias (COMBATE, HABILIDADES, etc.)
8. **Banco de Dados**: Usar IndexedDB para mais espaço de armazenamento

---

## 📞 Suporte Técnico

### Limpar Cache
```
Navegador → Configurações → Dados de Navegação
→ Limpar dados em cache
```

### Verificar LocalStorage
```
F12 → Aplicativo → LocalStorage → Inspecionar dados
```

### Resetar Sistema
```javascript
// No console (F12)
localStorage.clear();
location.reload();
```

---

## 📄 Arquivos do Projeto

### index.html (377 linhas)
- Página de seleção de personagens
- Modal de autenticação
- Modal de gerenciamento
- Sistema de localStorage

### personagem.html (600+ linhas)
- Ficha completa do personagem
- Sistema de perícias
- Barras de recurso
- Auto-salvamento

### ref.css (Opcional)
- Estilos adicionais (se necessário)

### DOCUMENTACAO.md
- Este arquivo

---

**Versão**: 1.0  
**Data**: Janeiro 2026  
**Autor**: Desenvolvido em colaboração  
**Licença**: Livre para uso pessoal

---

