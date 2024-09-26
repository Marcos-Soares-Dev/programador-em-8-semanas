📘 Guia do Projeto: Programador em 8 Semanas
Este documento visa fornecer um guia detalhado sobre as melhores práticas para padronizar o desenvolvimento do projeto, além de orientações e dicas para cada membro da equipe em suas tarefas específicas.

            ---------------------------------------------------------------------------

🛠️ Estrutura Geral do Projeto
1. HTML
🔹 Práticas recomendadas:

O HTML deve ser semântico, utilizando tags apropriadas como <header>, <section>, <article>, <footer>.
Evite o uso excessivo de divs sem propósito claro ("divitis").
Utilize classes e IDs de forma coerente, seguindo uma convenção clara como o BEM (Block Element Modifier).
📄 Exemplo de BEM:

----html---
código:
<section class="course-list">
  <div class="course-list__item course-list__item--featured">
    <h2 class="course-list__title">Curso 1</h2>
  </div>
</section>

💡 Dica extra: Lembre-se de documentar os nomes de classes usados no projeto para que a equipe siga o mesmo padrão.

            ---------------------------------------------------------------------------

2. CSS
🔹 Modularização:

O CSS deve ser modularizado, reutilizando estilos ao invés de criar regras específicas para cada página.
Defina variáveis para cores, tamanhos de fontes e espaçamentos para manter a consistência no projeto, utilizando CSS custom properties (--var).
🎨 Exemplo de variáveis CSS:

---css---
Código:
:root {
  --primary-color: #1c1c1c;
  --secondary-color: #6A9AB0;
  --font-size-base: 16px;
  --padding-base: 20px;
}

body {
  background-color: var(--primary-color);
  color: #fff;
}

            ---------------------------------------------------------------------------

3. 📱 Media Queries: Responsividade
🔹 Principais breakpoints para garantir que o design seja responsivo:

Smartphone: 320px a 480px
Tablet: 768px a 1024px
Desktop HD: 1366px
Desktop FullHD: 1920px

🔧 Exemplo de media queries:

---css---
Código:
@media (max-width: 480px) {
  .navbar {
    flex-direction: column;
    gap: 10px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

@media (min-width: 1366px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1920px) {
  .container {
    max-width: 1600px;
  }
}

💡 Dica extra: Teste suas media queries diretamente no navegador com as ferramentas de desenvolvedor para garantir o ajuste adequado em diferentes dispositivos.

            ---------------------------------------------------------------------------

4. 🔠 Fontes: rem vs. px
🔹 Por que usar rem:

Usar rem facilita a responsividade e melhora a acessibilidade.
A unidade rem é relativa ao tamanho da fonte do body, permitindo ajustes mais simples para diferentes tamanhos de tela.
✏️ Exemplo:

---css---
Código:
body {
  font-size: 16px; /* Base */
}

h1 {
  font-size: 2.5rem; /* 2.5 * 16px = 40px */
}

p {
  font-size: 1rem; /* 1 * 16px = 16px */
}

💡 Dica extra: Configure a fonte base no html para escalabilidade em todo o projeto.

            ---------------------------------------------------------------------------

5. 📏 Medidas: vw, vh vs. px

🔹 Quando usar vw e vh:

vw (viewport width) e vh (viewport height) são úteis para criar layouts fluídos que se adaptam ao tamanho da tela.
Use px quando for necessário um tamanho fixo e exato.
📐 Exemplo:

---css---
Código:
.container {
  width: 100vw;  /* 100% da largura da tela */
  height: 50vh;  /* 50% da altura da tela */
}

.fixed-box {
  width: 400px;  /* Tamanho fixo */
}

💡 Dica extra: Combine vw, vh, rem e px estrategicamente para ter um layout flexível e preciso.

            ---------------------------------------------------------------------------

6. 🧩 Dicas de Flexbox
🔹 Principais funcionalidades:

O Flexbox permite criar layouts flexíveis com alinhamento e distribuição de espaço eficientes.
🎛️ Container Flexível:

---css---
Código:
.flex-container {
  display: flex;
  justify-content: center; /* Alinhamento horizontal */
  align-items: center;     /* Alinhamento vertical */
}

🔄 Direção da Flexbox:

---css---
Código:
.flex-container {
  flex-direction: row;  /* Padrão (linha) */
  flex-direction: column;  /* Coluna */
}
↔️ Distribuição do Espaço:

---css---
Código:
.flex-container {
  justify-content: space-between; /* Espaços iguais entre os itens */
  justify-content: space-around;  /* Espaços ao redor de cada item */
}

💡 Dica extra: Experimente o uso de gap para controlar os espaços entre os itens de forma simples e eficaz.

            ---------------------------------------------------------------------------

📋 Próximas Tarefas

1. 🏗️ Leonardo (Header)
Tarefa: Ajustar o header para melhorar a responsividade em diferentes breakpoints.

Dicas:
Use rem para tamanhos de fonte no menu.
Adapte o espaçamento entre os itens com Flexbox e ajuste o tamanho das imagens com vw e vh.

2. 📝 Well (Sessão de Formulário e Headline)
Tarefa: Otimizar o formulário e o texto principal para garantir legibilidade em todas as telas.

Dicas:
Use rem para o tamanho do texto e evite px.
Para margens e espaçamentos, use porcentagens ou vh/vw, permitindo maior fluidez.

3. 🧑‍💻 Marcos (Seção Sobre o Autor)
Tarefa: Ajustar a seção do especialista para garantir que a imagem e o texto fiquem alinhados em diferentes resoluções.

Dicas:
Considere usar flex-direction: column em telas menores para alinhar o texto e a imagem verticalmente.
Trabalhe com min-width e max-width para limitar o tamanho da bio.

4. 🖥️ Isaias (Footer)
Tarefa: Padronizar o footer e garantir que as redes sociais e links se ajustem corretamente.

Dicas:
Utilize Flexbox para alinhar os itens horizontais no footer.
Use rem para o tamanho das fontes e vw/vh para espaçamento interno.

            ---------------------------------------------------------------------------

🏅 Melhores Práticas
Tamanhos de Fontes: Use rem ao invés de px para garantir melhor acessibilidade e responsividade. Defina uma base de 16px para o body e utilize proporções relativas para os outros elementos.

Unidades de Tamanho: Use vw e vh para elementos fluidos e px quando o tamanho precisa ser fixo.

Flexbox: Utilize Flexbox sempre que possível para organizar e alinhar elementos de maneira responsiva.

Breakpoints: Teste a responsividade nos principais breakpoints (smartphones, tablets e desktops).