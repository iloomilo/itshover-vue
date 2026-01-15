<template>
  <div class="min-h-screen max-w-screen bg-background flex flex-col text-foreground">
    <Navbar />
    <main class="grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
