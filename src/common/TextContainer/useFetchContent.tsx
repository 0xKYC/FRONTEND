import { useEffect, useState } from "react";

export const useFetchContent = (path: string) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../../content/legal/${path}.md`).then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((text) => setContent(text));
    });
  }, [path]);

  return { content };
};
