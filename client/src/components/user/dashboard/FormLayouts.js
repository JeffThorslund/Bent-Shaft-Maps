import React from "react";
import { Formik, Field, FieldArray, Form } from "formik";
import {
  submitRiverFormValues,
  submitSectionFormValues,
} from "../../../redux/actions/startupAction";
import { useDispatch, useSelector } from "react-redux";
import { Range } from "./CustomFormComponents";
import DragDrop from "./dragdrop/DragDrop";

const RiverForm = ({ initialValues, dispatchedAction }) => (
  <div>
    <h1>River</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        dispatchedAction(values);
      }}
    >
      <Form>
        <label htmlFor="name">River Name</label>
        <Field id="name" placeholder="Jane" name="name" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

const SectionForm = ({ initialValues, dispatchedAction, rivers }) => (
  <div>
    <h1>Section</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        dispatchedAction(values);
      }}
    >
      <Form>
        <label htmlFor="name">Section Name</label>
        <Field id="name" name="name" placeholder="Jane" />
        <Range name="levelRange" />
        <DragDrop rivers={rivers} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

const FormLayouts = ({
  rivers,
  editingReducer: {
    riverIndex,
    sectionIndex,
    rapidIndex,
    featureType,
    featureIndex,
  },
}) => {
  const dispatch = useDispatch();

  if (riverIndex === null) {
    return null;
  }

  if (sectionIndex === null) {
    return (
      <RiverForm
        initialValues={{
          name: rivers[riverIndex].name,
        }}
        dispatchedAction={(values) =>
          dispatch(submitRiverFormValues(values, riverIndex))
        }
      />
    );
  }

  if (rapidIndex === null) {
    return (
      <SectionForm
        initialValues={{
          name: rivers[riverIndex].sections[sectionIndex].name,
          levelRange: rivers[riverIndex].sections[sectionIndex].levelRange,
        }}
        dispatchedAction={(values) =>
          dispatch(submitSectionFormValues(values, riverIndex, sectionIndex))
        }
        rivers={rivers}
      />
    );
  } else {
    return null;
  }
};

export default FormLayouts;

// import { useDispatch, useSelector } from "react-redux";
// import {
//   submitRiverFormValues,
//   submitSectionFormValues,
// } from "../../../redux/actions/startupAction";
// import { ImageUpload } from "./CustomFormComponents";

// const handleSubmit = (e, dispatchedAction) => {
//   dispatchedAction();
//   e.preventDefault();
// };

// //River Form Structure

// const RiverForm = reduxForm({
//   form: "river",
//   keepDirtyOnReinitialize: true,
// })((props) => (
//   <form onSubmit={(e) => handleSubmit(e, props.dispatchedAction)}>
//     <div>
//       <label htmlFor="name">Name </label>
//       <Field name="name" component="input" type="text" />
//     </div>
//     <button type="submit">Submit</button>
//   </form>
// ));

// //Section Form Structure

// const SectionForm = reduxForm({
//   form: "section",
// })((props) => (
//   <form onSubmit={(e) => handleSubmit(e, props.dispatchedAction)}>
//     <div>
//       <label htmlFor="name">Name Section</label>
//       <Field name="name" component="input" type="text" />
//     </div>
//     <div>
//       <label htmlFor="location">Location</label>
//       <Field name="location" component="input" type="text" />
//     </div>
//     <ImageUpload />
//     <button type="submit">Submit</button>
//   </form>
// ));

// //component that returns the proper form based on redux state.

// const FormLayouts = ({
//   rivers,
//   editingReducer: {
//     riverIndex,
//     sectionIndex,
//     rapidIndex,
//     featureType,
//     featureIndex,
//   },
//   initialValues,
// }) => {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);

//   if (riverIndex === null) {
//     return null;
//   }

//   if (sectionIndex === null) {
//     return (
//       <RiverForm
//         initialValues={{ name: rivers[riverIndex].name }}
//         dispatchedAction={() =>
//           dispatch(submitRiverFormValues(state.form, riverIndex))
//         }
//       />
//     );
//   }

//   if (rapidIndex === null) {
//     return (
//       <SectionForm
//         initialValues={{ name: rivers[riverIndex].sections[sectionIndex].name }}
//         dispatchedAction={() =>
//           dispatch(
//             submitSectionFormValues(state.form, riverIndex, sectionIndex)
//           )
//         }
//       />
//     );
//   } else {
//     return null;
//   }
// };

// export default FormLayouts;
