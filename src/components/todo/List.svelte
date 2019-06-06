<script>
    import { items } from './store';
    import Button from '../Button.svelte';

    $: if ($items) {
        console.log(`Number of list items: ${$items.length}`);
    }

    let label = '';

    function handleAddItem () {
        items.add({ id: $items.length + 1, label });
        label = '';
    }
</script>

<input
    type="text"
    value={label}
    on:keyup={(event) => {
        label = event.target.value;

        if (event.code === 'Enter' && label !== '') {
            handleAddItem();
        }
    }}/>

{#if label !== ''}
    <Button on:click={handleAddItem}>
        Add Task
    </Button>
{/if}

{#each $items as { id, label }, i}
    <div>{label}</div>
{/each}