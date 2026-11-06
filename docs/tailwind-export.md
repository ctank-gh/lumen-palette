# Tailwind config export

Map a palette to the theme colors entry in a Tailwind config. The palette API is still planned; this initial example uses a static object.

```js
const palette = { ink: "#172554", paper: "#ffffff" };
export default { theme: { extend: { colors: { lumen: palette } } } };
```

Use `lumen-ink` & `lumen-paper` color utilities in the app. Check each foreground/background pair before use.
