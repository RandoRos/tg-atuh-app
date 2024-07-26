<script lang="ts">

	import TokenDialog from '$lib/components/TokenDialog.svelte'
	import Alert from '$lib/components/Alert.svelte'
	import LoginForm from '$lib/components/LoginForm.svelte'

	export let form

	$: authToken = form?.authToken
	$: open = form?.success
</script>

<h1 class="text-3xl text-center font-semibold antialiased">Signup</h1>

<LoginForm btnText="Sign Up" action="?/signup"/>

<p class="text-center p-2">
	Already have an account? <a class="text-blue-700" href="/login">Login</a>
</p>

{#if form?.error}
	<Alert message={form.error} />
{/if}

<TokenDialog bind:isDialogOpen={open} {authToken} />
