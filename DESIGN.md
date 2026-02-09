# Valentine's Website Design Document 💕

## Design Principles

### 1. Color Psychology for Romance
- **Pink spectrum**: Soft pinks (#FFE5EC) → vibrant (#FF69B4) → deep magenta (#C44569)
- **Warm gradients**: Peachy (#FFDFD3) + coral (#FFB6B9)
- **Accent gold**: Shimmer effects (#FFD700, #FFC87C)
- **Transitions**: Each section gets unique gradient background

### 2. Animation Choreography
- **Entrance**: Fade-in + slide-up (800ms ease-out)
- **Hover states**: Lift + shadow grow (300ms)
- **Creatures**: Continuous subtle motion (2-4s loops)
- **Scroll parallax**: Different speeds for depth

### 3. Creature Animation Strategy
Using emoji with CSS transforms:
- **🐰 Bunny**: Gentle hop (translateY + rotate)
- **🦋 Butterfly**: Flutter wings (scale + rotate)
- **🌸 Flower**: Bloom pulse (scale)
- **🐝 Bee**: Zigzag flight path
- **🦊 Fox**: Tail wag (rotate origin)
- **🐻 Bear**: Peek from corner (slide-in)
- **🦌 Deer**: Graceful sway
- **🐦 Bird**: Swoop motion

### 4. Petal System V2
- Multiple petal types (rose, cherry blossom, hearts)
- Color gradients: white → pink → red → gold
- Size variety: 5-15px
- Rotation + drift physics
- Interactive: Push away on touch/mouse

### 5. Background Transitions
Section-by-section gradient shifts:
1. Dawn pink (#FFE5EC → #FFF0F5)
2. Sunrise coral (#FFDFD3 → #FFB6B9)
3. Golden hour (#FFF4E6 → #FFD700)
4. Sunset magenta (#FFE0F0 → #FF69B4)
5. Twilight purple (#F5E6FF → #DDA0DD)
6. Starlight deep (#E6E0FF → #9B72CF)
7. Suspense: Dark romantic (#2D1B3D → #1A0A23)
8. Climax: Radiant explosion (rainbow shimmer)

### 6. Typography
- Headers: Playfair Display (elegant serif)
- Body: Crimson Text (readable serif)
- Accents: Dancing Script (romantic cursive)

### 7. Glassmorphism & Depth
- Semi-transparent cards with backdrop blur
- Layered shadows for depth
- Neumorphic checkboxes

### 8. Interaction Details
- Checkboxes: Morphing animation (square → heart shape)
- Fireworks: Multi-color particles with trails
- Touch ripples: Expanding circles
- Parallax: Creatures move at different rates

## Technical Implementation

### CSS Variables for Dynamic Colors
```css
:root {
  --bg-start: #FFE5EC;
  --bg-end: #FFF0F5;
  --accent: #FF69B4;
}
```

### Scroll-based BG Change
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.background = entry.target.dataset.bg;
    }
  });
});
```

### Creature Peek Animation
```css
.peek-creature {
  position: fixed;
  bottom: 0; right: 0;
  animation: peekIn 3s ease-in-out infinite;
}
```

## Goals
✨ Mesmerizing, magical experience
💖 Emotionally engaging story flow
🎨 Professional-level design execution
📱 Flawless on mobile & desktop
