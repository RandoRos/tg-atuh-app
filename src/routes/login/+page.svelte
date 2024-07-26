<script lang="ts">
	import TokenValidationDialog from '$lib/components/TokenValidationDialog.svelte'
	import LoginForm from '$lib/components/LoginForm.svelte'
	import Alert from '$lib/components/Alert.svelte'

	export let form

	let open = form?.success
</script>

<h1 class="text-3xl text-center font-semibold antialiased">Login</h1>

<LoginForm btnText="Log in" action="?/login" />
<p class="text-center p-2">
	Don't have an account? <a class="text-blue-700" href="/signup">Signup</a>
</p>

{#if form?.error}
	<Alert message={form.error} />
{/if}

<TokenValidationDialog bind:isDialogOpen={open} />
