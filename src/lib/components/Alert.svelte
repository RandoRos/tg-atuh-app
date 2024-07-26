<script lang="ts">
	import Error from '$lib/icons/Error.svelte'
	export let message

	let show = true

	setTimeout(() => {
		show = false
	}, 1500)
</script>

{#if show}
	<div role="alert" class="alert alert-error mt-10 text-sm w-1/2 mx-auto duration-75">
		<Error />
		<span>Failed! {message}</span>
	</div>
{/if}
