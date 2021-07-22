import React from "react";
import { withFormik, FieldArray, Field } from "formik";
import { MyDynamicForm } from "./resources.component/resources.component";

const Form = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    resourceType,
    layers,
    platforms,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="hidden"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.idComponent}
        name="id"
      />
      {errors.idComponent && touched.idComponent && (
        <div id="feedback">{errors.idComponent}</div>
      )}

      <div className="row p-3">
        <div className="form-floating mb-3 col-sm-12 col-md-4">
          <input
            type="text"
            id="component"
            value={values.component}
            name="component"
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
          />
          <label htmlFor="component" className="form-label">
            Component
          </label>
          {errors.component && touched.component && (
            <div className="input-feedback" id="feedback">{errors.component}</div>
          )}
        </div>

        <div className="form-floating mb-3 col-sm-12 col-md-4">
          <select
            id="idLayer"
            name="idLayer"
            value={values.idLayer}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-select"
          >
            <option value="" label="Select a Layer" />
            {props.layers.map((layer) => (
              <option key={layer.idLayer} value={layer.idLayer}>
                {layer.layer}
              </option>
            ))}
          </select>
          <label htmlFor="idLayer" className="form-label">
            Layer
          </label>

          {errors.idLayer && touched.idLayer && (
            <div className="input-feedback" id="feedback">
              {errors.idLayer}
            </div>
          )}
        </div>

        <div className="form-floating mb-3 col-sm-12 col-md-4">
          <select
            id="idPlatform"
            name="idPlatform"
            value={values.idPlatform}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-select"
          >
            <option value="" label="Select a Platform" />
            {props.platforms.map((platform) => (
              <option key={platform.idPlatform} value={platform.idPlatform}>
                {platform.platform}
              </option>
            ))}
          </select>
          <label htmlFor="idPlatform" className="form-label">
            Platform
          </label>

          {errors.idPlatform && touched.idPlatform && (
            <div className="input-feedback" id="feedback">
              {errors.idPlatform}
            </div>
          )}
        </div>
      </div>
      <FieldArray
        name="resources"
        component={MyDynamicForm}
        resourceType={resourceType}
      />

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      
    </form>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: ({ values }) => {
    return {
      idComponent: values ? values.idComponent : "",
      component: values ? values.component : "",
      idLayer: values ? values.idLayer : "",
      idPlatform: values ? values.idPlatform : "",
      resources: values ? values.resources : [{ resource: "" }],
    };
  },
  // Custom sync validation
  validate: (values) => {
    const errors = {};

    if (!values.component) {
      errors.component = "Required";
    }

    if (!values.idLayer) {
      errors.idLayer = "Required";
    }

    if (!values.idPlatform) {
      errors.idPlatform = "Required";
    }

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      if (props.isAddMode) {
        props.handleAdd({
          component: values.component,
          idComponent: values.idComponent,
          idLayer: values.idLayer,
          idPlatform: values.idPlatform,
        });
      } else {
        props.handleUpdate({
          component: values.component,
          idComponent: values.idComponent,
          idLayer: values.idLayer,
          idPlatform: values.idPlatform,
        });
      }
      setSubmitting(false);
    }, 1000);
  },
  displayName: "Component",
  enableReinitialize: true,
})(Form);

export default MyEnhancedForm;
