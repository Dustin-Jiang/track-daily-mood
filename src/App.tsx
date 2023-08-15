import { createSignal, type Component, createEffect } from 'solid-js';
import { Route, Router, Routes } from "@solidjs/router";
import Home from './page/home';
import { Breakpoint, Theme, ThemeProvider, useMediaQuery } from '@suid/material';
import { MaterialYouThemeDark, MaterialYouThemeLight } from './model/theme';

let dark = useMediaQuery("(prefers-color-scheme: dark)");
let [theme, setTheme] = createSignal<Theme<Breakpoint>>();

const toggleTheme = () => {
  setTheme(!dark() ? MaterialYouThemeLight : MaterialYouThemeDark);
}
toggleTheme()

const App: Component = () => {
  createEffect<boolean>((prev) =>  {
    if (dark() !== prev) {
      console.log(dark())
      toggleTheme()
    }
    return dark()
  })

  return (
    <>
      <ThemeProvider theme={theme()}>
        <Router>
          <Routes>
            <Route
              path="/"
              component={Home}
            ></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
export {
  theme
}