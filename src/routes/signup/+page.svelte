<script lang="ts">
	import TokenDialog from '$lib/components/TokenDialog.svelte'
	export let form

	const authToken = form?.authToken
	$: open = form?.success
</script>

<h1 class="text-3xl text-center">Sign Up</h1>

<form class="mt-5 space-y-4" action="?/signup" method="POST">
	<div>
		<label for="telegramId">Telegram ID</label>
		<input class="w-full p-2 text-xl" id="telegramId" name="telegramId" type="text" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input class="w-full p-2 text-xl" id="password" name="password" type="password" required />
	</div>

	<button class="btn btn-primary w-full my-5" type="submit">Signup</button>
</form>

{#if form?.error}
	<div role="alert" class="alert alert-error mt-10 text-sm w-1/2 mx-auto">
		<svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
			><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
				d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
			/></svg
		>
		<span>Error! {form.error}</span>
	</div>
{/if}

<TokenDialog bind:isDialogOpen={open} {authToken} />
