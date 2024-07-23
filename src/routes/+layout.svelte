<script lang="ts">
	import '../app.css'

	export let data
</script>

<nav class="navbar bg-base-100">
	<ul class="menu menu-horizontal">
		<li><a href="/">Home</a></li>

		{#if data?.user}
			<li>
				<form action="/logout" method="POST">
					<button type="submit">Logout</button>
				</form>
			</li>
			<li><a href="/profile">Profile</a></li>
		{:else}
			<li><a href="/signup">Sign Up</a></li>
			<li><a href="/login">Login</a></li>
		{/if}
	</ul>
</nav>

<main class="container mx-auto max-w-lg my-10">
	<slot />
</main>
