# @yourusername/color-button

A simple, interactive React button component that changes color on click.

![npm version](https://img.shields.io/npm/v/@yourusername/color-button)
![license](https://img.shields.io/npm/l/@yourusername/color-button)
![downloads](https://img.shields.io/npm/dm/@yourusername/color-button)

## 📺 Demo

![Demo](https://github.com/yourusername/your-repo/raw/main/demo.gif)

<!-- Alternative: Link to live demo -->

[Live Demo](https://codesandbox.io/s/your-demo-link) | [Example Code](https://github.com/yourusername/your-repo/tree/main/examples)

## ✨ Features

- 🎨 Changes color randomly on each click
- ⚡ Lightweight and fast
- 📦 Zero dependencies (except React)
- 💪 Written in modern JavaScript
- 🎯 TypeScript support (optional)

## 📦 Installation

```bash
npm install @yourusername/color-button
```

or with yarn:

```bash
yarn add @yourusername/color-button
```

or with pnpm:

```bash
pnpm add @yourusername/color-button
```

## 🚀 Quick Start

```jsx
import React from "react";
import ColorButton from "@yourusername/color-button";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <ColorButton />
    </div>
  );
}

export default App;
```

## 📖 API

### Props

| Prop           | Type       | Default       | Description                            |
| -------------- | ---------- | ------------- | -------------------------------------- |
| `initialColor` | `string`   | `'blue'`      | Initial background color of the button |
| `text`         | `string`   | `'Click me!'` | Button text content                    |
| `onClick`      | `function` | -             | Custom click handler (optional)        |

### Examples

**With custom initial color:**

```jsx
<ColorButton initialColor="green" />
```

**With custom text:**

```jsx
<ColorButton text="Change Color!" />
```

**With custom click handler:**

```jsx
<ColorButton onClick={() => console.log("Button clicked!")} />
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- Twitter: [@yourusername](https://twitter.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Inspired by [similar-project](https://github.com/example)
- Thanks to all contributors

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/color-button?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/color-button?style=social)

---

Made with ❤️ by [Emmanuel](https://github.com/Opesco12)
