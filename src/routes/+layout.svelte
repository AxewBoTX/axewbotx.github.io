<script>
  import "@/app.css";
  import { onMount } from "svelte";
  import { AppTheme } from "@/lib/stores.js";

  const themes = ["dark", "light"];
  onMount(() => {
    if (typeof window !== "undefined") {
      const theme = window.localStorage.getItem("theme");
      if (theme && themes.includes(theme)) {
        document.documentElement.setAttribute("data-theme", theme);
        AppTheme.set(theme);
      }
    }
  });
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Axew's Living Room" />
  <meta name="author" content="AxewBoTX" />
  <meta name="twitter:title" content="Axew's Living Room" />
  <meta name="twitter:site" content="@AxewBoTX" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:creator" content="@AxewBoTX" />
  <meta property="og:site_name" content="Axew's Living Room" />
  <meta name="og:title" content="Axew's Living Room" />
  <meta property="og:type" content="website" />
  <title>Axew&apos;s Living Room</title>
</svelte:head>

<slot />
