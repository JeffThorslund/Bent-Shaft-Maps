import React, { useContext } from "react";
import UserContext from "../UserContext";
import Navigation from "../Navigation";
import Container from "react-bootstrap/Container";
import { Formik, Form } from "formik";
import { config } from "../../../config";
import CreateAndEditFields from "./CreateAndEditFields";

/**
 * User Home Page
 */

const Dashboard = ({ rivers }) => {
  const { userData } = useContext(UserContext);
  let user = userData.user;

  return user ? (
    <div className="vh-100 dashboard">
      <Navigation user={user} />
      <Container>
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
                  subtitle="A river is an entire flowing channel of water. It is NOT the same as a section of whitewater. Make sure not create a new river that already exists."
                >
                  {(props) => (
                    <CreateAndEditFields {...props} nextTopic="rapids">
                      {(props) => (
                        <CreateAndEditFields {...props}>
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
