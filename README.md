[![fahrschulring-ci](https://github.com/VitaByte/Fahrschulring-Stuttgart/actions/workflows/fahrschulring-ci.yml/badge.svg)](https://github.com/VitaByte/Fahrschulring-Stuttgart/actions/workflows/fahrschulring-ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<div align="center">
  <img src="public/logo.jpg" alt="Logo" width="300">
</div>


<div id="about">
  <h2>About</h2>
  <p>Welcome to Fahrschulring! 👋</p>
</div>

<!-- Add CSS styles to the same Markdown file -->

<style>
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.wave-animation {
  display: inline-block;
  animation-name: wave;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>

<!-- Add JavaScript code to the same Markdown file -->

<script>
window.addEventListener('DOMContentLoaded', () => {
  const welcomeElement = document.querySelector('#about p');
  const waveElement = document.createElement('span');
  waveElement.textContent = '👋';
  waveElement.classList.add('wave-animation');
  welcomeElement.appendChild(waveElement);
});
</script>

## Getting Started

Install:

```bash
npm Install
```

Run the project:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
