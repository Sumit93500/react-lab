# 📘 React Notes

---

## 1. What is React?

React = a JavaScript library to build UI using **components**.

**Without React (plain JS):**
- You find elements and change them yourself
- Example: `document.querySelector`, `innerHTML`
- Gets messy when the page grows

**With React:**
- You describe how the UI should look
- React builds and updates the HTML for you

---

## 2. React vs ReactDOM

| Library | What it does |
|---|---|
| `react.js` | The brain. Makes components, JSX, props. Doesn't know about browsers. |
| `react-dom.js` | The hands. Shows the UI on the web page. |

**Why two?**
- React core also works for mobile apps (React Native)
- So the browser part is kept separate

**Where ReactDOM is used in my code (only one place):**
```js
ReactDOM.createRoot(container).render(<App />);
```

---

## 3. How React is set up

**Step 1:** Empty div where React will draw
```html
<div class="js-container"></div>
```

**Step 2:** Load 3 scripts (order matters)
1. `react.js`
2. `react-dom.js`
3. `babel.js`

**Step 3:** Write code inside
```html
<script type="text/babel"> ... </script>
```

**Step 4:** Start the app
```js
const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<App />);
```

**Flow:**
```
Page loads → Libraries load → Babel converts JSX → React renders App
```

> Note: This is the learning setup. Real projects use Vite.

---

## 4. JSX and Babel

**Problem:**
- Browser understands only HTML, CSS, JS
- JSX (HTML inside JS) is NOT valid JS
- Browser gives an error if it sees JSX

**JSX example:**
```jsx
<ChatMessage message="Hello" sender="user" />
```

**What Babel does:**
- Babel = translator
- Converts JSX to plain JS
```js
React.createElement(ChatMessage, { message: "Hello", sender: "user" })
```

**Why `type="text/babel"`?**
- It tells Babel to process this script first

**Why we need Babel:**
- Browser can't read JSX
- Writing `React.createElement` by hand is long and confusing

**Benefits:**
- Code is easy to read
- Fewer mistakes
- Modern JS works in older browsers
- Used in almost every project

**Full flow:**
```
Write JSX → Babel translates → Plain JS → React builds UI → ReactDOM shows it
```

---

## 5. Components

- A reusable piece of UI
- Split the page into small parts

**In my chatbot:**
| Component | Purpose |
|---|---|
| `ChatInput` | Input box + button |
| `ChatMessage` | One message |
| `App` | Whole app (uses the other two) |

Write once, use many times.
(`ChatMessage` is used 4 times.)

---

## 6. Component Syntax

```jsx
function ChatInput() {
  return (
    <>
      <input placeholder="Send message to chatbot" size="30"></input>
      <button>Send</button>
    </>
  );
}
```

**3 rules:**
1. Name starts with a **capital letter**
2. It must **return** JSX
3. Use it like a tag: `<ChatInput />`

---

## 7. Creating My Own HTML Elements

- A component = my own custom tag
- Make a function with a capital name that returns JSX
- Use it like `<ChatMessage />`, same as `<div>` or `<button>`

---

## 8. Fragment

**Rule:** A component can return only **one** top-level element.

**Problem:** `ChatInput` has two things (input + button).

**Fix:** Wrap them in a fragment
```jsx
<>
  <input ... />
  <button>Send</button>
</>
```

- `<> </>` groups elements
- It does NOT add an extra `<div>` to the page

---

## 9. Props

- Values passed into a component
- Like HTML attributes
- Same component, different content

**Passing props:**
```jsx
<ChatMessage message="Hello Chatbot" sender="user" />
```

**Receiving props:**
```jsx
function ChatMessage({ message, sender }) { ... }
```

**Remember:**
- `{ message, sender }` = destructuring (picks props out)
- `{message}` in JSX = shows the value

---

## 10. Guard Operator (`&&`)

Used to show something **only if a condition is true**.

```jsx
{sender === 'robot' && <img src="robot.png" width="50"></img>}
```

| Condition | Result |
|---|---|
| true | Image is shown |
| false | Nothing is shown |

**In my chatbot:**
- Robot message → robot image shows
- User message → user image shows
- One component handles both

---