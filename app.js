let fs = require('fs');
let PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./FR_May2018f.json", JSON.stringify(pdfData,null,'\t'));
});

pdfParser.loadPDF("./FR_May2018f.pdf");
