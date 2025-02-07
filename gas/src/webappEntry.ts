/**
 * @description webapp Template entrypoint
 * @author yoshitaka <sato-yoshitaka@aktio.co.jp>
 * @date 2024-05-03
 * @param {GoogleAppsScript.Events.DoGet} e
 * @returns
 */
function doGet(e: GoogleAppsScript.Events.DoGet) {
  // entry point
  // e.parameter.paramName query param get
  //https://script.google.com/script/**********/exec?pramname1=pram1&pramname2=pram2****pramnameN=pramN
  const pram1: string = e.parameter.status; //status
  const pram2: string = e.parameter.row; //row
  let setpram1 = "ok";
  let setpram2 = 1;
  if (pram1 == "ok" || pram1 == "ng") {
    setpram1 = pram1;
  }

  if (pram2) {
    setpram2 = parseInt(pram2);
  }
  const outPut = HtmlService.createHtmlOutputFromFile(setpram1);
  setData(setpram1, setpram2);
  return outPut;
}

/**
 * @description シートのA列にハートを入力する関数
 * @author yoshitaka <sato-yoshitaka@aktio.co.jp>
 * @date 07/02/2025
 * @param {*} status
 * @param {*} typeRow
 */
function setData(status, typeRow) {
  const sp = SpreadsheetApp.getActiveSpreadsheet();
  const sh = sp.getSheetByName("シート1");
  let setStatus = "💕";
  if (status == "ng") {
    setStatus = "💔";
  }
  const rng = sh.getRange(typeRow, 1);
  const val = rng.getValue() + setStatus;
  rng.setValue(val);
}
