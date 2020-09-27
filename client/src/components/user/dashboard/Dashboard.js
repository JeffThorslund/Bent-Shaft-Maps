import React, { useContext, useState, useEffect } from "react";
import UserContext from "../UserContext";
import Navigation from "./Navigation";
import CreationNavigation from "./CreationNavigation";
import Container from "react-bootstrap/Container";
//import SplitEdit from "./pages/SplitEdit";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { config } from "../../../config";
import EditRiver from "./pages/EditRiver";
import EditSection from "./pages/EditSection";

/**
 * User Home Page
 */

const Dashboard = ({ rivers }) => {
  const { userData } = useContext(UserContext);
  const fatty = " Hellol";
  let user = userData.user;
  return user ? (
    <div className="vh-100">
      <Navigation user={user} />
      <Container fluid>
        <CreationNavigation />

        <Formik initialValues={[...rivers, { name: "" }]}>
          {({ values }) => {
            return (
              <Form>
                <EditRiver config={config} values={values} path="" />
              </Form>
            );
          }}
        </Formik>
      </Container>
    </div>
  ) : null;
};

export default Dashboard;
