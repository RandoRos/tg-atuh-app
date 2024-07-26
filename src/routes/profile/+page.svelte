<script lang="ts">
	export let data
</script>

<h1 class="text-3xl text-center">Your Profile</h1>

<div class="card bg-base-300 mt-10 md:max-w-[60%] max-w-sm mx-auto">
  <div class="card-body">
    <label class="input input-bordered flex items-center gap-2">
      Telegram ID
      <input type="text" class="grow" placeholder="Daisy" readonly value={data.user.telegramId} />
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Created</span>
      </div>
      <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-[50%]" readonly value={data.user.createdAt.toLocaleDateString('en-GB')} />
    </label>
  </div>
</div>
