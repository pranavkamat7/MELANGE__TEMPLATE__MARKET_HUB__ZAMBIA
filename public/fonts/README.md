# Font Installation Instructions

## Required Fonts

Download **Bricolage Grotesque** from Google Fonts and place the following `.woff2` files in this directory:

### Files Needed:
1. `bricolage-grotesque-regular.woff2` (weight: 400)
2. `bricolage-grotesque-medium.woff2` (weight: 500)
3. `bricolage-grotesque-bold.woff2` (weight: 700)

## Download Steps:

1. Visit: https://fonts.google.com/specimen/Bricolage+Grotesque
2. Click "Download family"
3. Extract the ZIP file
4. Convert TTF files to WOFF2 format using:
   - https://cloudconvert.com/ttf-to-woff2
   - Or use `woff2_compress` CLI tool

5. Rename the converted files to match the names above
6. Place them in `/public/fonts/`

## Verification:

After installing, check that:
- ✅ NO requests to `fonts.googleapis.com` or `fonts.gstatic.com`
- ✅ Fonts load from `/fonts/*.woff2`
- ✅ `font-display: swap` is applied in `/src/styles/fonts.css`

## Alternative Method (Quick):

Use the Google Fonts Helper:
https://gwfh.mranftl.com/fonts/bricolage-grotesque

Select weights: 400, 500, 700
Format: woff2
Download and place files here.
