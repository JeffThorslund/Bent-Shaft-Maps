import React from "react";
import { Field, reduxForm } from "redux-form";

//River Form Structure

const RiverForm = reduxForm({
  form: "river",
  keepDirtyOnReinitialize: true
})((props) => (
  <form>
    <div>
      <label htmlFor="name">Name </label>
      <Field name="name" component="input" type="text" />
    </div>
    <button type="submit">Submit</button>
  </form>
));

//Section Form Structure

const SectionForm = reduxForm({
  form: "section",
})((props) => (
  <form>
    <div>
      <label htmlFor="name">Name Section</label>
      <Field name="name" component="input" type="text" />
    </div>
    <button type="submit">Submit</button>
  </form>
));

//component that returns the proper form based on redux state.

const FormLayouts = ({
  rivers,
  editingReducer: {
    riverIndex,
    sectionIndex,
    rapidIndex,
    featureType,
    featureIndex,
  },
  initialValues,
}) => {
  if (riverIndex === null) {
    return null;
  }

  if (sectionIndex === null) {
    return <RiverForm initialValues={{ name: rivers[riverIndex].name }} />;
  }

  if (rapidIndex === null) {
    return (
      <SectionForm
        initialValues={{ name: rivers[riverIndex].sections[sectionIndex].name }}
      />
    );
  } else {
    return null;
  }
};

export default FormLayouts;
