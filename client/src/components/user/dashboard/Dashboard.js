import React, { useContext, useState, useEffect } from "react";
import UserContext from "../UserContext";
import Navigation from "./Navigation";
import CreationNavigation from "./CreationNavigation";
import Container from "react-bootstrap/Container";
//import SplitEdit from "./pages/SplitEdit";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { config } from "../../../config";
import CreateAndEditFields from "./components/CreateAndEditFields";

/**
 * User Home Page
 */

const Dashboard = ({ rivers }) => {
  const { userData } = useContext(UserContext);
  let user = userData.user;

  return user ? (
    <div className="vh-100">
      <Navigation user={user} />
      <Container fluid>
        <CreationNavigation />

        <Formik
          initialValues={{
            rivers: rivers,
          }}
        >
          {({ values, setFieldValue }) => {
            return (
              <Form>
                <CreateAndEditFields
                  config={{ rivers: [config] }}
                  setFieldValue={setFieldValue}
                  values={values}
                  topic="rivers"
                  prevPath=""
                >
                  {({ config, values, prevPath }) => (
                    <CreateAndEditFields
                      config={config}
                      values={values}
                      topic="sections"
                      prevPath={prevPath}
                    >
                      {({ config, values, prevPath }) => (
                        <CreateAndEditFields
                          config={config}
                          values={values}
                          topic="rapids"
                          prevPath={prevPath}
                        >
                          {() => "Hello"}
                        </CreateAndEditFields>
                      )}
                    </CreateAndEditFields>
                  )}
                </CreateAndEditFields>
                {/* <EditRiver config={config} values={values} path="" /> */}
              </Form>
            );
          }}
        </Formik>
      </Container>
    </div>
  ) : null;
};

export default Dashboard;
