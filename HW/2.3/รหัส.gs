function doGet(e)
{
  return HtmlService.createHtmlOutputFromFile("index");
}

function getCode(code)
{
  var url = "https://docs.google.com/spreadsheets/d/18wGz0asYtWS6QkEtbv1I-0WM-uZW89S_Tl_aoPRBjic/edit?gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("ชีต1");
  var data = ws.getRange(1, 1, ws.getLastRow(), 5).getValues();
  var stdCodesList = data.map(function(r) {
    return r[1];
  });
  var stdList = data.map(function(r) {
    return r[3];
  });
  var position = stdCodesList.indexOf(code);
  if(position > -1)
  {
    return stdList[position];
  }
  else
  {
    return 'ไม่พบข้อมูลนักเรียน';
  }
}