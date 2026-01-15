import { refDebounced } from "@vueuse/core";
import Fuse from "fuse.js";
import { ICON_LIST } from "~/constants/icons";

export function useIcon() {
  const searchQuery = ref("");
  const debouncedSearchQuery = refDebounced(searchQuery, 500);
  const iconCount = ICON_LIST.length;

  const fuse = new Fuse(ICON_LIST, {
    keys: [
      { name: "name", weight: 3 },
      { name: "keywords", weight: 2 },
    ],
    threshold: 0.3,
    ignoreLocation: true,
    findAllMatches: true,
    isCaseSensitive: false,
    minMatchCharLength: 1,
  });

  const filteredIcons = computed(() => {
    const query = debouncedSearchQuery.value.trim();

    if (query === "") {
      return ICON_LIST;
    }

    const result = fuse.search(query);
    return result.map((r) => r.item);
  });

  return {
    iconCount,
    searchQuery,
    debouncedSearchQuery,
    filteredIcons,
  };
}
