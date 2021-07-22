import Viz from "viz.js";
import HTMLReactParser from "react-html-parser";
import DOMPurify from "dompurify";

export default function VizComponent(props) {
    const graph = Viz(
        props.dot,
        {
          format: "svg",
          scale: 2,
          engine: "dot",
        }
      );
      
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(graph) }} />
    </div>
  );
}
