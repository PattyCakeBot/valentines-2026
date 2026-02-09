# Valentine's V4 - Sunset to Fireflies

## Vision

A story that transforms from day → sunset → twilight → night, with petals becoming fireflies that form hearts.

## Technical Plan

### 1. **Dynamic Gradient (Scroll-Based)**

Colors by section:
1. Dawn: `#FFE5EC → #FFF0F5` (pink morning)
2. Morning: `#FFDFD3 → #FFB6B9` (coral)
3. Afternoon: `#FFF4E6 → #FFDAB9` (peach)
4. Golden Hour: `#FFE4B5 → #FFD700` (gold)
5. Sunset: `#FF6B9D → #FF4500` (vibrant orange/pink)
6. Twilight: `#9B72CF → #4A148C` (purple)
7. **Suspense/Night: `#1A0A23 → #0A0510`** (deep dark)
8. Firefly finale: Dark with glowing hearts

**Implementation:**
```javascript
const colors = [
  { start: '#FFE5EC', end: '#FFF0F5' },
  { start: '#FFDFD3', end: '#FFB6B9' },
  // ... etc
];

function updateGradient(scrollPercent) {
  const index = Math.floor(scrollPercent * colors.length);
  // Interpolate between colors[index] and colors[index+1]
}
```

### 2. **Clouds**

- CSS-only clouds (rounded divs)
- Drift across screen at different speeds
- Fade out during sunset (opacity → 0)
- Positioning: Top 30% of viewport

### 3. **Petals → Fireflies Transition**

**Petals:**
- Start with 80 petals
- Fade opacity based on scroll (1.0 → 0 during sunset sections)
- Remove from array when opacity < 0.1

**Fireflies:**
- Appear when scroll > 70% (twilight)
- Small glowing dots (2-4px)
- Gentle floating motion
- Pulsing glow animation

### 4. **Firefly Heart Formation**

**Edge Hearts:**
- 4 hearts: top-left, top-right, bottom-left, bottom-right
- Each heart = ~20 fireflies
- Position in heart shape using parametric equations

**Center Heart:**
- Large heart (200px wide)
- ~60 fireflies
- "Will You Be My Valentine?" text inside
- Staggered reveal: fireflies light up one by one (50-100ms delay)

**Implementation:**
```javascript
function heartShape(t, scale) {
  const x = scale * 16 * Math.pow(Math.sin(t), 3);
  const y = -scale * (13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t));
  return { x, y };
}
```

### 5. **Animation Sequence (Final Section)**

1. Scroll stops working (or slows dramatically)
2. Screen is dark with gentle firefly floating
3. After 2s: Edge hearts start forming
   - Fireflies move to positions (1s ease-out)
   - Light up randomly over 2s
4. After edge hearts: Center heart forms
   - Larger fireflies
   - Light up over 3s (staggered)
5. Text fades in: "Will You Be My Valentine?"
6. Checkboxes fade in below (500ms delay)

### 6. **Performance**

- Use `requestAnimationFrame`
- Limit fireflies to 150 total
- Use CSS transforms (GPU accelerated)
- Debounce scroll handler

## Color Palette

**Day:**
- Pink: #FFE5EC, #FFF0F5
- Coral: #FFDFD3, #FFB6B9
- Peach: #FFF4E6, #FFDAB9

**Sunset:**
- Gold: #FFE4B5, #FFD700, #FFA500
- Orange: #FF6B9D, #FF4500
- Purple: #DDA0DD, #9B72CF

**Night:**
- Deep purple: #4A148C, #2D1B3D
- Dark: #1A0A23, #0A0510

**Fireflies:**
- Glow: #FFD700 (gold)
- Core: #FFFACD (light yellow)
- Halo: rgba(255, 215, 0, 0.6)

## Files

- `index.html` - Main HTML structure
- Inline CSS - All styling
- Inline JS - Animation logic
