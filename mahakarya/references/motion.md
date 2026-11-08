# Motion recipes (scroll-linked, progressive)

All recipes share one primitive: a client component measures its wrapper with `getBoundingClientRect()` in a `requestAnimationFrame` loop started on scroll and resize, and writes a progress custom property (`--p`, 0 to 1) on the wrapper. CSS does the rest with `transform` and `opacity` driven by `--p` through `calc()`. No layout properties are animated, nothing hijacks the wheel, and smooth-scroll libraries (Lenis) keep working because they scroll the window.

Gate every recipe three ways:

- `html.js` and a wide-enough viewport (`min-width: 64rem`) for sticky stages; below that the static layout is the design.
- `prefers-reduced-motion: reduce` → the static layout, `--p` ignored.
- No JS → the static layout; content is never hidden behind a class that only JS adds.

## 1. Sticky stage (hero shrink)

Wrapper `height: 180vh`; child `position: sticky; top: 0; height: 100vh`. The media frame scales from full inset to a centred card: `transform: scale(calc(1 - var(--p) * .28))`, radius grows; the headline fades `opacity: calc(1 - var(--p) * 2.2)`; an overlay data card fades in after `--p > .5` via `opacity: clamp(0, (var(--p) - .5) * 4, 1)`.

## 2. Horizontal track (cards on a rail)

Wrapper `height: calc(100vh + track overflow)`; sticky viewport; the track moves `translateX(calc(var(--p) * -1 * var(--overflow)))`, where `--overflow` (px) is measured once per resize. Per-card tilt is optional: set `--d` per card (its distance from the viewport centre, -1 to 1) in the same frame and use `rotate: y calc(var(--d) * -14deg)` with `perspective` on the track. Mobile: `overflow-x: auto; scroll-snap-type: x mandatory`, no tilt, a visible "geser" hint.

## 3. Crossfade story (pinned steps with a rail)

Wrapper `height: steps × 100vh`; sticky full-bleed stage with all step images stacked; the active index is `floor(--p × steps)`, set as `data-step` so CSS crossfades (`opacity` 600 ms) and a bottom rail fills the active segment (`scale: x`). Text for each step is real DOM, not swapped strings, so screen readers and no-JS read every step as a list. Mobile and reduced motion: a vertical list of panels.

## 4. Marquee

Two copies of the row in a flex track, `animation: marquee 40s linear infinite` on `translate`. A visible Pause button toggles `animation-play-state` (WCAG 2.2.2 for anything that moves longer than five seconds); hover also pauses. Reduced motion: no animation, the row wraps.

## 5. Swap-in icon

A fixed-size slot with 3 to 4 stacked icons; keyframes step their opacity and translate so one shows at a time. Decorative (`aria-hidden`); the heading text stands alone without it. Reduced motion: the first icon only.
