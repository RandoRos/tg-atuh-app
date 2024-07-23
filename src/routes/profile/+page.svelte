<script lang="ts">
	export let data
</script>

<h1 class="text-3xl">Your Profile</h1>

<div class="bg-slate-600 my-10 w-full p-4 rounded-md space-y-5">
  <label class="input input-bordered flex items-center gap-2">
    Telegram ID
    <input type="text" class="grow" placeholder="Daisy" disabled value={data.user.telegramId} />
  </label>
  <label class="input input-bordered flex items-center gap-2">
    Password
    <input type="text" class="grow" placeholder="Daisy" disabled value="*********" />
  </label>
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Created</span>
    </div>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" disabled value={`${data.user.createdAt.getFullYear()} / ${data.user.createdAt.getMonth()} / ${data.user.createdAt.getDay()} `} />
  </label>
</div>
