# Contributing to itshover-vue

First off, thank you for considering contributing to `itshover-vue`. Let's start with the setup!

## 🛠️ Local Development Setup

To get started with local development, follow these steps:

### 1. Prerequisites

- **Node.js**: Version 22.x or higher.
- **pnpm**: Recommended package manager.

### 2. Fork and Clone

Fork the repository on GitHub and clone it to your local machine:

```bash
git clone https://github.com/iloomilo/itshover-vue.git
cd itshover-vue
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Run Development Server

```bash
pnpm dev
```

The documentation site will be available at `http://localhost:3000`.

## 📂 Project Structure

- `app/`: Basically the Nuxt application (documentation/preview).
- `registry/icons/`: The source files for all animated icons (.vue components).
- `registry/types/`: TypeScript definitions for the icons.
- `scripts/`: Build scripts for the registry.
- `public/r/`: The generated registry JSON files served for `shadcn-vue` installation.

## 🎨 Contributing New Icons

Since this project is a port, most contributions will involve porting icons from the original [itshover](https://github.com/itshover/itshover) repository.

### Steps to add an icon:

1.  **Create the Vue Component**: Create a new `.vue` file in `registry/icons/`. Use the template below.
2.  **Naming Convention**: Use `PascalCase` and suffix the name with `Icon` (e.g., `HeartIcon.vue`).
3.  **Add to Icon Constants**: Add your new icon to `app/constants/icons.ts`, to make the search functional.
    -   `name`: kebab-case name of the icon (e.g., `heart-icon`).
    -   `componentName`: The PascalCase name (e.g., `HeartIcon`).
    -   `keywords`: An array of keywords for search. You can often find these in the original [itshover](https://github.com/itshover/itshover) repository.
4.  **Build the Registry**: After adding or modifying an icon, you must rebuild the registry to generate the JSON files:
    ```bash
    pnpm registry:build
    ```
4.  **Verify**: Check the local documentation site to ensure the icon renders and animates correctly

### General Icon Component Template:

```vue
<script setup lang="ts">
import { useAnimate } from 'motion-v'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: ''
})

const [scope, animate] = useAnimate()

const start = async () => {
  // Add your animations here
  // await animate('.target', { ... }, { ... })
}

const stop = () => {
  // Reset animations
  // animate('.target', { ... }, { ... })
}

defineExpose({
  startAnimation: start,
  stopAnimation: stop
} satisfies AnimatedIconHandle)
</script>

<template>
  <svg
    ref="scope"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['cursor-pointer', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <!-- SVG Paths here -->
  </svg>
</template>
```

## 📜 Pull Request Guidelines

1.  **Branching**: Create a feature branch for your changes (e.g., `feat/new-icon-name`).
2.  **Linting & Formatting**: Ensure your code passes linting and formatting checks:
    ```bash
    pnpm lint:all:fix
    ```
3.  **Registry Build**: Ensure you have run `pnpm registry:build` if you added/modified icons, as the JSON files in `public/r/` must be updated.
4.  **Descriptive PR**: Provide a clear description of your changes and reference any related issues.

## ⚖️ License

By contributing to this project, you agree that your contributions will be licensed under its **Apache License, Version 2.0**.
