import React, { useState, useEffect } from "react";
import "./components.view.css";
import { Components, Viz } from "../../components";
import {
  listLayers,
  listPlatforms,
  listComponents,
  listRelationshipTo,
  listRelationshipFrom,
  listRelationship,
} from "../../api";
import { makeDot } from "../../utils";

export default function ComponentsView() {
  const [layers, setLayers] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [components, setComponents] = useState([]);
  const [filterLayer, setFilterLayer] = useState("");
  const [filterPlaform, setFilterPlatform] = useState("");
  const [filterTag, setFilterTag] = useState("");
  const [filterComponent, setFilterComponent] = useState("");
  const [componentSelected, setComponentSelected] = useState("");
  const [dot, setDot] = useState("");
  const [relationship, setRelationship] = useState("");
  const [relationshipFrom, setRelationshipFrom] = useState("");
  const [relationshipTo, setRelationshipTo] = useState("");
  const [showRelationship, setShowRelationship] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    fetchComponents();
    fetchRelationship();
  }, [filterLayer, filterPlaform]);

  useEffect(() => {
    fetchLayers();
    fetchPlatforms();
  }, []);

  useEffect(() => {
    fetchRelationshipFrom();
    fetchRelationshipTo();
  }, [componentSelected]);

  useEffect(() => {
    fetchDot();
  }, [components]);

  const handleClickShowFilters = (event) => {
    setShowFilters(!showFilters);
    event.preventDefault();
  };

  const handleClickComponent = (event) => {
    setComponentSelected(event.target.value);
    event.preventDefault();
  };

  const handleChangeTag = (event) => {
    setFilterTag(event.target.value);
    event.preventDefault();
  };

  const handleChangeLayer = (event) => {
    setFilterLayer(event.target.value);
    event.preventDefault();
  };

  const handleChangePlatform = (event) => {
    setFilterPlatform(event.target.value);
    event.preventDefault();
  };

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

  const fetchComponents = async () => {
    try {
      const componentsData = listComponents(
        filterLayer,
        filterPlaform,
        filterTag
      );
      setComponents(componentsData);
      setComponentSelected("");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDot = () => {
    try {
      setDot(makeDot(layers, platforms, components, relationship));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRelationship = () => {
    try {
      const rData = listRelationship();
      setRelationship(rData);
      
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRelationshipFrom = () => {
    try {
      const rData = listRelationshipFrom(componentSelected);
      setRelationshipFrom(rData);
      console.log("fetchRelationshipFrom", rData)
      
    } catch (err) {
      console.log(err);
    }
  };
  const fetchRelationshipTo = () => {
    try {
      const rData = listRelationshipTo(componentSelected);
      setRelationshipTo(rData);
      
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="components-content">
      <div className="components-panel-left">
        <Components
          layers={layers}
          platforms={platforms}
          components={components}
          componentSelected={componentSelected}
          relationshipFrom={relationshipFrom}
          relationshipTo={relationshipTo}
          showFilters={showFilters}
          handleChangeLayer={handleChangeLayer}
          handleChangePlatform={handleChangePlatform}
          handleChangeTag={handleChangeTag}
          handleClickComponent={handleClickComponent}
          handleClickShowFilters={handleClickShowFilters}
        ></Components>
      </div>
      <div className="components-gutter"></div>
      <div className="components-panel-right">
        <Viz dot={dot} />
      </div>
    </div>
  );
}
