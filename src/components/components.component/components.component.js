import React from "react";
import "./components.component.css"
import { PlusCircle, Pencil, DashCircle } from "react-bootstrap-icons";

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
                <option key={layer.idLayer} data-value={layer.idLayer}>{layer.layer}</option>
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
            <a
              type="button"
              className="btn nav-link "
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              options <i className="bi-three-dots-vertical"></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
            </ul>
          </div>
        </div>
        <ol className="component-list-content">
          {props.components.map((component) => (
            <button
              key={component.idComponent}
              id={component.idComponent}
              className="list-group-item d-flex justify-content-between align-items-start btn component-list-button"
              onClick={props.handleClickComponent.bind(this)}
            >
              <div key={"component-list-item" + component.idComponent} className="ms-2 me-auto component-list-item">
                <div key={"component-list-item-title" + component.idComponent} className="component-list-item-title">
                  {component.component}
                </div>
                <div key={"component-list-item-subtitle" + component.idComponent} className="component-list-item-subtitle">
                  {component.layer}
                </div>
                <div key={"component-list-item-desc" + component.idComponent} className="component-list-item-desc">{component.platform}</div>
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </button>
          ))}
        </ol>
      </div>
      <div
        className={"relationship " + (props.showRelationship ? "show" : "show")}
      >
        <div className="h5">Relationship</div>
        <div className="relationship-content">
          <div className="col relationship-to-content">
            <div>to</div>
            <div>
              <div>to</div>
              <div>to</div>
            </div>
          </div>
          <div className="col relationship-from-content ">
            <div>from</div>
            {/* <div>
              {props.relationshipsFrom.map((from) => (
                <div>
                  <div className="component-list-item-title">{from.from}</div>
                  <div className="component-list-item-desc">
                    {from.component}.{from.layer}.{from.platform}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
