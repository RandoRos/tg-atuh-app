<script lang="ts">
	import Copy from '$lib/icons/Copy.svelte';
	export let isDialogOpen: any;
	export let authToken: string;
</script>

<dialog open={isDialogOpen} id="tokenDialog" class="modal backdrop-blur">
	<div class="modal-box flex flex-col space-y-4">
		<h3 class="text-lg font-bold">This is your authorization token!</h3>
		<div class="py-4 px-4 bg-slate-700 flex items-center justify-between">
			<span>{authToken}</span>
			<button class="w-6"><Copy /></button>
		</div>
		<p class="p-2 text-sm">Please copy and save it to somewhere safe, you need this for login</p>
		<div class="modal-action">
			<form method="POST" action="?/success">
				<!-- if there is a button in form, it will close the modal -->
				<button on:click={() => (isDialogOpen = false)} class="btn">OK</button>
			</form>
		</div>
	</div>
</dialog>
