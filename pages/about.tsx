import React from "react";

export interface AboutProps {
  fullName: String;
  firstName: Number;
}

const About = (props: AboutProps) => {
  console.log(">>> ", props);
  return <div>OK</div>;
};

export default About;
