import { layers } from "../api/mock.api";

export const makeDot = (layers, platforms, components, relationships) => {
  const dotHeader =
    'digraph { bgcolor=none fontcolor="#00915" splines=compound labelloc=t ';

  const nodeLayers = layers
    .filter((layer) => showLayer(layer.idLayer, components))
    .map(
      (layer) =>
        ' {node [shape=plaint color="none" fontcolor="' +
        layer.color +
        '" label="' +
        layer.layer +
        '"] "' +
        layer.idLayer +
        '"}'
    )
    .join(" ");

  const edgeLayers = layers
    .filter((layer) => showLayer(layer.idLayer, components))
    .map((layer) => '"' + layer.idLayer + '"')
    .join(" -> ");

  const nodeComponents = components
    .map(
      (component) =>
        '{ node [shape=box fillcolor="none" color="' +
        getLayerColor(component.idLayer, layers) +
        '" label="' +
        component.component +
        '" fontsize=11 fontcolor="' +
        getLayerColor(component.idLayer, layers) +
        '" ] "' +
        component.idComponent +
        '"} '
    )
    .join(" ");

  const rankComponents = components
    .map(
      (component) =>
        '{rank=same; randir=TB; "' +
        component.idLayer +
        '"; "' +
        component.idComponent +
        '"} '
    )
    .join(" ");

  const edgeComponents = relationships
    .filter((r) => showRelationship(r.from, r.to, components))
    .map(
      (r) =>
        '"' +
        r.from +
        '"->"' +
        r.to +
        '" [arrowhead=normal arrowtail=dot style=dashed labe="" arrowsize=0.5 minlen=3 labelURL="/swagger/id" label="prueba"] '
    )
    .join(" ");

  const dotUltimate =
    dotHeader +
    nodeLayers +
    edgeLayers +
    nodeComponents +
    rankComponents +
    edgeComponents +
    " }";

  return dotUltimate;
};

const getLayerColor = (idLayer, layers) => {
  const color = layers.filter((l) => l.idLayer === idLayer);
  return color[0].color;
};

const showLayer = (idLayer, components) => {
  let response = false;
  const data = components.filter((c) => c.idLayer === idLayer);
  if (data.length > 0) {
    response = true;
  }

  return response;
};

const showRelationship = (idFrom, idTo, components) => {
  let response = false;

  const data = components.filter(
    (c) => c.idComponent === idFrom || c.idComponent === idTo
  );
  console.log("data", data);
  if (data.length > 0) {
    response = true;
  }
  return response;
};
