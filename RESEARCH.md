# Premium Landing Page Research 🎯

## iPhone Landing Page Design Principles

### 1. **Scroll Behavior**
- **Scroll snap**: Each section locks into view
- **Smooth momentum**: easing functions (cubic-bezier)
- **Parallax**: Different layers move at different speeds
- **Sticky sections**: Use CSS `scroll-snap-type: y mandatory`

### 2. **Gradient Mastery**
- **Seamless transitions**: Use multiple gradient stops
- **No hard edges**: Blend colors over 100-200px
- **Dynamic blending**: CSS `background-blend-mode`
- **Mesh gradients**: Multiple radial gradients overlapping

### 3. **Typography**
- **Hero text**: 72-96px, bold, tracking: -2%
- **Body**: 18-24px, line-height: 1.5-1.8
- **Spacing**: Generous whitespace (80-120px between sections)

### 4. **Animation Choreography**
- **Entrance**: Stagger delays (100ms between elements)
- **Scroll-triggered**: Intersection Observer with thresholds
- **Performance**: Use `transform` and `opacity` only
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`

### 5. **Color Psychology**
Apple uses:
- Soft neutrals → vibrant accents
- Gradient layers (3-4 colors)
- Depth through shadows (4-6 layers)

### 6. **Polish Details**
- **Anti-aliasing**: `-webkit-font-smoothing: antialiased`
- **Backdrop effects**: `backdrop-filter: blur(40px)`
- **Micro-interactions**: Hover states, button press feedback
- **Loading states**: Skeleton screens

## Implementation Plan

### CSS Fixes
```css
html {
  scroll-snap-type: y proximity; /* or mandatory */
  scroll-behavior: smooth;
}

section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

/* Seamless gradient */
body {
  background: 
    linear-gradient(180deg, 
      #FFE5EC 0%,
      #FFDFD3 20%,
      #FFF4E6 40%,
      #FFE0F0 60%,
      #F5E6FF 80%,
      #E6E0FF 100%
    );
  background-attachment: fixed;
}
```

### JavaScript Enhancements
- Detect scroll position → interpolate gradient colors
- Add momentum scrolling for mobile
- Preload next section assets

## Benchmarks to Match
- Apple iPhone pages
- Stripe landing pages
- Linear.app homepage
- Vercel homepage

## Performance Targets
- First paint: < 1s
- Interactive: < 2s
- Smooth 60fps scrolling
- No jank on mobile
