import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

const PdfDocument = ({ ingredients }) => {
  return (
    <Document>
      <Page size="A4" style={{ display: "flex", flexDirection: "column", backgroundColor: "white" }} >
        <View style={{display: "flex", flexDirection: "column", backgroundColor: "white", padding: 10, }} >
          <Text style={{ color: "#3388af", fontSize: "42px" }}>
            {"Lista de Ingredientes"}
          </Text>            
          <Text style={{ textAlign: "left", marginTop: "22px" }}>
          {
            ingredients.join('\n •')
          }
          </Text>                 
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
