import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const apiKey = "pl9pxli2eu2lkoutwckbtb3zzyn5qony7043lxykbpw8q7jz";

const TextEditor = ({ content }) => {
  const [value, setValue] = useState(content ?? "");
  const [text, setText] = useState("");
  useEffect(() => setValue(content ?? ""), [content]);
  return (
    <>
      <Editor
        apiKey={apiKey}
        initialValue={content}
        value={value}
        onInit={(evt, editor) => {
          setText(editor.getContent({ format: "text" }));
        }}
        onEditorChange={(newValue, editor) => {
          setValue(newValue);
          setText(editor.getContent({ format: "text" }));
        }}
      />
      <pre>{text}</pre>
    </>
  );
};

export default TextEditor;
