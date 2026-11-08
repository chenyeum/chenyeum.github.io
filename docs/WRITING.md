# Writing Guide

## Content Categories

- tech
- research
- reading
- life

Each category has its own folder under `src/content/posts/`.

Every article should have at least one category tag.

## Create a New Article

```bash
pnpm new:post tech "My New Article"
```

This creates a Markdown draft.

Open the generated file and edit its frontmatter.

## Publish an Article

Set:

```yaml
draft: false
```

Then commit and push to the `main` branch, or merge a pull
request into `main`.

## Markdown Images

Put public images in `public/images/`.

Reference them with absolute site paths:

```markdown
![Description](/images/example.webp)
```

## Writing on Another Computer

Clone the repository and install dependencies once.

Before editing:

```bash
git pull --rebase
```

After editing:

```bash
git add .
git commit -m "Add new article"
git push
```

## Writing Through GitHub Web

1. Open `src/content/posts/`.
2. Create or edit a Markdown file.
3. Use a feature branch.
4. Open a pull request.
5. Merge after the validation workflow passes.

## Editorial Rules

- Keep filenames and directory names in English.
- Use descriptive English slugs.
- Keep code, configuration, and documentation in English.
- Articles may be written in any language.
- Never commit passwords, private keys, or private notes.
- A draft is not published to the website, but it is still
  visible in the public GitHub repository.
