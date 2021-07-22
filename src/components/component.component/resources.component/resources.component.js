import React from "react";
import { Form, Field } from "formik";
import "./resource.component.css"
export const MyDynamicForm = (
  { move, swap, push, insert, unshift, pop, form, remove }
) => (
  <Form>
    <div>
      <button
        type="button"
        className="btn btn-secondary m-3  "
        onClick={() => insert(0, { resource: "" })}
      >
        Add resource
      </button>

      { !(form && form.values && form.values.resources) ? "" : form.values.resources.map((resource, index) => (
        <div key={index} className="row p-3 m-3  component-resource">
          <div className="form-floating mb-3 col-sm-12 col-md-4">
            <Field
              name={`resources.${index}.resource`}
              type="text"
              className="form-control"
            />
            <label
              htmlFor={`resources.${index}.resource`}
              className="form-label"
            >
              Resource
            </label>

            {form.errors.resources &&
              form.errors.resources[index] &&
              form.errors.resources[index].resource &&
              form.touched.resources &&
              form.touched.resources[index].resource && (
                <div className="field-error">
                  {form.errors.resources[index].resource}
                </div>
              )}
          </div>

          <div className="form-floating mb-3 col-sm-12 col-md-4">
            <Field
              name={`resources.${index}.resourceType`}
              as="select"
              className="form-select"
            >
              <option value="" label="Select a type" />
              <option value="get">get</option>
              <option value="post">post</option>
              <option value="put">put</option>
              <option value="delete">delete</option>
            </Field>
            <label
              htmlFor={`resources.${index}.resourceType`}
              className="form-label"
            >
              Type
            </label>

            {form.errors.resources &&
              form.errors.resources[index] &&
              form.errors.resources[index].resourceType &&
              form.touched.resources &&
              form.touched.resources[index].resourceType && (
                <div className="field-error">
                  {form.errors.resources[index].resourceType}
                </div>
              )}
          </div>

          <div className="col-sm-12 col-md-4 align-self-center">
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  </Form>
);
