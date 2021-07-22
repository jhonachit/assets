import React, { useState, useEffect } from "react";
import "./component.view.css";
import { Component } from "../../../components";
import { useParams } from "react-router-dom";
import {
  listResourceType,
  listLayers,
  listPlatforms,
  getComponent,
  addComponent,
  updateComponent,
} from "../../../api";
export default function ComponentView() {
  let { idComponent } = useParams();
  const isAddMode = !idComponent;
  const [component, setComponent] = useState();
  const [resourceType, setResourceType] = useState();
  const [layers, setLayers] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    fetchLayers();
    fetchPlatforms();
    fetchResourceType();
    fetchComponent();
  }, []);

  useEffect(() => {
    fetchComponent();
  }, [idComponent]);

  const fetchLayers = async () => {
    try {
      const layersData = listLayers();
      setLayers(layersData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPlatforms = async () => {
    try {
      const platformsData = listPlatforms();
      setPlatforms(platformsData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchResourceType = async () => {
    try {
      const resourceTypeData = listResourceType();
      setResourceType(resourceTypeData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchComponent = async () => {
    try {
      const component = getComponent(idComponent);
      console.log("component",component)
      setComponent(component);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = (component) => {
    try {
      const r = addComponent(component);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (component) => {
    try {
      const r = updateComponent(component);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
    <div>
      {console.log(idComponent)}
      <Component
        values={component ? component : null}
        resourceType={resourceType}
        layers={layers}
        platforms={platforms}
        isAddMode={isAddMode}
        handleCreate={handleAdd}
        handleUpdate={handleUpdate}
      ></Component>
    </div>
  );
}
