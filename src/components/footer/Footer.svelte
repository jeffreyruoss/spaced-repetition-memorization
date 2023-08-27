<script>
  import ByJeff from "./ByJeff.svelte";
  import PwaInstallButton from "./PwaInstallButton.svelte";
</script>

<footer>
  <div class="container">
    <PwaInstallButton />
    <ByJeff />
  </div>
</footer>

<style>
	.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>