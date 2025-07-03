<script lang="ts">
  import { page } from "$app/state";
</script>

<div class="flex h-full flex-col p-16">
  <h1>:: Error {page.status}</h1>
  <p class="ml-[3ch]">{page.error?.message}</p>
</div>
