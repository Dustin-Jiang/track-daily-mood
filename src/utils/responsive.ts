import { useMediaQuery } from "@suid/material";
import { createEffect, createSignal } from "solid-js";

const lt600px = useMediaQuery("(min-width: 600px)");
const lt480px = useMediaQuery("(min-width: 480px)");
let [desktop, setDesktop] = createSignal(lt600px());
let [largeMobile, setLargeMobile] = createSignal(lt480px());
createEffect(() => {
  setDesktop(lt600px());
  setLargeMobile(lt480px());
});

export {
  desktop,
  largeMobile
}