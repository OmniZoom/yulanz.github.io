# Design System

The current visual direction is **Version 3**: a slightly stronger light academic and AI product interface.
Desktop uses a narrow sticky left rail for personal identity and content tabs. Mobile
converts the rail to a compact header with horizontally scrollable tabs.

The Version 3 background starts from `#FAFBFD` and layers very large, low-contrast radial
glows in soft pink (`#F5CDD3`), soft blue (`#BDD9F1`), and soft mint (`#CDEEE5`). It must
retain broad near-white areas and must not read as a saturated gradient wallpaper. Cards
use translucent white surfaces, thin blue-gray outlines, and restrained blur.

Version 2 used the same composition at lower contrast (`#FCFDFF`, `#F9E1E1`, `#D1E5F6`,
and `#E3F8F3`). Version 1 used warm beige, light blue, and light pink. Both remain named
design directions but are no longer the active stylesheet.

Display typography uses the self-hosted Newsreader variable font and interface/body
typography uses the self-hosted Inter variable font. Chinese text uses explicit system
fallbacks (Songti SC/STSong for display and Noto Sans CJK SC/Microsoft YaHei for interface
text), avoiding a third-party font request.
