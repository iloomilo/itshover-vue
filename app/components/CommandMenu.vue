<script setup lang="ts">
import { useMagicKeys, whenever } from "@vueuse/core";
import { LINKS } from "~/constants/links";

const isOpen = defineModel<boolean>("open", { default: false });
const router = useRouter();

//replace with real icons
const ICONS = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Settings", path: "/settings" },
  { name: "Profile", path: "/profile" },
];

const openExternalLink = (url: string) => {
  window.open(url, "_blank");
  isOpen.value = false;
};

const { ctrl_k } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key.toLowerCase() === "k" && e.type === "keydown") {
      e.preventDefault();
      return true;
    }
  },
});

whenever(ctrl_k!, () => {
  isOpen.value = true;
});

const navigateTo = (path: string) => {
  router.push(path);
  isOpen.value = false;
};
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogContent
      class="bg-popover text-popover-foreground w-full max-w-[450px] overflow-hidden rounded-xl border shadow-2xl">
      <Command class="w-full">
        <CommandInput placeholder="Type a command or search..." autofocus />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Socials">
            <CommandItem value="github" class="gap-4" @select="openExternalLink(LINKS.GITHUB)">
              <ArrowNarrowRightIcon class="h-4 w-4" />
              GitHub
            </CommandItem>

            <CommandItem value="twitter" class="gap-4" @select="openExternalLink(LINKS.TWITTER)">
              <ArrowNarrowRightIcon class="h-4 w-4" />
              X formerly Twitter
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Icons">
            <CommandItem v-for="icon in ICONS" :key="icon.name" :value="icon.name" class="gap-4"
              @select="navigateTo(icon.path)">
              <ArrowNarrowRightIcon class="h-4 w-4" />
              {{ icon.name }}
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Support">
            <CommandItem value="issue" class="gap-4">
              <ArrowNarrowRightIcon class="h-4 w-4" />
              Facing issue?
            </CommandItem>

            <CommandItem value="feature" class="gap-4">
              <ArrowNarrowRightIcon class="h-4 w-4" />
              Request feature
            </CommandItem>

            <CommandItem value="bug" class="gap-4">
              <ArrowNarrowRightIcon class="h-4 w-4" />
              Report bug
            </CommandItem>

            <CommandItem value="contribute" class="gap-4">
              <ArrowNarrowRightIcon class="h-4 w-4" />
              Contribute
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </DialogContent>
  </Dialog>
</template>
