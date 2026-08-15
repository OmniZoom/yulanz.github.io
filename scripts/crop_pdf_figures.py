from pathlib import Path

import pymupdf as fitz


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "public/images/research/st-har"
FIGURES = ("pipeline", "SW_size_th", "fig_split_violin_temp")


def content_bbox(page: fitz.Page, scale: float = 2.0) -> fitz.Rect:
    pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), colorspace=fitz.csRGB, alpha=False)
    samples = memoryview(pix.samples)
    width, height = pix.width, pix.height
    min_x, min_y, max_x, max_y = width, height, -1, -1

    # Ignore near-white antialiasing while retaining light plot fills and grid lines.
    for y in range(height):
        row = y * width * 3
        for x in range(width):
            offset = row + x * 3
            if min(samples[offset : offset + 3]) < 246:
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)

    if max_x < 0:
        return page.rect

    padding = 10 / scale
    bbox = fitz.Rect(
        min_x / scale - padding,
        min_y / scale - padding,
        (max_x + 1) / scale + padding,
        (max_y + 1) / scale + padding,
    )
    return bbox & page.rect


for name in FIGURES:
    document = fitz.open(SOURCE_DIR / f"{name}.pdf")
    page = document[0]
    clip = content_bbox(page)
    output = SOURCE_DIR / f"{name}-cropped.png"
    page.get_pixmap(matrix=fitz.Matrix(3, 3), clip=clip, colorspace=fitz.csRGB, alpha=False).save(output)
    print(f"{name}: page={page.rect}, clip={clip}, output={output.name}")
