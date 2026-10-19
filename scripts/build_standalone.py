"""Create a single downloadable HTML reviewer with all scripts and images embedded."""
from pathlib import Path
import base64
import re

root = Path(__file__).resolve().parents[1]
page = (root / 'index.html').read_text()
css = (root / 'interactive/style.css').read_text()
page = page.replace('<link rel="stylesheet" href="interactive/style.css">', '<style>' + css + '</style>')
scripts = []
for name in ['core.js', 'data.js', 'app.js', 'exam-core.js', 'mock-data.js', 'exam.js']:
    content = (root / 'interactive' / name).read_text()
    if name == 'data.js':
        for plate in (root / 'interactive/plates').glob('*.jpg'):
            uri = 'data:image/jpeg;base64,' + base64.b64encode(plate.read_bytes()).decode('ascii')
            content = content.replace('"interactive/plates/' + plate.name + '"', '"' + uri + '"')
    content = content.replace('</script', '<\\/script')
    scripts.append('<script>' + content + '</script>')
    page = page.replace('<script defer src="interactive/' + name + '"></script>', '')
# Inline scripts run after the document exists (inline `defer` would not defer execution).
page = page.replace('</body>', '\n'.join(scripts) + '\n</body>')
page = page.replace('href="index.html"', 'href="#main"')
page = page.replace('href="reviewers/', 'href="https://github.com/23-07297-dev/codes/blob/codes/reviewers/')
output = root / 'reviewers/ICE409_Interactive_Reviewer.html'
output.write_text(page)
print(f'Created {output.name}: {output.stat().st_size:,} bytes')
