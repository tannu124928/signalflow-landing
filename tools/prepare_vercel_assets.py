from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/webdev-static-assets')
target = Path('/home/ubuntu/signalflow-landing/client/public/assets')
target.mkdir(parents=True, exist_ok=True)

names = [
    'signalflow-hero-texture.png',
    'signalflow-dark-field.png',
    'signalflow-insight-field.png',
    'signalflow-footer-grid.png',
    'signalflow-mark.png',
]

for name in names:
    image = Image.open(source / name).convert('RGB')
    max_width = 1800 if image.width > 1800 else image.width
    if image.width > max_width:
        ratio = max_width / image.width
        image = image.resize((max_width, round(image.height * ratio)), Image.Resampling.LANCZOS)
    output = target / name.replace('.png', '.webp')
    image.save(output, 'WEBP', quality=82, method=6)
