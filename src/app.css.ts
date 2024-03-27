import { fontFace, globalStyle, style } from "@vanilla-extract/css";

const comicSans = fontFace({
  src: "url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format('woff2')"
});

export const font = style({
  fontFamily: comicSans
});

export const page = style({
  display: "block",
  backgroundColor: "#f7f6f0",
  minHeight: "100dvh",
  padding: "1.5rem"
});

globalStyle("html, body", {
  margin: 0,
  fontFamily: comicSans
});

globalStyle("main", {
  padding: "2rem 0",
  margin: "auto",
  maxWidth: 1200
});

globalStyle("input[type=text]", {
  border: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "0.25rem",
  padding: "0.5rem 1rem"
});

globalStyle(".keen-slider__slide img", {
  width: "100%"
});
