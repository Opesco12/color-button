# @opesco12/color-button

A simple, interactive React button component that changes color on click.

![npm version](https://img.shields.io/npm/v/@opesco12/color-button)
![license](https://img.shields.io/npm/l/@opesco12/color-button)
![downloads](https://img.shields.io/npm/dm/@opesco12/color-button)

## ✨ Features

- 🎨 Changes color randomly on each click
- ⚡ Lightweight and fast
- 📦 Zero dependencies (except React)

## 📦 Installation

```bash
npm install @opesco12/color-button
```

or with yarn:

```bash
yarn add @opesco12/color-button
```

or with pnpm:

```bash
pnpm add @opesco12/color-button
```

## 🚀 Quick Start

```jsx
import React from "react";
import ColorButton from "@opesco12/color-button";

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

| Prop           | Type     | Default       | Description                            |
| -------------- | -------- | ------------- | -------------------------------------- |
| `initialColor` | `string` | `'blue'`      | Initial background color of the button |
| `text`         | `string` | `'Click me!'` | Button text content                    |

### Examples

**With custom initial color:**

```jsx
<ColorButton initialColor="green" />
```

**With custom text:**

```jsx
<ColorButton text="Change Color!" />
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/opesco12/color-button?style=social)
![GitHub forks](https://img.shields.io/github/forks/opesco12/color-button?style=social)

---

Made with ❤️ by [Emmanuel](https://github.com/Opesco12)
