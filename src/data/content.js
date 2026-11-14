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
        'Entrei em produção resolvendo problema real antes de aprender o nome bonito da solução. Hoje trabalho na Sismetro mantendo e evoluindo sistemas PHP/Laravel usados diariamente: isso significa lidar com dado sujo, regra de negócio contada de boca em boca e decisão que não pode quebrar o que já funciona.',
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
        "I got into production fixing a real problem before I learned the proper name for the solution. Today I work at Sismetro maintaining and evolving PHP/Laravel systems used daily: that means dirty data, business rules passed down by word of mouth, and decisions that can't break what already works.",
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
            'Mantenho e evoluo sistemas PHP/Laravel em produção, usados diariamente pela empresa.',
            'Construo e integro APIs REST internas e externas conectando sistemas distintos.',
            'Debug e correção de sistemas legados sem interromper a operação da empresa.',
          ],
        },
        {
          tag: 'EXP_02',
          role: 'Auxiliar Administrativo',
          company: 'Mageshop',
          place: 'Marechal Cândido Rondon, PR',
          period: 'mai/2024 - set/2024',
          bullets: [
            'Configurei e integrei lojas na plataforma Magento para clientes reais.',
            'Suporte técnico direto a lojistas, incluindo treinamento de uso da plataforma.',
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
            'Maintain and evolve production PHP/Laravel systems used daily by the company.',
            'Build and integrate internal and external REST APIs connecting distinct systems.',
            'Debug and fix legacy systems without interrupting company operations.',
          ],
        },
        {
          tag: 'EXP_02',
          role: 'Administrative Assistant',
          company: 'Mageshop',
          place: 'Marechal Cândido Rondon, PR',
          period: 'May/2024 - Sep/2024',
          bullets: [
            'Configured and integrated stores on the Magento platform for real clients.',
            'Direct technical support to shop owners, including platform training.',
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
          path: '/projetos/sif',
          name: 'SIF: Sistema de Irrigação Facilitado',
          image: './img/sif.jpg',
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
          problem: 'Controle de empréstimo e acervo feito manualmente, sujeito a erro humano e perda de histórico.',
          solution: 'CRUD completo de livros, usuários e empréstimos com status e prazo, em PHP puro e MySQL, sem framework, pra dominar a fundação antes da abstração.',
          result: 'Sistema funcional usado como estudo de caso de modelagem relacional.',
          stack: ['PHP', 'MySQL'],
          links: [{ label: 'github', href: 'https://github.com/esdrasfurmanovicz/sistema-biblioteca' }],
        },
        {
          path: '/projetos/barbearia',
          name: 'Landing Page Barbearia',
          image: './img/barbershop.jpg',
          problem: 'Negócio local sem página própria, dependendo só do boca a boca pra agendar clientes.',
          solution: 'Landing page responsiva com identidade visual da marca e caminho claro até o agendamento.',
          result: 'Página no ar, usada como referência de UI em outros projetos freelance.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          links: [
            { label: 'github', href: 'https://github.com/esdrasfurmanovicz/landingpage-barbearia' },
            { label: 'demo', href: 'https://esdrasfurmanovicz.github.io/landingpage-barbearia/' },
          ],
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
          path: '/projects/sif',
          name: 'SIF: Facilitated Irrigation System',
          image: './img/sif.jpg',
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
          problem: 'Manual tracking of loans and inventory, prone to human error and lost history.',
          solution: 'Full CRUD for books, users and loans with status and due dates, in plain PHP and MySQL, no framework, to master the foundation before the abstraction.',
          result: 'Functional system used as a relational modeling case study.',
          stack: ['PHP', 'MySQL'],
          links: [{ label: 'github', href: 'https://github.com/esdrasfurmanovicz/sistema-biblioteca' }],
        },
        {
          path: '/projects/barbershop',
          name: 'Barbershop Landing Page',
          image: './img/barbershop.jpg',
          problem: 'Local business with no page of its own, relying only on word of mouth to book clients.',
          solution: 'Responsive landing page with brand identity and a clear path to booking.',
          result: 'Live page, used as a UI reference in other freelance projects.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          links: [
            { label: 'github', href: 'https://github.com/esdrasfurmanovicz/landingpage-barbearia' },
            { label: 'demo', href: 'https://esdrasfurmanovicz.github.io/landingpage-barbearia/' },
          ],
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
        { name: 'Palestrante: FISoL', place: 'Festival Internacional de Software Livre', period: '2025' },
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
        { name: 'Speaker: FISoL', place: 'International Free Software Festival', period: '2025' },
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
