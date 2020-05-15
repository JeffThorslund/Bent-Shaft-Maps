/*eslint-disable*/

import React from "react";
import "./BuildPDF.css";
import * as jsPDF from "jspdf";

import PropTypes from "prop-types";

const BuildPDF = (props) => {
  const handleClick = () => {
    let doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4", //210 x 297
      putOnlyUsedFonts: true,
      floatPrecision: 16, // or "smart", default is 16
    });

    doc //Header
      .setFontSize(24) //Document Title
      .text(105, 20, `Jeff Ottawa River Guide`, {
        align: "center",
      })
      .setFontSize(16) //Display Current Level
      .text(20, 30, `Current Level: ${props.level}"`),
      {
        align: "center",
      };

    for (let rapid of props.data) {
      //Rapid Title
      doc
        .setFontSize(16) //Rapid Name
        .text(105, 30, rapid.name, {
          align: "center",
        })
        .setFontSize(12) //Rapid Desc
        .text(105, 40, rapid.desc, {
          align: "center",
        });

      const margin = 20;
      const pageWidth = 210;

      for (let i = 0, top = 50; i < rapid.hydraulics.length; i++) {
        //Name and desc of included hydrauliucs
        if (
          props.level <= rapid.hydraulics[i].range[1] &&
          props.level >= rapid.hydraulics[i].range[0]
        ) {
          //prints rapid name
          doc
            .setFont("helvetica", "bold")
            .text(20, top, rapid.hydraulics[i].name, {
              maxWidth: `${pageWidth - 2 * margin}`,
            });

          //space after name
          top += 10;

          console.log(doc.getFontList());

          //prints rapid desc
          doc
            .setFont("helvetica", "normal")
            .text(20, top, rapid.hydraulics[i].desc, {
              maxWidth: `${pageWidth - 2 * margin}`,
            });

          //space after desc
          top =
            top +
            10 +
            Math.ceil(
              doc.getTextDimensions(rapid.hydraulics[i].desc).w /
                (pageWidth - 2 * margin)
            ) *
              doc.getTextDimensions(rapid.hydraulics[i].desc).h;
        }
      }

      doc.addPage();
      doc.text(20, 20, "Do you like that?");
    }

    doc.save(`Jeffs Ottawa River Guide`);
  };
  return (
    <div className="button" onClick={handleClick}>
      Export to PDF
    </div>
  );
};

export default BuildPDF;

BuildPDF.propTypes = {
  data: PropTypes.array.isRequired,
};
