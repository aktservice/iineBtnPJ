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
  const pram1: string = e.parameter.paramname1;
  const pram2: string = e.parameter.paramname2;
  const htmlstring = `<p>テスト</p>`;
  const outPut = HtmlService.createHtmlOutput(htmlstring);

  /*
  const htmlTemp = HtmlService.createTemplateFromFile("index");
  htmlTemp.paramname1 = pram1;
  const outPut = htmlTemp.evaluate();
  outPut.setTitle("titlename");
  */
  /* insert favicon */
  //use Google drive asset
  //faviconurl = "https://drive.google.com/file/d//uc?id=yourImageDataId*****id****id&.png"
  /* outPut.setFaviconUrl("faviconurl"); */
  // add viewport for mobile
  //outPut.addMetaTag("viewport", "width=device-width, initial-scale=1.0");
  // return after evaluate
  return outPut;
}

/**
 * @see https://qiita.com/kyamadahoge/items/5c916d57f2dce3693c26
 * @description html側からHTMLファイルをincludeする関数 こちらをHTML側から実行する
 * @use htmlFile add <?!=include("fileName") ?>
 * @author yoshitaka <sato-yoshitaka@aktio.co.jp>
 * @date 2024-05-03
 * @param {*} filename
 * @param {*} params
 * @returns
 */
function include(filename: string, params: string) {
  const template = HtmlService.createTemplateFromFile(filename);
  if (params) {
    for (const key in params) {
      template[key] = params[key];
    }
  }
  return template.evaluate().getContent();
}
