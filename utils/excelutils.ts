
// Only excel related logic must be present here : 

import xlsx from 'xlsx'

export class Excelutils {

   static getExcelData(filepath:string , sheetname:string){

try {
    // Readfile method that is present inside the excel
    // readfile is used to read the data from file and return the value in workbook formet
    // workbook formet is nothing but having sheetname and value
    const wb = xlsx.readFile(filepath)
    const sheet = wb.Sheets[sheetname]
    // convert the sheet to json
   const data =  xlsx.utils.sheet_to_json(sheet)
    return data

} catch(error){
    console.log(error);
}
}
}