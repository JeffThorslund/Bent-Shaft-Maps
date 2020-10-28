import React from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import {
  submitRiverFormValues,
  submitSectionFormValues,
} from "../../../redux/actions/startupAction";

const handleSubmit = (e, dispatchedAction) => {
  dispatchedAction();
  e.preventDefault();
};

//River Form Structure

const RiverForm = reduxForm({
  form: "river",
  keepDirtyOnReinitialize: true,
})((props) => (
  <form onSubmit={(e) => handleSubmit(e, props.dispatchedAction)}>
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
  <form onSubmit={(e) => handleSubmit(e, props.dispatchedAction)}>
    <div>
      <label htmlFor="name">Name Section</label>
      <Field name="name" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="location">Location</label>
      <Field name="location" component="input" type="text" />
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
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  if (riverIndex === null) {
    return null;
  }

  if (sectionIndex === null) {
    return (
      <RiverForm
        initialValues={{ name: rivers[riverIndex].name }}
        dispatchedAction={() =>
          dispatch(submitRiverFormValues(state.form, riverIndex))
        }
      />
    );
  }

  if (rapidIndex === null) {
    return (
      <SectionForm
        initialValues={{ name: rivers[riverIndex].sections[sectionIndex].name }}
        dispatchedAction={() =>
          dispatch(
            submitSectionFormValues(state.form, riverIndex, sectionIndex)
          )
        }
      />
    );
  } else {
    return null;
  }
};

export default FormLayouts;
