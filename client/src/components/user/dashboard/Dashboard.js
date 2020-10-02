import React, { useContext, useState, useEffect } from "react";
import UserContext from "../UserContext";
import Navigation from "../Navigation";
import CreationNavigation from "./CreationNavigation";
import Container from "react-bootstrap/Container";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { config } from "../../../config";
import CreateAndEditFields from "./CreateAndEditFields";

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
                  nextTopic="sections"
                >
                  {(props) => (
                    <CreateAndEditFields
                      {...props}
                      nextTopic="rapids"
                    >
                      {(props) => (
                        <CreateAndEditFields
                          {...props}
                        >
                          {() => "Hello"}
                        </CreateAndEditFields>
                      )}
                    </CreateAndEditFields>
                  )}
                </CreateAndEditFields>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </div>
  ) : null;
};

export default Dashboard;
