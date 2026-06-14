# Neo Perion V2.0 - Performance Guidelines

## 1. Images
- **Format**: All raster images MUST be served in WebP format. No JPEG or PNG on the frontend.
- **Loading**: Use native `loading="lazy"` on all images below the fold.

## 2. Three.js & WebGL
- **Mobile Graceful Degradation**: 3D canvases must detect user agent or performance constraints. Disable the WebGL context on low-end mobile devices and provide a static CSS/WebP fallback background.
- **Resource Cleanup**: Ensure WebGL geometries, materials, and textures are explicitly disposed of when components unmount to prevent memory leaks.

## 3. Animations
- **Accessibility**: Wrap heavy Framer Motion animations in `useReducedMotion` hooks. If a user prefers reduced motion, disable the animation and snap to the final state.
- **CSS Properties**: Only animate `transform` and `opacity`. Avoid animating layout-triggering properties like `width`, `height`, `margin`, or `top`/`left`.

## 4. Bundle Size Target
- **Target**: Initial JS payload should be **< 250KB** (gzipped).
- **Code Splitting**: Use `React.lazy()` for heavy components (e.g., Three.js canvas, Admin Dashboard routes) so they are not included in the initial home page bundle.
