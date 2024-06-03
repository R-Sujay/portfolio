import useLocalStorage from "use-local-storage";

export function useGetState() {
  const [theme, setTheme] = await useLocalStorage("theme", "light");

  return { theme, setTheme };
}
useGetState().then((res) => {
  res.theme;
});
