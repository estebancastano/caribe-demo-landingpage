<script>
    import { onMount } from 'svelte'

    export let name, description

    let imageUrl

    onMount(async () => {
        const destinationsImages = await (await fetch("/destinations-images.json")).json()
        imageUrl = destinationsImages[name]
    })
</script>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg h-44 w-full object-cover object-center" src={imageUrl} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p class="description mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0f928c] rounded-lg hover:bg-[#006465] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Leer más
        </a>
    </div>
</div>

<style>
	.description {
		display: -webkit-box;
		-webkit-line-clamp: 6;
		-webkit-box-orient: vertical;  
		overflow: hidden;
	}
</style>