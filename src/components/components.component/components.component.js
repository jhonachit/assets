import React from "react";
import "./components.component.css";

export default function Components(props) {
  console.log("props", props);
  return (
    <div className="">
      <div className="component-filters">
        <div className="component-filters-options">
          <div className="h5">Filters</div>
          <a
            type="button"
            className="btn nav-link component-filters-options-button"
            onClick={props.handleClickShowFilters.bind(this)}
          >
            {props.showFilters ? "hidden " : "show "}{" "}
            <i className={"bi-eye" + (props.showFilters ? "-slash" : "")}></i>
          </a>
        </div>
        <div
          className={
            "component-filters-content " + (props.showFilters ? "" : "hidden")
          }
        >
          <div className="form-floating mb-3">
            <input
              className="form-control"
              list="datalistOptionsLayer"
              id="filterLayer"
              onBlur={props.handleChangeLayer.bind(this)}
            />
            <label htmlFor="filterLayer" className="form-label">
              Layer
            </label>
            <datalist id="datalistOptionsLayer">
              {props.layers.map((layer) => (
                <option key={layer.idLayer} data-value={layer.idLayer}>
                  {layer.layer}
                </option>
              ))}
            </datalist>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              list="datalistOptionsPlatform"
              id="filterPlatform"
              onBlur={props.handleChangePlatform.bind(this)}
            />
            <label htmlFor="filterPlatform" className="form-label">
              Platform
            </label>
            <datalist id="datalistOptionsPlatform">
              {props.platforms.map((platform) => (
                <option key={platform.platform} value={platform.platform} />
              ))}
            </datalist>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              list="datalistOptionsTags"
              id="filterTag"
              onBlur={props.handleChangeTag.bind(this)}
            />
            <label htmlFor="filterTag" className="form-label">
              Tag
            </label>
            <datalist id="datalistOptionsTags">
              {props.platforms.map((platform) => (
                <option key={platform.platform} value={platform.platform} />
              ))}
            </datalist>
          </div>
        </div>
      </div>
      <div className="components">
        <div className="component-components-options">
          <div className="h5">Components</div>

          <div className="component-components-options-button">
            <a className="nav-link " href="/component">
              <i className="bi-plus-circle"></i>
            </a>
            {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href="/component">
                  New Component
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/layers">
                  View Layers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/platforms">
                  View platforms
                </a>
              </li>
            </ul> */}
          </div>
        </div>
        <ol className="component-list-content">
          
          {props.components.map((component) => (
            
            <div
              key={component.idComponent}
              id={component.idComponent}
              className="list-group-item d-flex justify-content-between align-items-start component-list-button btn-group-vertical"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id={"btn" + component.idComponent}
                value={component.idComponent}
                autocomplete="off"
                onClick={props.handleClickComponent.bind(this)}
              />
              <label
                class={
                  "btn btn-outline-primary " + (component.idComponent ===
                  props.componentSelected
                    ? " active"
                    : "")
                }
                for={"btn" + component.idComponent}
              >
                <div
                  key={"component-list-item" + component.idComponent}
                  className="ms-2 me-auto component-list-item"
                >
                  <div
                    key={"component-list-item-title" + component.idComponent}
                    className="component-list-item-title"
                  >
                    {component.component}
                  </div>
                  <div
                    key={"component-list-item-subtitle" + component.idComponent}
                    className="component-list-item-subtitle"
                  >
                    {component.layer}
                  </div>
                  <div
                    key={"component-list-item-desc" + component.idComponent}
                    className="component-list-item-desc"
                  >
                    {component.platform}
                  </div>
                </div>
              </label>

              <a
                className="nav-link m-2 component-list-item-edit btn-outline-info "
                href={"/component/" + component.idComponent}
              >
                <i className="bi-pencil"></i>
              </a>
            </div>
          ))}
        </ol>
      </div>
      <div
        className={
          "relationship " + (props.componentSelected ? "show" : "hidden")
        }
      >
        <div className="h5">Relationship</div>
        <div className="relationship-content">
          <div className="col relationship-to-content">
            <div>form</div>
            {props.relationshipTo ?
            <div>
              {props.relationshipTo.map((to) => (
                <div>
                  <div className="component-list-item-title">{to.from}</div>
                  <div className="component-list-item-desc">
                    {to.component}.{to.layer}.{to.platform}
                  </div>
                </div>
              ))}
            </div>
            :""}
          </div>
          <div className="col relationship-from-content ">
            <div>To</div>
            {props.relationshipFrom ?
            <div>
              {props.relationshipFrom.map((from) => (
                <div>
                  <div className="component-list-item-title">{from.to}</div>
                  <div className="component-list-item-desc">
                    {from.component}.{from.layer}.{from.platform}
                  </div>
                </div>
              ))}
            </div>
            :""}
          </div>
        </div>
      </div>
    </div>
  );
}
