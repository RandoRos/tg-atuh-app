<script lang="ts">
  export let data;
</script>

<div class="hero min-h-[600px] rounded-xl">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Welcome {data.user?.telegramId ?? 'visitor'}</h1>
      <p class="py-6">
        Welcome to the authentication page for our Telegram bot. To to able to access your settings and profile, please create an account. If you already have an account, you may log in
      </p>
      <a href="/signup"><button class="btn btn-primary text-lg mt-10 w-1/2">Sign Up Now</button></a>
    </div>
  </div>
</div>
