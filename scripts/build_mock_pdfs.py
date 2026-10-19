"""Rebuild the printable mock exam and its separate answer key (requires reportlab)."""
from pathlib import Path
import html
import json
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

root = Path(__file__).resolve().parents[1]
source = (root / 'interactive/mock-data.js').read_text()
data = json.loads(source.removeprefix('window.MOCK_EXAM_DATA = ').removesuffix(';\n'))
fonts = Path('/usr/share/fonts/truetype/dejavu')
if (fonts / 'DejaVuSans.ttf').exists():
    pdfmetrics.registerFont(TTFont('Mock', str(fonts / 'DejaVuSans.ttf')))
    pdfmetrics.registerFont(TTFont('MockBold', str(fonts / 'DejaVuSans-Bold.ttf')))
else:
    pdfmetrics.registerFontFamily('Mock', normal='Helvetica', bold='Helvetica-Bold')
    # Standard PDF fonts are available on systems without DejaVu.
    from reportlab.pdfbase.pdfmetrics import getFont, registerFont
    from copy import copy
    for alias, name in [('Mock', 'Helvetica'), ('MockBold', 'Helvetica-Bold')]:
        font = copy(getFont(name)); font.fontName = alias; registerFont(font)
styles = {
    'title': ParagraphStyle('title', fontName='MockBold', fontSize=22, leading=27, spaceAfter=15, textColor=colors.HexColor('#173334')),
    'heading': ParagraphStyle('heading', fontName='MockBold', fontSize=14, leading=19, spaceAfter=14),
    'body': ParagraphStyle('body', fontName='Mock', fontSize=9, leading=13, spaceAfter=10),
    'question': ParagraphStyle('question', fontName='MockBold', fontSize=9.5, leading=14, spaceAfter=6),
    'choice': ParagraphStyle('choice', fontName='Mock', fontSize=9, leading=12.5, leftIndent=12, spaceAfter=3),
}
parts = {1: 'Part I — Application | Questions 1–30', 2: 'Part II — Remembering | Questions 31–50',
         3: 'Part III — Application | Questions 51–80', 4: 'Part IV — Understanding | Questions 81–97'}
def paragraph(text, style='body'):
    return Paragraph(html.escape(text), styles[style])
def footer(canvas, document):
    canvas.saveState(); canvas.setFont('Mock', 7); canvas.setFillColor(colors.HexColor('#576969'))
    canvas.drawString(48, 26, 'ICE 409 • Original mock exam based on the supplied lecture materials')
    canvas.drawRightString(564, 26, str(document.page)); canvas.restoreState()
for answer_key in [False, True]:
    title = 'ICE 409 — Mock Exam' + (' Answer Key' if answer_key else '')
    story = [paragraph(title, 'title')]
    if answer_key:
        story.append(paragraph('Separate answer key • 97 items • Use only after completing the mock exam. Letters correspond to the fixed choices in the printable exam; the interactive exam shuffles choices.'))
    else:
        story.extend([paragraph('Name: ____________________________________    Date: ____________________'),
            paragraph('97 multiple-choice items • 1 point each • No negative marking • Suggested time: 120 minutes (a practice default, not a professor-provided limit).'),
            paragraph('Choose the single best answer and record its letter. Use a separate sheet if needed. Do not open the answer key until you finish. Unless stated otherwise, calculations use the simplified lecture assumptions and consistent units; actual engineering work requires the applicable standard edition and full requirements.'),
            paragraph('Coverage follows the photographed pointers. Because the photo overlaps at item 81, this mock uses Part III 51–80 and Part IV 81–97. These are independently authored practice questions, not the actual exam. The full reviewer explains source corrections for dust zones/groups and unverified ISO revision claims.')])
    previous = None
    for question in data['questions']:
        if question['part'] != previous:
            if previous is not None: story.append(PageBreak())
            story.append(paragraph(parts[question['part']], 'heading'))
            previous = question['part']
        group = [paragraph(f"{question['number']}. {question['prompt']}", 'question')]
        if answer_key:
            correct = question['correct']
            group.extend([paragraph(f"Answer: {chr(65 + correct)} — {question['choices'][correct]}"), paragraph(question['explanation'])])
        else:
            for i, choice in enumerate(question['choices']):
                group.append(paragraph(f'{chr(65+i)}. {choice}', 'choice'))
        group.append(Spacer(1, 10))
        story.append(KeepTogether(group))
    name = 'ICE409_Mock_Exam_Answer_Key.pdf' if answer_key else 'ICE409_Mock_Exam.pdf'
    output = root / 'reviewers' / name
    SimpleDocTemplate(str(output), pagesize=(612, 792), topMargin=44, bottomMargin=48,
                      leftMargin=48, rightMargin=48, title=title).build(story, onFirstPage=footer, onLaterPages=footer)
    print(f'Created {name}: {output.stat().st_size:,} bytes')
