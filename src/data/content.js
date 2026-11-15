// Galerias de fotos de cada projeto (a foto de destaque do card entra como primeira slide automaticamente).
const galleries = {
  doccraft: [
    { src: './img/gallery/doccraft-2-canvas.jpg', pt: 'Modo canvas: elementos livres, camadas e painel de propriedades', en: 'Canvas mode: free elements, layers and properties panel' },
    { src: './img/gallery/doccraft-3-richtext.jpg', pt: 'Modo texto rico: títulos, listas de tarefas, tabelas e imagens', en: 'Rich text mode: headings, task lists, tables and images' },
    { src: './img/gallery/doccraft-4-slash-menu.jpg', pt: 'Menu de blocos com / para inserir conteúdo sem tirar a mão do teclado', en: 'Slash menu to insert content without leaving the keyboard' },
    { src: './img/gallery/doccraft-5-export.jpg', pt: 'Exportação para PDF, HTML e Markdown', en: 'Export to PDF, HTML and Markdown' },
    { src: './img/gallery/doccraft-6-dashboard.jpg', pt: 'Lista de documentos', en: 'Document list' },
    { src: './img/gallery/doccraft-7-mobile.jpg', pt: 'Layout responsivo no celular', en: 'Responsive layout on mobile' },
  ],
  conferencia: [
    { src: './img/gallery/conferencia-1-login.jpg', pt: 'Entrada do sistema', en: 'Sign-in screen' },
    { src: './img/gallery/conferencia-3-clientes.jpg', pt: 'Cadastro de clientes e perfis de retenção', en: 'Client registry and withholding profiles' },
    { src: './img/gallery/conferencia-5-perfis.jpg', pt: 'Perfis de retenção de impostos', en: 'Tax withholding profiles' },
    { src: './img/gallery/conferencia-6-impostos.jpg', pt: 'Catálogo de impostos', en: 'Tax catalog' },
  ],
  sif: [
    { src: './img/gallery/sif-1-login.jpg', pt: 'Login do produtor', en: 'Producer sign-in' },
    { src: './img/gallery/sif-2-dispositivos.jpg', pt: 'Dispositivos cadastrados, com temperatura e umidade em tempo real', en: 'Registered devices with real-time temperature and humidity' },
    { src: './img/gallery/sif-3-relatorio.jpg', pt: 'Relatório de 24 horas: umidade, temperatura e litros bombeados', en: '24-hour report: humidity, temperature and pumped liters' },
    { src: './img/gallery/sif-4-configuracao.jpg', pt: 'Configuração do dispositivo: planta, bomba e modo de irrigação', en: 'Device setup: plant, pump and irrigation mode' },
    { src: './img/gallery/sif-5-adicionar.jpg', pt: 'Adicionar um novo dispositivo pelo número de identificação', en: 'Add a new device by its ID number' },
    { src: './img/gallery/sif-6-conta.jpg', pt: 'Configurações da conta do usuário', en: 'User account settings' },
  ],
  biblioteca: [
    { src: './img/gallery/biblioteca-1-login.jpg', pt: 'Login por CPF', en: 'CPF sign-in' },
    { src: './img/gallery/biblioteca-2-dashboard.jpg', pt: 'Painel com totais do acervo e empréstimos por mês', en: 'Dashboard with catalog totals and monthly loans' },
    { src: './img/gallery/biblioteca-3-emprestimos.jpg', pt: 'Todos os empréstimos, com status por cor', en: 'All loans, with color-coded status' },
    { src: './img/gallery/biblioteca-4-ativos.jpg', pt: 'Empréstimos ativos, com ações de devolver e renovar', en: 'Active loans, with return and renew actions' },
    { src: './img/gallery/biblioteca-5-livros.jpg', pt: 'Listagem de livros', en: 'Book list' },
    { src: './img/gallery/biblioteca-6-clientes.jpg', pt: 'Listagem de clientes', en: 'Client list' },
    { src: './img/gallery/biblioteca-7-formulario.jpg', pt: 'Formulário de cadastro', en: 'Registration form' },
  ],
}
const gal = (key, l) => galleries[key].map((g) => ({ src: g.src, caption: g[l] }))

export const content = {
  nav: {
    pt: [
      { id: 'about', label: 'sobre', n: '01' },
      { id: 'experience', label: 'experiência', n: '02' },
      { id: 'projects', label: 'projetos', n: '03' },
      { id: 'skills', label: 'stack', n: '04' },
      { id: 'education', label: 'formação', n: '05' },
      { id: 'contact', label: 'contato', n: '06' },
    ],
    en: [
      { id: 'about', label: 'about', n: '01' },
      { id: 'experience', label: 'experience', n: '02' },
      { id: 'projects', label: 'projects', n: '03' },
      { id: 'skills', label: 'stack', n: '04' },
      { id: 'education', label: 'education', n: '05' },
      { id: 'contact', label: 'contact', n: '06' },
    ],
  },

  hero: {
    pt: {
      prompt: '$ whoami',
      name: 'Esdras Furmanovicz',
      roleTag: '// desenvolvedor backend · php & laravel',
      headline: 'Backend que resolve a regra de negócio, não só o checklist da vaga.',
      description:
        'Hoje na Sismetro, mantenho e evoluo sistemas PHP/Laravel usados todos os dias por uma empresa real, não protótipo. Antes disso, construí o SIF, um sistema de irrigação premiado internacionalmente, integrando hardware e software do zero.',
      ctaPrimary: '~/projetos',
      ctaSecondary: '~/curriculo.pdf',
      status: 'status: aberto a oportunidades backend (remoto ou PR)',
    },
    en: {
      prompt: '$ whoami',
      name: 'Esdras Furmanovicz',
      roleTag: '// backend developer · php & laravel',
      headline: "Backend that solves the business rule, not just the job post checklist.",
      description:
        "Currently at Sismetro, I maintain and evolve PHP/Laravel systems used daily by a real company, not a prototype. Before that, I built SIF, an internationally awarded irrigation system, integrating hardware and software from scratch.",
      ctaPrimary: '~/projects',
      ctaSecondary: '~/resume.pdf',
      status: 'status: open to backend opportunities (remote or on-site PR)',
    },
  },

  about: {
    pt: {
      title: 'Sobre',
      paragraphs: [
        'Trabalho em dois produtos em produção na Sismetro: um sistema de gestão usado por cerca de 200 empresas e o ERP da companhia, onde concentro a maior parte do tempo — módulos de clientes, propostas, contratos e, principalmente, o módulo fiscal e financeiro, com emissão de documentos fiscais eletrônicos em XML e integração com órgãos governamentais. Isso significa lidar com dado sujo, regra de negócio contada de boca em boca e decisão que não pode quebrar o que já está em produção para quem já usa.',
        'Fora do expediente, construí o <strong>SIF</strong> (irrigação automatizada com ESP32, PHP e Laravel), premiado em feira internacional de ciências, e mantenho uma rotina de estudo em segurança de aplicações web e Laravel avançado. Prefiro sistema previsível a abstração elegante que ninguém mais entende depois de seis meses.',
      ],
      terminal: [
        { k: 'stack', v: 'php · laravel · mysql' },
        { k: 'infra', v: 'docker · linux' },
        { k: 'based_in', v: 'marechal c. rondon, pr, br' },
        { k: 'contributions_2026', v: '3.524' },
        { k: 'status', v: 'open_to_work: true' },
      ],
    },
    en: {
      title: 'About',
      paragraphs: [
        "I work on two production products at Sismetro: a management system used by around 200 companies, and the company's ERP, where I spend most of my time. That covers client, proposal and contract modules and, mainly, the tax and finance module: issuing electronic tax documents in XML and integrating with government agencies. It means dealing with dirty data, business rules passed down by word of mouth, and decisions that can't break what's already in production for the people using it.",
        'Outside work, I built <strong>SIF</strong> (automated irrigation with ESP32, PHP and Laravel), awarded at an international science fair, and I keep a study routine in web application security and advanced Laravel. I prefer a predictable system over an elegant abstraction nobody understands six months later.',
      ],
      terminal: [
        { k: 'stack', v: 'php · laravel · mysql' },
        { k: 'infra', v: 'docker · linux' },
        { k: 'based_in', v: 'marechal c. rondon, pr, br' },
        { k: 'contributions_2026', v: '3,524' },
        { k: 'status', v: 'open_to_work: true' },
      ],
    },
  },

  experience: {
    pt: {
      title: 'Experiência',
      items: [
        {
          tag: 'EXP_01',
          role: 'Desenvolvedor Web',
          company: 'Sismetro',
          place: 'Marechal Cândido Rondon, PR',
          period: 'out/2024 - atual',
          bullets: [
            'Implemento e evoluo os módulos de clientes, propostas, contratos e financeiro do ERP, do levantamento de requisito com a área de negócio até a entrega em produção.',
            'Atuo no módulo fiscal: emissão e processamento de documentos fiscais eletrônicos em XML e integração com órgãos governamentais, com isolamento de dados por empresa (multi-tenant).',
            'Modelo e ajusto o banco MySQL, incluindo revisão de queries e índices em pontos de lentidão.',
            'Escrevo testes automatizados com PHPUnit, uso filas para processamento assíncrono e acompanho o pipeline de integração e entrega contínuas (CI/CD).',
          ],
        },
        {
          tag: 'EXP_02',
          role: 'Helpdesk',
          company: 'Mageshop',
          place: 'Marechal Cândido Rondon, PR',
          period: 'mai/2024 - set/2024',
          bullets: [
            'Suporte a lojistas em plataforma de e-commerce baseada em Magento: pedidos, cadastro de produtos e configurações de loja, com diagnóstico inicial antes de escalar.',
            'Investigava falhas na plataforma e escalava para o time técnico com reprodução do erro e impacto documentados.',
            'Apoiei integrações entre a loja e sistemas externos, e ajustes de SEO em páginas de produto e categoria.',
          ],
        },
        {
          tag: 'EXP_03',
          role: 'Desenvolvedor Freelancer',
          company: 'Projetos autônomos',
          place: 'Remoto',
          period: '2022 - atual',
          bullets: [
            'Projetei e construí o SIF do zero: hardware (ESP32), backend (PHP/Laravel) e lógica de automação.',
            'Entreguei sistemas de gestão e páginas institucionais para pequenos negócios locais.',
          ],
        },
      ],
    },
    en: {
      title: 'Experience',
      items: [
        {
          tag: 'EXP_01',
          role: 'Web Developer',
          company: 'Sismetro',
          place: 'Marechal Cândido Rondon, PR',
          period: 'Oct/2024 - present',
          bullets: [
            "Build and evolve the ERP's client, proposal, contract and finance modules, from gathering requirements with the business side to shipping to production.",
            'Work on the tax module: issuing and processing electronic tax documents in XML and integrating with government agencies, with per-company data isolation (multi-tenant).',
            'Model and tune the MySQL database, including reviewing queries and indexes where things run slow.',
            'Write automated tests with PHPUnit, use queues for async processing, and keep an eye on the CI/CD pipeline.',
          ],
        },
        {
          tag: 'EXP_02',
          role: 'Helpdesk',
          company: 'Mageshop',
          place: 'Marechal Cândido Rondon, PR',
          period: 'May/2024 - Sep/2024',
          bullets: [
            'Supported shop owners on a Magento-based e-commerce platform: orders, product listings and store settings, with first-level diagnosis before escalating.',
            'Investigated platform failures and escalated to the tech team with the error reproduced and the impact documented.',
            'Helped with integrations between the store and external systems, and with SEO tweaks on product and category pages.',
          ],
        },
        {
          tag: 'EXP_03',
          role: 'Freelance Developer',
          company: 'Independent projects',
          place: 'Remote',
          period: '2022 - present',
          bullets: [
            'Designed and built SIF from scratch: hardware (ESP32), backend (PHP/Laravel) and automation logic.',
            'Delivered management systems and institutional pages for small local businesses.',
          ],
        },
      ],
    },
  },

  projects: {
    pt: {
      title: 'Projetos',
      items: [
        {
          path: '/projetos/doccraft',
          name: 'DocCraft: editor de documentos',
          image: './img/doccraft.jpg',
          gallery: gal('doccraft', 'pt'),
          featured: true,
          problem: 'Montar um cartaz, uma proposta ou um relatório bem formatado costuma exigir várias ferramentas, contas e o envio dos seus dados para terceiros.',
          solution: 'Editor próprio com dois modos: canvas livre (elementos aninhados, camadas, alinhamento, degradê, sombra e tipografia completa) e texto rico (tabelas, imagens redimensionáveis, listas de tarefas e menu de blocos com /). Exporta PDF, HTML e Markdown, roda no navegador ou como app desktop e não pede login.',
          result: 'Demo online, instaladores para Windows, macOS e Linux gerados por CI, PDF fiel ao que aparece no editor e layout responsivo para celular.',
          stack: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Electron', 'Tiptap'],
          links: [
            { label: 'demo', href: 'https://esdrasfurmanovicz.github.io/doccraft/' },
            { label: 'github', href: 'https://github.com/esdrasfurmanovicz/doccraft' },
            { label: 'baixar o app', href: 'https://github.com/esdrasfurmanovicz/doccraft/releases/latest' },
          ],
        },
        {
          path: '/projetos/conferencia-financeira',
          name: 'Conferência Financeira',
          image: './img/conferencia.jpg',
          gallery: gal('conferencia', 'pt'),
          featured: true,
          problem: 'Times financeiros conferem recebimentos em planilha: alguém marca "ok", mas ninguém sabe quem conferiu, quando, nem o que mudou depois de fechado o mês. O cálculo de retenção de impostos costuma ser feito à mão.',
          solution: 'Checklist mensal em Laravel: o mês é aberto com os clientes ativos, cada cliente é simulado e conferido, e o fechamento trava a edição (reabrir exige um motivo e fica no histórico). O simulador aplica tabela de alíquotas e perfil de retenção, inclusive a regra de piso mínimo para grupos de impostos pequenos. Tem perfis de administrador e usuário, tour guiado no primeiro acesso e ajuda em cada tela.',
          result: 'Fluxo completo do mês, da abertura ao fechamento, com trilha de quem conferiu e quando. Interface em português, impostos e perfis de retenção comuns já cadastrados e testes automatizados para acesso e perfis.',
          stack: ['PHP', 'Laravel', 'Blade', 'Tailwind CSS', 'Alpine.js', 'SQLite'],
          links: [{ label: 'github', href: 'https://github.com/esdrasfurmanovicz/conferencia-financeira' }],
        },
        {
          path: '/projetos/sif',
          name: 'SIF: Sistema de Irrigação Facilitado',
          image: './img/sif.jpg',
          gallery: gal('sif', 'pt'),
          problem: 'Produtor rural pequeno não tem orçamento pra automação de irrigação pronta, e perde água e produtividade ajustando tudo manualmente.',
          solution: 'Sistema próprio com ESP32 controlando válvulas, backend em PHP/Laravel decidindo quando irrigar com base em regras configuráveis e dado coletado em tempo real.',
          result: '1º lugar na FI Ciências, feira internacional de ciências.',
          stack: ['PHP', 'Laravel', 'ESP32', 'MySQL'],
          links: [
            { label: 'github', href: 'https://github.com/sistema-irrigacao-facilitado' },
            { label: 'matéria', href: 'https://institutosismetro.org/2024/11/30/alunos-do-instituto-sismetro-conquistam-1-lugar-em-feira-internacional/' },
          ],
        },
        {
          path: '/projetos/biblioteca',
          name: 'Sistema de Biblioteca',
          image: './img/library.jpg',
          gallery: gal('biblioteca', 'pt'),
          problem: 'Controle de empréstimo e acervo feito manualmente, sujeito a erro humano e perda de histórico.',
          solution: 'CRUD de livros, autores, clientes e empréstimos (prazo, renovação, devolução) em PHP puro e MySQL, com Docker, autenticação por sessão, senhas com bcrypt e proteção CSRF.',
          result: 'Meu primeiro sistema completo em PHP puro: a base antes de migrar para Laravel.',
          stack: ['PHP', 'MySQL'],
          links: [{ label: 'github', href: 'https://github.com/esdrasfurmanovicz/sistema-biblioteca' }],
        },
      ],
      labels: { problem: 'problema', solution: 'solução', result: 'resultado' },
    },
    en: {
      title: 'Projects',
      items: [
        {
          path: '/projects/doccraft',
          name: 'DocCraft: document editor',
          image: './img/doccraft.jpg',
          gallery: gal('doccraft', 'en'),
          featured: true,
          problem: 'Building a poster, a proposal or a report with good formatting usually takes several tools, accounts and sending your data to third parties.',
          solution: 'Custom editor with two modes: free canvas (nested elements, layers, alignment, gradients, shadows and full typography) and rich text (tables, resizable images, task lists and a / block menu). Exports PDF, HTML and Markdown, runs in the browser or as a desktop app and needs no login.',
          result: 'Online demo, Windows, macOS and Linux installers built by CI, PDF that matches what you see in the editor, and a responsive mobile layout.',
          stack: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Electron', 'Tiptap'],
          links: [
            { label: 'demo', href: 'https://esdrasfurmanovicz.github.io/doccraft/' },
            { label: 'github', href: 'https://github.com/esdrasfurmanovicz/doccraft' },
            { label: 'download the app', href: 'https://github.com/esdrasfurmanovicz/doccraft/releases/latest' },
          ],
        },
        {
          path: '/projects/financial-reconciliation',
          name: 'Financial Reconciliation',
          image: './img/conferencia.jpg',
          gallery: gal('conferencia', 'en'),
          featured: true,
          problem: 'Finance teams reconcile client payments in a spreadsheet: someone ticks "ok", but nobody knows who checked it, when, or what changed after the month was closed. Tax withholding is usually calculated by hand.',
          solution: 'Monthly checklist built with Laravel: the month opens with the active clients, each client is simulated and checked, and closing the month locks editing (reopening requires a reason and is logged). The simulator applies a rate card and a withholding profile, including the minimum-floor rule for groups of small taxes. It has admin and user roles, a guided tour on first access and help on every screen.',
          result: 'Complete month flow, from opening to closing, with a trail of who checked what and when. Portuguese interface, common taxes and withholding profiles preloaded, and automated tests for access and roles.',
          stack: ['PHP', 'Laravel', 'Blade', 'Tailwind CSS', 'Alpine.js', 'SQLite'],
          links: [{ label: 'github', href: 'https://github.com/esdrasfurmanovicz/conferencia-financeira' }],
        },
        {
          path: '/projects/sif',
          name: 'SIF: Facilitated Irrigation System',
          image: './img/sif.jpg',
          gallery: gal('sif', 'en'),
          problem: "A small rural producer can't afford off-the-shelf irrigation automation, and loses water and yield adjusting everything by hand.",
          solution: 'Custom system with ESP32 controlling valves, PHP/Laravel backend deciding when to irrigate based on configurable rules and real-time data.',
          result: '1st place at FI Ciências, international science fair.',
          stack: ['PHP', 'Laravel', 'ESP32', 'MySQL'],
          links: [
            { label: 'github', href: 'https://github.com/sistema-irrigacao-facilitado' },
            { label: 'press', href: 'https://institutosismetro.org/2024/11/30/alunos-do-instituto-sismetro-conquistam-1-lugar-em-feira-internacional/' },
          ],
        },
        {
          path: '/projects/library',
          name: 'Library Management System',
          image: './img/library.jpg',
          gallery: gal('biblioteca', 'en'),
          problem: 'Manual tracking of loans and inventory, prone to human error and lost history.',
          solution: 'CRUD for books, authors, clients and loans (due dates, renewals, returns) in plain PHP and MySQL, with Docker, session auth, bcrypt passwords and CSRF protection.',
          result: 'My first complete plain-PHP system: the foundation before moving to Laravel.',
          stack: ['PHP', 'MySQL'],
          links: [{ label: 'github', href: 'https://github.com/esdrasfurmanovicz/sistema-biblioteca' }],
        },
      ],
      labels: { problem: 'problem', solution: 'solution', result: 'result' },
    },
  },

  skills: {
    pt: {
      title: 'Stack',
      groups: [
        { name: 'backend', items: ['PHP', 'Laravel', 'APIs REST', 'MySQL'] },
        { name: 'infra', items: ['Docker', 'Linux', 'Git & GitHub'] },
        { name: 'frontend', items: ['JavaScript', 'Vue.js', 'HTML5 / CSS3'] },
        { name: 'em expansão', items: ['ESP32 / hardware', 'Segurança web', 'Laravel avançado', 'Inglês técnico'] },
      ],
    },
    en: {
      title: 'Stack',
      groups: [
        { name: 'backend', items: ['PHP', 'Laravel', 'REST APIs', 'MySQL'] },
        { name: 'infra', items: ['Docker', 'Linux', 'Git & GitHub'] },
        { name: 'frontend', items: ['JavaScript', 'Vue.js', 'HTML5 / CSS3'] },
        { name: 'currently expanding', items: ['ESP32 / hardware', 'Web security', 'Advanced Laravel', 'Technical English'] },
      ],
    },
  },

  education: {
    pt: {
      title: 'Formação',
      degrees: [
        { name: 'Bacharelado em Ciência da Computação', place: 'Uninter', period: '2025 - 2028 · em andamento' },
        { name: 'Técnico em Análise e Desenvolvimento de Sistemas', place: 'Colégio Estadual Eron Domingues', period: '2022 - 2024' },
      ],
      certifications: [
        { name: 'Programação FullStack PHP', place: 'Sismetro · 200h', period: '2024' },
        { name: 'JavaScript, jQuery e AJAX', place: 'Udemy · 30h', period: '2024' },
        { name: 'Git e GitHub', place: 'Curso em Vídeo · 20h', period: '2023' },
        { name: 'Palestra "Inovação de baixo custo"', place: 'FLISoL Marechal Cândido Rondon, festival internacional de software livre — sobre construir o SIF com custo mínimo e chegar ao 1º lugar na FICiências', period: '2025' },
      ],
    },
    en: {
      title: 'Education',
      degrees: [
        { name: "Bachelor's Degree in Computer Science", place: 'Uninter', period: '2025 - 2028 · in progress' },
        { name: 'Technical Degree in Systems Analysis and Development', place: 'Eron Domingues State School', period: '2022 - 2024' },
      ],
      certifications: [
        { name: 'FullStack PHP Programming', place: 'Sismetro · 200h', period: '2024' },
        { name: 'JavaScript, jQuery and AJAX', place: 'Udemy · 30h', period: '2024' },
        { name: 'Git and GitHub', place: 'Curso em Vídeo · 20h', period: '2023' },
        { name: 'Talk "Low-cost innovation"', place: 'FLISoL Marechal Cândido Rondon, international free software festival — on building SIF on a minimal budget and taking 1st place at FICiências', period: '2025' },
      ],
    },
  },

  contact: {
    pt: {
      title: 'Contato',
      description: 'PHP/Laravel, sistemas em produção, sem enrolação. Remoto ou Marechal Cândido Rondon e região.',
      lines: [
        { flag: '--email', value: 'esdras.fmei@gmail.com', copy: true },
        { flag: '--linkedin', value: '/in/esdras-furmanovicz', href: 'https://www.linkedin.com/in/esdras-furmanovicz' },
        { flag: '--github', value: '/esdrasfurmanovicz', href: 'https://github.com/esdrasfurmanovicz' },
        { flag: '--location', value: 'Marechal C. Rondon, PR, BR' },
      ],
    },
    en: {
      title: 'Contact',
      description: 'PHP/Laravel, production systems, no fluff. Remote or Marechal Cândido Rondon and region.',
      lines: [
        { flag: '--email', value: 'esdras.fmei@gmail.com', copy: true },
        { flag: '--linkedin', value: '/in/esdras-furmanovicz', href: 'https://www.linkedin.com/in/esdras-furmanovicz' },
        { flag: '--github', value: '/esdrasfurmanovicz', href: 'https://github.com/esdrasfurmanovicz' },
        { flag: '--location', value: 'Marechal C. Rondon, PR, BR' },
      ],
    },
  },

  footer: {
    pt: { rights: 'todos os direitos reservados.', built: 'construído com vue + vite.' },
    en: { rights: 'all rights reserved.', built: 'built with vue + vite.' },
  },

  profile: {
    name: 'Esdras Furmanovicz',
    email: 'esdras.fmei@gmail.com',
    github: 'https://github.com/esdrasfurmanovicz',
    linkedin: 'https://www.linkedin.com/in/esdras-furmanovicz',
    location: 'Marechal Cândido Rondon, PR, Brasil',
    resume: './curriculo.pdf',
    photo: './img/profile.jpg',
  },
}
