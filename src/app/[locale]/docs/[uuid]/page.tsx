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

  At the command prompt, type \`nano\`.
  
  My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

  > Dorothy followed her through many of the beautiful rooms in her castle.
  
  > Dorothy followed her through many of the beautiful rooms in her castle.
  >
  >> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
  
  ![The San Juan Mountains are beautiful!](https://mdg.imgix.net/assets/images/san-juan-mountains.jpg?auto=format&fit=clip&q=40&w=1080 "San Juan Mountains")

`;

export default function DocumentPage() {
  return (
    <div className="flex justify-center">
      <MarkdownEditor
        initialMarkdown={content}
      />
    </div>
  );
}
