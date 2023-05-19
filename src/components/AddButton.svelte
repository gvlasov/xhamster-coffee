<script lang="ts">
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

</script>

<button on:click={() => dispatch('click', {})}>+</button>

<style lang="less">
  button {
    background-color: #ED4728;
    border-radius: 1rem;
    padding: 1rem;
    color: white;
    text-shadow: 1px 1px 0 black;
    width: 15rem;
    font-size: 2.3rem;
    font-family: Roboto, sans-serif;
    box-shadow: .05rem .05rem 1px black;
    cursor: pointer;
    user-select: none;
    position: sticky;
    bottom: 2rem;

    &:active {
      background-color: #cb1010;
      transition: background-color .2s;
    }
  }

</style>
