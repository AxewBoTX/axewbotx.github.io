<script>
  import { AppTheme } from "@/lib/stores.js";
  import { setTheme } from "@/lib/setTheme.js";
  const handleClick = () => {
    if ($AppTheme == "dark") {
      setTheme("light");
    } else if ($AppTheme == "light") {
      setTheme("dark");
    }
  };
</script>

<button class="btn btn-primary" on:click={handleClick}> Toggle Theme </button>
