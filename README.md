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

Icons animate on hover by default. All icons accept these optional boolean props:

| Prop           | Default | Behavior                                                                            |
| -------------- | ------- | ----------------------------------------------------------------------------------- |
| `autoplay`     | `false` | Start after mounting. Hover events do not interrupt automatic playback.             |
| `loop`         | `false` | Replay the complete animation sequence, including its reset, until stopped.         |
| `disableHover` | `false` | Disable hover controls while keeping autoplay and component-ref controls available. |

```vue
<HeartIcon autoplay loop disable-hover />
```

With `loop` alone, hovering starts repetition and mouse leave stops it. With
`autoplay` alone, the icon runs its original animation once; icons whose original
animation already repeats internally continue repeating. Enabling `loop` makes
those internal infinite repeats finite for each cycle, then replays the whole
sequence. Existing awaited stages, parallel animations, delays, and finite repeat
counts are preserved.

You can also control an icon through a component ref:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import HeartIcon from '@/components/ui/itshover/icons/HeartIcon.vue'
import type { AnimatedIconHandle } from '@/components/ui/itshover/types/types'

const heart = ref<AnimatedIconHandle | null>(null)
</script>

<template>
  <HeartIcon ref="heart" loop disable-hover />
  <button @click="heart?.startAnimation()">Start</button>
  <button @click="heart?.stopAnimation()">Stop</button>
</template>
```

Calling stop also stops autoplay; it stays stopped until explicitly started again
or autoplay is toggled off and on. Changing `loop` during playback restarts the
animation using the new setting. Disabling autoplay stops and resets the icon.
Animation work is cancelled when the icon unmounts.

CLI installation includes the shared types and the animation helper. When copying
manually, install `motion-v` and copy the icon, `types/types.ts`,
`animation/useAnimatedIcon.ts` into
sibling `icons`, `types`, and `animation` folders. Previously installed icons need
to be updated to use the new props; their existing copies remain unchanged.

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTION.md](./CONTRIBUTION.md) for guidelines on how to get started, project structure, and how to add new icons.
