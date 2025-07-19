<script lang="ts">
  type MetaProps = {
    title: string;
    description: string;
  };

  const props: MetaProps = $props();
</script>

<svelte:head>
  <title>{props.title} - Aaron Jordan</title>
  <meta name="description" content={props.description} />
</svelte:head>
