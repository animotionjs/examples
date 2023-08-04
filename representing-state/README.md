# Avoid Representing State With Booleans

YouTube: https://www.youtube.com/watch?v=4Lom_lqSGoY
SvelteLab: https://www.sveltelab.dev/5cm41zk8o2t1n7p

Inside `theme.css` I set a `max-height` for code blocks to get the scrolling effect.

```css
.reveal pre code {
	max-height: 600px;
	/* ... */
}
```

## Setup

Install dependencies.

```sh
pnpm i
```

Run the development server at http://localhost:5173/.

```sh
pnpm run dev
```

Build and preview deploy.

```sh
pnpm run build && pnpm run preview
```
