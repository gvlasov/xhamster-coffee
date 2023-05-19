<script lang="ts">
    import type Coffee from "../data/Coffee";
    import Placeholder from "./Placeholder.svelte";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher()

    export let coffee: Coffee
    $: tags = coffee.notes.split(',').map(tag => tag.trim())
    let i = Math.random()
    let imageLoaded = false
    function onCoverLoad() {
        imageLoaded = true
        dispatch('loaded')
    }
</script>

<li>
    <div class="cover-wrapper">
        {#if !imageLoaded}
            <Placeholder/>
        {/if}
        <img
                class="cover"
                alt="{coffee.blend_name}"
                src={'https://loremflickr.com/500/500/coffee,bean?lock='+coffee.id+"')"}
                on:load={onCoverLoad}
        />
    </div>
    <div class="intensifier">{coffee.intensifier}</div>
    <div class="description">
        <div class="origin">{coffee.origin}</div>
        <h3 class="blend_name">{coffee.blend_name}</h3>
        <div class="variety">{coffee.variety}</div>
        <div class="tags">
            {#each tags as tag}
                <div class="tag">{tag}</div>
            {/each}
        </div>
    </div>
</li>


<style lang="less">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

  li {
    background-color: white;
    list-style-type: none;
    width: 20rem;
    max-width: 100%;
    text-align: left;
    position: relative;
    font-family: Roboto, sans-serif;
    border-radius: .2rem;

    .cover-wrapper {
      position: relative;
      max-height: 12em;
      min-height: 12em;
      height: 12em;
      width: 100%;
      overflow: hidden;

      img.cover {
        object-fit: cover;
        width: 100%;
      }
    }

    .intensifier {
      top: .9rem;
      right: 1rem;
      position: absolute;
      color: white;
      text-shadow: 1px 1px .3rem black;
      font-weight: bold;
    }

    .description {
      padding: 1rem;
    }

    .description > .blend_name {
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: .4rem;
    }

    .origin {
      color: grey;
      margin-bottom: .6rem;
      font-size: .8em;
    }

    .tags {
      white-space: nowrap;
      overflow-x: scroll;
      margin-top: 1rem;
      /* Hide scrollbar for IE, Edge and Firefox */
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      .tag {
        display: inline-block;
        background-color: #eee;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        margin-right: 0.25rem;
        margin-bottom: 0.25rem;
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }


  }

</style>
