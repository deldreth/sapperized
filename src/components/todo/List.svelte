<script>
    import { items } from './store';
    import Input from './Input.svelte';
    import Item from './Item.svelte';
</script>

<Input/>

<ul>
{#each $items as { id, label }, i}
    <Item id={id}>{label}</Item>
{/each}
</ul>