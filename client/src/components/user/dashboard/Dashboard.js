import React, { useContext, useState, useEffect } from "react";
import UserContext from "../UserContext";
import Navigation from "./Navigation";
import CreationNavigation from "./CreationNavigation";
import Container from "react-bootstrap/Container";
import EditRiver from "./pages/EditRiver";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { config } from "../../../config";

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
        <div>
          <Formik
            initialValues={rivers}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <EditRiver config={config} rivers={rivers} />
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  ) : null;
};

export default Dashboard;
