# Homepage images

Put the two image files in this folder using these exact names:

- `logo.png` — the Ambo University logo shown in the left navbar island. A transparent PNG works best. Recommended source size: at least 512 × 512 px.
- `home-hero.png` — your campus/nature image used on the right side of the homepage hero. Use a high-resolution landscape image (ideally 1600 × 1200 px or larger); it is cropped to fit the rounded frame.

## Exact repository paths

```text
public/
└── images/
    ├── logo.png
    └── home-hero.png
```

The app loads them at `/images/logo.png` and `/images/home-hero.png`. Keep the filenames and capitalization exactly as shown. The placeholder-style fallback remains visible until the actual files are uploaded.

In GitHub, open the repository, choose **Add file → Upload files**, upload both images into `public/images/`, and commit the upload to `main`.
