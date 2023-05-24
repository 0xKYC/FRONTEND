import { useEffect, useState } from "react";

export const useFetchContent = (path: string) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`legal/${path}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [path]);

  return { content };
};
