<script lang="ts">
	export let isDialogOpen: any
</script>

<form method="POST" action="?/success">
	<dialog open={isDialogOpen} id="tokenDialog" class="modal backdrop-blur">
		<div class="modal-box flex flex-col space-y-4">
			<h3 class="text-lg font-bold">Please insert your authorization token</h3>

			<input
				class="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-purple-600"
				name="token"
				type="text"
			/>

			<p class="p-2 text-sm">Please copy and save it to somewhere safe, you need this for login</p>
			<div class="modal-action">
				<!-- if there is a button in form, it will close the modal -->
				<button on:click={() => (isDialogOpen = false)} class="btn">Validate</button>
			</div>
		</div>
	</dialog>
</form>
