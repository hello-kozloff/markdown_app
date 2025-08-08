import { MarkdownEditor } from "@/entities/markdown";

const content = `
  
  # Заголовок первого уровня (h1)
  ## Заголовок второго уровня (h2)
  ### Заголовок третьего уровня (h3)
  #### Заголовок четвёртого уровня (h4)
  ##### Заголовок четвёртого уровня (h5)
  ###### Заголовок четвёртого уровня (h6)
  
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, soluta!
  
  I just love **bold text**.
  
  Italicized text is the *cat's meow*.
  
  My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
  
`;

export default function DocumentPage() {
  return (
    <MarkdownEditor
      initialMarkdown={content}
    />
  );
}
