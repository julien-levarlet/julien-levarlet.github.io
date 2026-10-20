# ChirpQuiz website

The complete GitHub Pages site is built with MkDocs Material. Edit the source in `mkdocs/`, the generated site is written to `docs/`.

## Project layout

- `mkdocs/` contains all page sources and site assets, including the bilingual landing pages, privacy policies, and user manual.
- `mkdocs.yml` configures the site build.
- `docs/` is generated output and is the folder published by GitHub Pages. Do not edit it directly.

Commit the generated `docs/` output along with source changes when publishing from the repository's `docs/` folder.

## Legacy URLs

These old URLs are kept as redirects for existing links and bookmarks. Destinations are relative to the site root:

| Legacy URL | Redirects to |
| --- | --- |
| `/en.html` | `/` |
| `/fr.html` | `/fr/` |
| `/landing_page/en.html` | `/` |
| `/landing_page/fr.html` | `/fr/` |
| `/privacy_policy/en.html` | `/privacy_policy/` |
| `/privacy_policy/fr.html` | `/fr/privacy_policy/` |

The Google Play listing uses `/privacy_policy/en.html`, keep that redirect in place unless the listing URL is updated too. The redirect source files are under `mkdocs/`.

## Set up MkDocs

Install Python, then create and activate a virtual environment and install the Material theme (which includes MkDocs):

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install mkdocs-material mkdocs-static-i18n
```

On Windows, activate the environment with `.venv\\Scripts\\activate` instead.

## Preview and build

Run the live-reloading MkDocs preview from the repository root with the virtual environment active:

```sh
python -m mkdocs serve
```

Open the local URL printed by MkDocs (usually `http://127.0.0.1:8000/`). This preview rebuilds when source files change.

To test the exact static files that GitHub Pages will publish, build the site and serve `docs/` with Python:

```sh
python -m mkdocs build
python -m http.server 8001 --directory docs
```

Open `http://127.0.0.1:8001/`. Use this mode to check page navigation, the language selector, and the light/dark theme against the generated output. The site is static, do not open its HTML files directly with a `file://` URL. If port `8001` is already in use, choose another port number.

After changing content, rebuild the site and commit the generated `docs/` output along with the source changes when publishing from the repository's `docs/` folder.