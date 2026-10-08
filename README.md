# 💚itshover-vue💚

An unofficial Vue / Nuxt port of the beautiful [itshover.com](https://www.itshover.com/) icon library.
Bring your app to life with interaction-based animated icons, fully compatible with **shadcn-vue**.

![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)
![Vue](https://img.shields.io/badge/Vue.js-3.x-green.svg)
![Nuxt](https://img.shields.io/badge/Nuxt-4.x-green.svg)

## 🌟 Credits & Attribution

**Original library repository:** [itshover](https://github.com/itshover/itshover)  
**Original code © 2026 itshover**  
**Port © 2026 iloomilo**

Licensed under the **Apache License, Version 2.0**.  
See the [LICENSE](./LICENSE) and [NOTICE](./NOTICE) files for details.  
This project modifies the original React code to work with Vue.js.

## 🚀 Get Started

You can install components directly using the `shadcn-vue` CLI. You don't need to copy-paste code manually.

### 1. Prerequisites

Make sure you have a working [shadcn-vue](https://www.shadcn-vue.com/) project set up.

### 2. Add an Icon

Run the following command in your terminal to add an icon (e.g., `AccessibiltyIcon`):

```bash
npx shadcn-vue@latest add https://itshover-vue.com/r/AccessibilityIcon.json
```

## Animation controls

Icons animate on hover by default. For continuous animation:

```vue
<HeartIcon autoplay loop disable-hover />
```

| Prop           | Behavior                                |
| -------------- | --------------------------------------- |
| `autoplay`     | Start after mounting.                   |
| `loop`         | Repeat the complete animation sequence. |
| `disableHover` | Disable hover controls.                 |

All three default to `false`. Component refs also expose `startAnimation()` and
`stopAnimation()` for manual control.

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTION.md](./CONTRIBUTION.md) for guidelines on how to get started, project structure, and how to add new icons.
