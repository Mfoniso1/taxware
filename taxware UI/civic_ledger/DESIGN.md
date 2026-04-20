# Design System Specification: The Sovereign Interface

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Ledger"**

This design system moves away from the "cluttered bureaucracy" of traditional government software and toward a philosophy of **Architectural Ledgering**. It treats data as a monumental asset—stable, transparent, and permanent. By combining the precision of Swiss editorial design with a deep, petrol-toned palette, we create an environment of "Authoritative Calm." 

We break the "template" look by eschewing standard borders in favor of **Tonal Sculpting**. The UI should feel like it has been carved out of a single, cohesive material, using light and depth rather than lines to define the workspace.

---

## 2. Color Philosophy: Depth Over Definition
The palette is rooted in `primary (#00464d)`, a deep petrol that evokes stability. 

### The "No-Line" Rule
**Borders are forbidden for sectioning.** To separate a sidebar from a main content area, or a header from a body, designers must use background shifts. 
*   **Example:** A `surface-container-low` navigation rail sitting against a `surface` background.
*   **The Result:** A seamless, high-end "monolithic" feel that reduces visual noise and cognitive load for admin users handling high-density data.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. 
*   **Base Layer:** `surface` (#f8f9fa)
*   **Secondary Content Areas:** `surface-container-low` (#f3f4f5)
*   **Interactive/Elevated Cards:** `surface-container-lowest` (#ffffff)
*   **Modal/Floating Overlays:** `surface-bright` with 80% opacity and a 20px backdrop-blur.

### The "Glass & Gradient" Rule
For the Mobile Agent app, use a subtle **Signature Gradient** on primary CTAs: a linear transition from `primary (#00464d)` to `primary-container (#135f67)`. This adds a "lithic" sheen that makes touch targets feel tactile and premium, even in harsh outdoor sunlight.

---

## 3. Typography: Editorial Authority
The system utilizes a dual-typeface pairing to balance institutional trust with modern efficiency.

*   **Display & Headlines (Public Sans):** Chosen for its geometric stability. Use `display-lg` for high-level revenue overviews to give the data a "monumental" feel.
*   **Body & Labels (Inter):** A workhorse for legibility. 
    *   **Data Tables:** Use `body-sm` with `medium` weight for numerical values to ensure high data density remains readable.
    *   **Mobile Agent:** Use `title-md` for input labels to ensure visibility in outdoor, high-glare environments.

---

## 4. Elevation & Depth: Tonal Layering
We reject the 2010s "Drop Shadow." Depth is achieved through the **Layering Principle**.

*   **Ambient Shadows:** If an element must float (e.g., a mobile action button), use a shadow with a 32px blur, 0px offset, and 6% opacity using the `on-surface` color.
*   **The "Ghost Border" Fallback:** In high-density admin tables where rows require separation, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Mobile Tactility:** Use `surface-container-highest` for inactive states to create a "pressed-in" look, contrasting with the "raised" feel of `primary` buttons.

---

## 5. Components & Logic

### KPI Cards (The "Snapshot" Pattern)
*   **Structure:** No borders. Use `surface-container-lowest` background. 
*   **Visual Soul:** A 4px vertical "accent bar" on the left using `surface-tint`.
*   **Content:** `label-md` for the metric name (all caps, tracked out +5%) and `headline-md` for the currency value.

### Data Tables (The "Dense Ledger")
*   **Header:** `surface-container-high` background, `label-md` text in `on-surface-variant`.
*   **Rows:** Alternating shifts between `surface` and `surface-container-low`. **No horizontal dividers.**
*   **Focus:** The active row should use a `primary-fixed-dim` background at 20% opacity.

### Status Indicators (Sync/Offline)
*   **Syncing:** A `secondary` colored pulse using a soft glow (8px blur) of `secondary_fixed`.
*   **Offline:** Use `tertiary` (the burnt orange/brown tone) for "Offline/Local Save" to distinguish from "Error" (`error`). This suggests "Caution/Action Needed" rather than "System Failure."

### Input Fields & Forms
*   **State:** Standard fields use `surface-variant` backgrounds with a bottom-only "Ghost Border" (2px).
*   **Mobile Targets:** For outdoor agents, inputs must be a minimum of 56px in height with `roundness-lg` (0.5rem) to ensure easy thumb-triggering.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use `surface-container-lowest` for the main "working paper" of the admin dashboard.
*   **Do** use `tertiary-container` for non-critical warnings in revenue collection to keep the interface from looking too "alarmist."
*   **Do** utilize white space as a structural element. If two sections feel cluttered, increase the padding rather than adding a line.

### Don't:
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#191c1d) to maintain the "petrol" tonal depth.
*   **Don't** use "Standard Blue" for links. Use `primary` or `surface-tint`.
*   **Don't** use sharp corners for buttons. Stick to `roundness-md` (0.375rem) for a modern, approachable government feel.