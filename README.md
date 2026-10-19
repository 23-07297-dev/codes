# ICE 409 — Interactive practice studio

A browser-based reviewer for Topics 8–12.1, organized around the professor’s Remembering, Understanding, and Applying pointers.

- **56 multiple-choice questions** across eight topic areas, with shuffled answers, explanations, session scores, answer review and retries for missed questions.
- **132 flashcards**, including recall, explanation and application prompts; reveal answers and rate cards for another review.
- **Full searchable reviewer**, worked examples, source corrections, original quiz answers and **26 original visual plates**.
- Topic/objective filters and browser-local progress. No accounts, analytics, remote fonts, external scripts or build dependencies.
- Printable [PDF](reviewers/ICE409_Complete_Reviewer.pdf), editable [Word](reviewers/ICE409_Complete_Reviewer.docx), and [Markdown](reviewers/ICE409_Complete_Reviewer.md).

## Open the interactive reviewer

For a single-file download, save [ICE409_Interactive_Reviewer.html](reviewers/ICE409_Interactive_Reviewer.html) with GitHub’s **Download raw file** button and open it in your browser. Its quiz, reviewer and visual references are embedded; the PDF/Word download links require Internet access.

Alternatively, download or clone the repository and open **`index.html`** in your browser. All scripts and images are local, so it also works offline with the complete folder. Progress uses browser storage; if storage is unavailable the app keeps working for the page session. Storage behavior for `file:` pages varies by browser; use a local server for a consistent origin:

```sh
python3 -m http.server 8000
```

Then open the local server in your browser. Changing browsers, devices or site origins does not transfer progress. Reset clears this app’s quiz history and flashcard ratings on the current browser only. Answers are bundled with the page because this is a study tool, not a secure examination system.

## Optional GitHub Pages hosting

The repository contains a static site ready for GitHub Pages. A repository owner can choose **Settings → Pages → Deploy from a branch → main → / (root)**. Hosting has not been enabled by adding these files. GitHub’s normal repository page displays source files; it does not run the app.

## Content and scope

Based on the eight supplied ICE 409 lecture PDFs and the photographed examination pointers. This is independently authored practice, not a prediction or copy of the actual examination. The pointer photo appears to overlap at question 81; practice numbering is independent.

Source inconsistencies are explicitly flagged: gas vs dust zones/groups, SIL terminology and component-vs-function integrity, simplified design/test equations, and unverified ISO 9001:2026 publication claims. Use the specified standard edition and actual safety requirements for engineering work.

## Development and validation

No installation is required. `interactive/data.js` contains the question bank, flashcards, reviewer chapters and visual metadata. `interactive/core.js` supplies filtering, shuffling, scoring and progress updates. `interactive/app.js` handles the interface. `interactive/style.css` contains responsive styling.

Run the built-in Node tests:

```sh
node --test tests/core.test.cjs
```

Browser checks can be run with Playwright installed:

```sh
python3 -m http.server 8000
# In another terminal:
node tests/browser.cjs
```

Rebuild the standalone HTML after changing the app or content:

```sh
python3 scripts/build_standalone.py
```

The browser check accepts `BASE_URL` to use another server origin. It exercises quiz feedback/scoring, persistence, filters, retries, flashcards, reviewer search and mobile layout. Use `CHROMIUM_PATH` if your Chromium executable is in a custom location. The direct-file test explicitly reports a skip when browser administrator policy blocks `file:` URLs; other failures remain failures. Playwright is only a development test dependency, not a runtime dependency.
