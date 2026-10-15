# 🎙️ CheckSpeech AI — Landing Page Institucional

> Projeto desenvolvido como solução para o **Desafio Front-End #01 da mostQI**, apresentando uma suíte de APIs de Inteligência Artificial voltada para conversão de fala em texto e interpretação de sentimento dominante.

---

## 📌 Sobre o Projeto

O **CheckSpeech AI** é um produto SaaS fictício baseado nas tecnologias de reconhecimento e processamento de áudio da **mostQI**. A landing page foi construída com foco em alta performance, responsividade e conversão de usuários, apresentando soluções de transcrição de áudio assíncrono, streaming em tempo real, suporte a 52 idiomas e análise de sentimento em áudios pré-gravados.

---

## 🚀 Tecnologias Utilizadas

A aplicação foi desenvolvida do zero utilizando uma stack moderna e altamente performática:

- **[React 18/19](https://react.dev/)**: Biblioteca principal para construção da interface declarativa baseada em componentes.
- **[Vite](https://vitejs.dev/)**: Bundler e ferramenta de build de alta velocidade.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática rigorosa para garantia de contrato de dados (*Type Safety*) e manutenibilidade.
- **[Tailwind CSS](https://tailwindcss.com/)**: Estilização utilitária moderna focada em design responsivo e performance visual.
- **[Lucide React](https://lucide.dev/)**: Biblioteca leve e consistente de ícones vetoriais.
- **[Vitest & React Testing Library](https://vitest.dev/)**: Suíte automatizada de testes unitários e de integração.

---

## ✨ Funcionalidades e Requisitos Atendidos

### 🎯 Requisitos Obrigatórios
1. **Página Web Responsiva (Mobile-First):** Interface totalmente adaptável para dispositivos móveis, tablets e monitores widescreen.
2. **Top Menu Flutuante (Sticky Header):** Barra de navegação fixa com efeito *backdrop-blur* e scroll suave para as seções da página.
3. **Seções Institucionais Completas:**
   - **Hero Section:** Apresentação da plataforma com foco nas +500.000h de áudio humano treinado, simulador interativo de transcrição em tempo real e **Primeiro CTA** ("Falar com Especialista").
   - **Clientes:** Prova social exibindo marcas fictícias parceiras em formato grid/cards.
   - **Soluções (Componente Dinâmico):** Sistema de **Tabs/Accordion Interativo** para navegação fluida entre as 4 APIs de IA.
   - **Preços & Pacotes:** Tabela detalhada dos planos (*Beginner, Business e Enterprise*) com franquias de minutos inclusos e valores de minutos excedentes, toggle dinâmico Mensal/Anual e o **Segundo CTA** ("Escolher Plano").
   - **Formulário de Contato Completo:**
     - Tratamento de obrigatoriedade e validações de e-mail e telefone nacional/internacional.
     - **Consentimento LGPD (*Obrigatório*):** Bloqueio e desabilitação do botão de envio até o aceite explícito dos termos.
     - **Captcha Dinâmico (*Obrigatório*):** Desafio matemático numérico gerado dinamicamente para prevenção contra envios automatizados.
   - **Footer (Rodapé):** Navegação rápida, indicação de copyright e ícones de redes sociais com SVGs otimizados.
4. **Barra de Consentimento de Cookies (LGPD):** Banner inferior interativo com persistência da preferência do usuário salva via `localStorage`.

### 🌟 Destaques & Diferenciais (Itens Bônus)
- 🌐 **Suporte Multilíngue (PT-BR / EN):** Chaveador de idioma no menu superior com atualização instantânea da interface.
- ⚡ **Otimização de Core Web Vitals:** Arquitetura limpa sem bibliotecas de estilização pesadas e uso de *lazy state initialization* no React para evitar renderizações em cascata (*cascading renders*).
- 🧪 **Testes Automatizados:** Suíte completa de testes cobrindo formulário, LGPD, Captcha, componente dinâmico, toggle de preços e internacionalização.

---

## ⚡ Desempenho e Core Web Vitals (Google PageSpeed)

A aplicação foi rigorosamente otimizada para atingir pontuações máximas em desempenho, acessibilidade, boas práticas e SEO nas versões **Desktop** e **Mobile**.

<div align="center">
  <h3>Versão Desktop & Mobile</h3>
  <p>Resultados auditados via Google PageSpeed Insights</p>
  
  <p>
    <img src="./assets/desktop-speed.png" alt="Relatório PageSpeed Desktop" width="48%" />
    <img src="./assets/mobile-speed.png" alt="Relatório PageSpeed Mobile" width="48%" />
  </p>
</div>

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
Necessário possuir o **[Node.js](https://nodejs.org/)** instalado (versão 18 ou superior).

### Passo a Passo

1. **Clone este repositório:**
   ```bash
   git clone [https://github.com/Diofbjr/desafio-CheckSpeech.git](https://github.com/Diofbjr/desafio-CheckSpeech.git)
   cd desafio-CheckSpeech
   ```

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse no seu navegador:
Navegue até o endereço local indicado no terminal (geralmente http://localhost:5173).
## 📁 Estrutura do Projeto
   ```bash
   checkspeech-ai/
├── src/
│   ├── components/          # Componentes reutilizáveis da interface
│   │   ├── Header.tsx       # Top menu flutuante e seletor multilíngue
│   │   ├── Hero.tsx         # Seção inicial, simulador e CTA 1
│   │   ├── Clients.tsx      # Grid de logos fictícias de clientes
│   │   ├── Solutions.tsx    # Componente dinâmico (Tabs/Accordion de soluções)
│   │   ├── Pricing.tsx      # Tabela de planos, toggle mensal/anual e CTA 2
│   │   ├── Contact.tsx      # Formulário validado com LGPD e Captcha
│   │   ├── CookieBanner.tsx # Banner de consentimento de cookies (localStorage)
│   │   └── Footer.tsx       # Rodapé institucional e redes sociais
│   ├── data/
│   │   └── mockData.ts      # Dados das soluções, planos e clientes (fonte da verdade)
│   ├── types/
│   │   └── index.ts         # Contratos de interfaces e tipos TypeScript
│   ├── App.tsx              # Orquestrador da aplicação e estado de idioma
│   ├── main.tsx             # Ponto de entrada da aplicação
│   └── index.css            # Diretivas do Tailwind CSS e estilos globais
├── index.html               # Metadados e favicon vetorial do CheckSpeech AI
├── package.json             # Dependências e scripts do projeto
├── vite.config.ts           # Configuração do Vite com plugin do Tailwind CSS
└── README.md                # Documentação técnica do projeto
```
## ✒️ Autor
Desenvolvido por Diogo de França Barbosa Júnior como solução do processo seletivo da mostQI.
