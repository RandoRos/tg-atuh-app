<script lang="ts">
  import Password from '$lib/icons/Password.svelte'
  import User from '$lib/icons/User.svelte'

  export let btnText
  export let action
</script>

<form class="mt-16 space-y-6 max-w-sm md:max-w-lg mx-auto" action={action} method="POST">
	<label class="input input-bordered flex items-center gap-2">
		<User />
		<input type="text" class="grow" placeholder="Telegram ID" name="telegramId" />
	</label>

	<label class="input input-bordered flex items-center gap-2">
		<Password />
		<input type="password" class="grow" placeholder="Password" name="password" />
	</label>

	<button class="btn btn-primary w-full my-5 text-xl uppercase" type="submit">{btnText}</button>
</form>