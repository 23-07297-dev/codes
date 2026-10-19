# ICE 409 — Interactive practice studio

A browser-based reviewer for Topics 8–12.1, organized around the professor’s Remembering, Understanding, and Applying pointers.

- **56 multiple-choice questions** across eight topic areas, with shuffled answers, explanations, session scores, answer review and retries for missed questions.
- **97-item mock exam** with a 120-minute default timer (or 90/60 minutes or untimed), answer changes, question flags, saved/resumable attempts, automatic submission on timeout, topic/part scores and explanations after submission.
- **132 flashcards**, including recall, explanation and application prompts; reveal answers and rate cards for another review.
- **Full searchable reviewer**, worked examples, source corrections, original quiz answers and **26 original visual plates**.
- Dark mode by default, with a light/dark toggle and a saved browser preference.
- Topic/objective filters and browser-local progress. No accounts, analytics, remote fonts, external scripts or build dependencies.
- Printable [PDF](reviewers/ICE409_Complete_Reviewer.pdf), editable [Word](reviewers/ICE409_Complete_Reviewer.docx), and [Markdown](reviewers/ICE409_Complete_Reviewer.md).

## Open the interactive reviewer

For a single-file download, save [ICE409_Interactive_Reviewer.html](reviewers/ICE409_Interactive_Reviewer.html) with GitHub’s **Download raw file** button and open it in your browser. Its quiz, reviewer and visual references are embedded; the PDF/Word download links require Internet access.

Alternatively, download or clone the repository and open **`index.html`** in your browser. All scripts and images are local, so it also works offline with the complete folder. Progress uses browser storage; if storage is unavailable the app keeps working for the page session. Storage behavior for `file:` pages varies by browser; use a local server for a consistent origin:

```sh
python3 -m http.server 8000
```

Then open the local server in your browser. Changing browsers, devices or site origins does not transfer progress. Reset clears this app’s quiz history and flashcard ratings on the current browser only. Answers are bundled with the page because this is a study tool, not a secure examination system.

## Mock exam

Open the **Mock exam** tab in the interactive reviewer. The full mock covers all eight areas in four parts: application (1–30), remembering (31–50), application (51–80), and understanding (81–97). The pointer photo overlaps at 81; this layout resolves that overlap for the practice exam. Questions are independently authored, and all 97 are multiple choice rather than a claim about the professor’s actual item formats.

- [Printable exam — 17 pages](reviewers/ICE409_Mock_Exam.pdf)
- [Separate answer key and explanations — 16 pages](reviewers/ICE409_Mock_Exam_Answer_Key.pdf)

The timer is based on an absolute deadline and continues across tab changes, reloads and time spent away. An expired saved attempt submits when the page next runs. Untimed attempts have no deadline. Answers/flags and the latest completed result use a separate browser-storage key from quiz progress; Reset in the quiz progress card does not clear the mock exam. Starting another attempt replaces the saved mock attempt. If browser storage is blocked, keep the page open: no reload recovery is available.

You can revisit questions or clear an answer before submission. The submit dialog reports unanswered/flagged items. Unanswered items earn zero; every one of the 97 items is included in the score. The results include topic/part breakdowns, question explanations, a mistakes-only filter and a downloadable JSON report. Interactive choices are shuffled; printable answer letters apply to the printable version. As with any client-side study tool, the bundled answers are not a secure exam.

## Optional GitHub Pages hosting

The repository contains a static site ready for GitHub Pages. A repository owner can choose **Settings → Pages → Deploy from a branch → codes → / (root)**. Hosting has not been enabled by adding these files. GitHub’s normal repository page displays source files; it does not run the app.

## Content and scope

Based on the eight supplied ICE 409 lecture PDFs and the photographed examination pointers. This is independently authored practice, not a prediction or copy of the actual examination. The pointer photo appears to overlap at question 81; practice numbering is independent.

Source inconsistencies are explicitly flagged: gas vs dust zones/groups, SIL terminology and component-vs-function integrity, simplified design/test equations, and unverified ISO 9001:2026 publication claims. Use the specified standard edition and actual safety requirements for engineering work.

## Development and validation

No installation is required. `interactive/data.js` contains the question bank, flashcards, reviewer chapters and visual metadata. `interactive/core.js` supplies filtering, shuffling, scoring and progress updates. `interactive/app.js` handles the interface. `interactive/style.css` contains responsive styling.

Run the built-in Node tests:

```sh
node --test tests/core.test.cjs tests/exam.test.cjs
```

Browser checks can be run with Playwright installed:

```sh
python3 -m http.server 8000
# In another terminal:
node tests/browser.cjs
node tests/theme.cjs
node tests/exam-browser.cjs
```

Rebuild the standalone HTML after changing the app or content:

```sh
python3 scripts/build_standalone.py
```

The mock bank is in `interactive/mock-data.js`; its grading/time functions are in `interactive/exam-core.js` and its interface is in `interactive/exam.js`. Rebuild the printable exam/key after changing the bank with `python3 scripts/build_mock_pdfs.py` (requires ReportLab), then rebuild the standalone HTML.

The browser check accepts `BASE_URL` to use another server origin. It exercises quiz feedback/scoring, persistence, filters, retries, flashcards, reviewer search and mobile layout. Use `CHROMIUM_PATH` if your Chromium executable is in a custom location. The direct-file test explicitly reports a skip when browser administrator policy blocks `file:` URLs; other failures remain failures. Playwright is only a development test dependency, not a runtime dependency.
