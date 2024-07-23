<script lang="ts">
  export let data;
</script>

<h1 class="text-6xl">Welcome {data.user?.telegramId ?? 'visitor'}</h1>
