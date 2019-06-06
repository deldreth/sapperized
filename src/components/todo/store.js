import { writable } from "svelte/store";

function createTodoItems() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    add: item => update(items => items.concat(item)),
    remove: id => update(items => items.filter(item => item.id !== id)),
    clear: () => set([])
  };
}

export const items = createTodoItems();
