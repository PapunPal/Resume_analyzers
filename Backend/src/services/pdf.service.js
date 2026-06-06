import fs from "fs";
import { PDFParse } from 'pdf-parse';

const extractTextFromPDF = async (filePath) => {

    const parser = new PDFParse({ url: filePath });

	const result = await parser.getText();
	// console.log(result.text);
    

    return result.text;
};

export default extractTextFromPDF;