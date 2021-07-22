import { components } from "./mock.api";
import { resourceType } from "./mock.api";
export const listComponents = (layer, platform, tag) => {
  if (
    layer !== undefined &&
    layer !== "" &&
    platform !== undefined &&
    platform !== ""
  ) {
    return components.filter(
      (c) =>
        c.layer.toLowerCase().includes(layer.toLowerCase()) &&
        c.platform.toLowerCase().includes(platform.toLowerCase())
    );
  }
  if (layer !== undefined && layer !== "") {
    return components.filter((c) =>
      c.layer.toLowerCase().includes(layer.toLowerCase())
    );
  }
  if (platform !== undefined && platform !== "") {
    return components.filter((c) =>
      c.platform.toLowerCase().includes(platform.toLowerCase())
    );
  }
  return components;
};

export const listResourceType = () => {
  return resourceType;
};

export const getComponent = (id) => {
  console.log("filter-ID", id)
  const component = components.filter((r) => r.idComponent === id);
  return component[0];
};


export const addComponent = (component) => {
  return resourceType;
};


export const updateComponent = (component) => {
  return resourceType;
};