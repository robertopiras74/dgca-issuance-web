import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('calibri-bold.ttf', font);
this.addFont('calibri-bold.ttf', 'calibri', 'bold');
};
jsPDF.API.events.push(['addFonts', callAddFont])