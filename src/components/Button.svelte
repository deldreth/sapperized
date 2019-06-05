<script>
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    let count = 0;

    function handleClick () {
        count += 1;

        dispatch('click', { count });
    }
</script>

<button on:click={handleClick}>
    <slot/> {count > 0 ? count : ''}
</button>