---

## Slot Machine Project Documentation

### Project Overview
This project is a React-based slot machine mini-game where users can spin reels to win items with different types, rarities, and counts, suitable for a shooter game theme. It includes a spin button to initiate the game, a dynamic rolling animation, and a reward display.

---

### Project Structure

```
slot-machine/
├── public/
│   ├── index.html
│   ├── images/
│       ├── weapon.png
│       ├── consumable.png
│       ├── material.png
│   └── ...
├── src/
│   ├── components/
│   │   ├── SlotMachine.js
│   │   ├── Reel.js
│   │   ├── SpinButton.js
│   ├── data/
│   │   └── items.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

### Directory and File Descriptions

#### 1. **public/**
   - Contains assets and the main HTML entry point for the application.

   - **index.html**: The root HTML file where the React app is injected.

   - **images/**: Stores images representing items that appear on the slot machine reels, such as `weapon.png`, `consumable.png`, and `material.png`.

#### 2. **src/**
   - Contains the main source code and component structure for the slot machine application.

   - **App.js**: The main component that imports and renders the `SlotMachine` component.

   - **App.css**: General styles for the application, such as background and layout settings.

   - **index.js**: Entry point for the React app, responsible for rendering the `App` component into the root element in `index.html`.

   - **index.css**: Base styles and CSS resets.

#### 3. **src/components/**
   - Contains all primary components used to build the slot machine.

   - **SlotMachine.js**
     - Main slot machine component that manages the game state, initiates spins, and displays rewards.
     - Calls `spinReels` to set items and rolling states, uses delays to stagger reel stopping times, and controls animations.

   - **Reel.js**
     - Represents a single reel of the slot machine.
     - Receives an `item` prop for the item displayed on the reel and an `isRolling` prop to control its animation.
     - Uses CSS for the spin animation (`rolling` class) and stop (`stop-rolling` class) with item images and rarity styles.

   - **SpinButton.js**
     - A button component to initiate the spin when clicked.
     - Calls `spinReels` function from `SlotMachine` to start the reels.

#### 4. **src/data/**
   - Contains game data such as item lists or configurations.

   - **items.js**: Defines a list of items that may appear on the reels. Each item includes properties like `type`, `rarity`, and `count`.

     ```javascript
     const items = [
       { type: "Weapon", rarity: "Legendary", count: 1 },
       { type: "Consumable", rarity: "Rare", count: 2 },
       { type: "Material", rarity: "Common", count: 3 },
       // additional items
     ];
     export default items;
     ```

---

### Setup Instructions

1. **Install dependencies**:
   - Run `npm install` in the project root to install all dependencies defined in `package.json`.

2. **Run the application**:
   - Start the development server by running `npm start`.
   - Open `http://localhost:3000` in a browser to view the slot machine game.

3. **Build the application**:
   - To create an optimized production build, run `npm run build`.
   - The build output will be in the `build/` folder.

4. **Deploying the App**:
   - The app can be deployed to any static hosting service like GitHub Pages, Vercel, or Netlify by uploading the contents of the `build/` directory.

---

### Component Interaction Flow

1. **User clicks SpinButton**.
2. **SlotMachine**:
   - Sets `isRolling` to `true` for all reels.
   - Selects random items from `items.js` for each reel.
   - Sets the selected items in state and gradually stops each reel with delays.
3. **Reel**:
   - Animates using CSS classes based on `isRolling` prop.
   - Shows the final item when stopped.
4. **Reward Display**:
   - Updates based on the items displayed on the reels after they stop.

---

### Additional Notes

- **CSS Styling**: The animations and styles are defined in `Reel.css` to create a smooth rolling effect. Customize further for appearance.
- **Image Assets**: Add additional item images in `public/images` to expand the slot machine item pool.

---