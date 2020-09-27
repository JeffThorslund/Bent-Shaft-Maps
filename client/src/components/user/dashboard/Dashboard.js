import React, { useContext, useState, useEffect } from "react";
import UserContext from "../UserContext";
import Navigation from "./Navigation";
import CreationNavigation from "./CreationNavigation";
import Container from "react-bootstrap/Container";
//import SplitEdit from "./pages/SplitEdit";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { config } from "../../../config";
import EditRiver from "./pages/EditRiver";

/**
 * User Home Page
 */

const Dashboard = ({ rivers }) => {
  const { userData } = useContext(UserContext);
  const [step, setStep] = useState(0);

  const [trace, setTrace] = useState({
    riverIndex: null,
    sectionIndex: null,
    rapidIndex: null,
    featureType: null,
    featureIndex: null,
  });

  let user = userData.user;

  return user ? (
    <div className="vh-100">
      <Navigation user={user} />
      <Container fluid>
        <CreationNavigation setStep={setStep} />
        <div>
          <Formik
            initialValues={[...rivers, {}]}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, values }) => {
              return (
                <Form>
                  {
                    [
                      <EditRiver
                        config={config}
                        values={values}
                        setStep={setStep}
                        trace={trace}
                        setTrace={setTrace}
                      />,
                    ][step]
                  }
                </Form>
              );
            }}
          </Formik>
        </div>
      </Container>
    </div>
  ) : null;
};

export default Dashboard;
