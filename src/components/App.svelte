<script lang="ts">
    import Coffee from "./Coffee.svelte";
    import AddButton from "./AddButton.svelte";
    import * as CoffeeDto from "../data/Coffee";

    let coffees: Coffee[] = []
    let loading = false
    let listElement: HTMLElement


    let autoAddCoffeeTimeout = 30000;
    let autoAddCoffeeInterval;

    addCoffee()

    function scrollToBottom(node): void {
        node.scrollTo({ top: node.scrollHeight, behavior: 'smooth' });
    }

    function resetInterval() {
        clearInterval(autoAddCoffeeInterval)
        autoAddCoffeeInterval = setInterval(addCoffee, autoAddCoffeeTimeout)
    }

    function addCoffee(): void {
        if (loading) {
            return
        }
        loading = true
        getNewCoffee().then(coffee => {
            coffees = [...coffees, coffee]
            resetInterval()
        })
    }

    async function getNewCoffee(): Promise<CoffeeDto> {
        return await fetch(
            'https://random-data-api.com/api/coffee/random_coffee'
        ).then(res => res.json())
    }
</script>

<main>
    <div class="coffees" bind:this={listElement}>
        {#each coffees as coffee}
            <Coffee {coffee} on:loaded={() => loading = false}/>
        {/each}
    </div>
    <AddButton on:click={() => {addCoffee(); scrollToBottom(listElement)}}/>
</main>

<style lang="less">
    main {
        text-align: center;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        align-items: center;

        .coffees {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            width: 100%;
        }
    }
</style>
