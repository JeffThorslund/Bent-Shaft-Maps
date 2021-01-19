import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Range, Dragger } from './CustomFormComponents';

const FormLayouts = ({
  rivers,
  indexes: { riverIndex, sectionIndex, rapidIndex, featureType, featureIndex },
  submissionActions: { submitRiverFormValues, submitSectionFormValues },
}) => {
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
          submitRiverFormValues({ values, riverIndex })
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
          submitSectionFormValues({ values, riverIndex, sectionIndex })
        }
        rivers={rivers}
      />
    );
  }
  return null;
};

export default FormLayouts;

const RiverForm = ({ initialValues, dispatchedAction }) => (
  <div>
    <h1>River</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
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
      onSubmit={(values) => {
        dispatchedAction(values);
      }}
    >
      <Form>
        <label htmlFor="name">Section Name</label>
        <Field id="name" name="name" placeholder="Jane" />
        <Range name="levelRange" />
        <Dragger />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);
