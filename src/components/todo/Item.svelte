<script>
    import { items } from './store.js';

    export let id;

    function handleClick() {
        items.remove(id);
    }
</script>

<style>
    li:hover {
        cursor: pointer;
    }
</style>

<li on:click={handleClick}>
    <slot/>
</li>