<script lang="ts">
	import Copy from '$lib/icons/Copy.svelte'
	export let isDialogOpen: any
	export let authToken: string

	let isToastOpen = false

	const copyToClipboard = () => {
		navigator.clipboard.writeText(authToken)
		isToastOpen = true
		setTimeout(() => {
			isToastOpen = false
		}, 1000)
	}
</script>

<dialog open={isDialogOpen} id="tokenDialog" class="modal backdrop-blur">
	<div class="modal-box flex flex-col space-y-4">
		<h3 class="text-lg font-bold">This is your authorization token!</h3>
		<div class="py-4 px-4 bg-base-200 flex items-center justify-between">
			<span>{authToken}</span>
			<div class="tooltip" data-tip="Copy">
				<button on:click={copyToClipboard} class="w-5"><Copy /></button>
			</div>
		</div>
		<p class="p-2 text-sm">Please copy and save it to somewhere safe, you need this for login</p>
		<div class="modal-action">
			<form method="POST" action="?/success">
				<!-- if there is a button in form, it will close the modal -->
				<button on:click={() => (isDialogOpen = false)} class="btn">OK</button>
			</form>
		</div>
	</div>

	{#if isToastOpen}
		<div class="toast z-10">
			<div class="alert alert-success">
				<span>Authorization token copied to clipboard</span>
			</div>
		</div>
	{/if}
</dialog>
