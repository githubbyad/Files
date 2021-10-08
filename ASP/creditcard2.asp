<%@ Language=VBScript %>
<!--#include file="connect_string.asp"-->
<!--#include file="generalsubs2.asp"-->

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0//EN">
<HTML>
<HEAD>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://www.google.com/recaptcha/api.js?render=6LdXmfgUAAAAAJNuEHBxVCY0w9eA73hvaWsdgPlM"></script>

<script>
  grecaptcha.ready(function() {
      grecaptcha.execute('6LdXmfgUAAAAAJNuEHBxVCY0w9eA73hvaWsdgPlM', {action: 'homepage'}).then(function(token) {
         document.getElementById("token").value = token;
      });
  });
  setInterval(function(){
  grecaptcha.ready(function() {
      grecaptcha.execute('6LdXmfgUAAAAAJNuEHBxVCY0w9eA73hvaWsdgPlM', {action: 'homepage'}).then(function(token) {
         document.getElementById("token").value = token;
      });
  });
  },120000);
</script>


<META http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<LINK type="text/css" rel="stylesheet" href="/secureform.css">
<style><!--A{text-decoration:none}--></style>

<script type="text/javascript" language="javascript" src="/bl.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="/iframe-resizer-master/js/iframeResizer.contentWindow.js"></script>
<link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

<style>
.grecaptcha-badge {visibility: hidden;}
.form-check-label:hover {color: #0d6efd;cursor: pointer;}
.cus-form-loader .cus-form-loading {display: block !important;}
.cus-form-loader fieldset, .cus-form-loader .system_text.footer_text {opacity: 0.5;pointer-events: none;}
#cus-form-button-loader {display:none;}
.cus-form-loader footer, .cus-form-loader button {cursor: no-drop;}
.fast-spin {-webkit-animation: fa-spin 1s infinite linear;animation: fa-spin 1s infinite linear;}
.cus-form-loader #SUBMIT1 {display:none;}
.cus-form-loader #cus-form-button-loader {display:inline-block;}
.form-floating > .form-control:focus ~ label {color: #198754 !important;}
.form-control:not(:disabled):not([readonly])::file-selector-button {position: absolute;right: 0;border-radius: 5px !important;}
.input-file-preview {display: none;}
.input-file-preview img {max-width: 30%;max-height: 200px;border: 1px solid #ced4da;border-radius: 5px;padding: 5px;box-sizing: border-box;cursor: zoom-in;}
.w-96 {width: 96% !important;}
.p-valid {color: green;}
.p-valid:before {position: relative;left: -10px;content: "✔";}
.p-invalid {color: red;}
.p-invalid:before {position: relative;left: -10px;content: "✖";font-size: 0.875rem !important;}
.open-eye, .close-eye {position: absolute;right: 2%;top: 50%;transform: translate(0,-50%);cursor: pointer;}
.open-eye i:hover, .close-eye i:hover {color: gray !important;}
.cus-form-help:before {content: "\f05a";font-family: FontAwesome;padding-left: 0.5rem;padding-right: 0.5rem;}
.cus-form-help {display: none;}
.cus-form-help:empty {display: none !important;}
.form-control:focus ~ .cus-form-help {display: block;}
.form-floating > .form-control {caret-color: #198754;}
.form-control:focus {border-color: #60ac88;;box-shadow: 0 0 0 .25rem rgba(25,135,84,.25);}
</style>
<script>
function ChangeInputFocus(obj, evt, cname) {
/*if (evt.type == "focus")
obj.className = cname;
else if (evt.type == "blur")
/*obj.className = cname;*/
}
</script>
</HEAD>

<BODY class="formbody">

<%




' if Request.ServerVariables("REMOTE_ADDR") = "172.69.69.52" then
'  response.write "<center><br><br>We are in the processing of upgrading our system.<br><br>Please try after 3 hours.<br><br>Thank you.</center>"
'  response.end
' end if


 dim LogoLocation 
 dim CustomerID
 dim Company
 dim TransactionID
 dim TransactionErrorMsg

 LogoLocation = "<span style=""font-family:arial""><h1>{ bulletlink.com }</h1></span>"



 'dim WebsiteID
 'WebsiteID = Request.QueryString("id")

 'GetLoginVars Request.QueryString("site"), Lid, HostCompany, MyDomain, MyDomainX, WebsiteID, UserID, StaffName, AccessLevel, HPE, AppServer, IPs, Respsibility, StartingFile, InvoiceID, SMBGTheme

 SQLinj "creditcardform", LCase(Request.QueryString()), "creditcardform.asp"

 dim WebsiteIDbulletlink
 WebsiteIDbulletlink = "1010"

' Session("MyConnectStr") = "Provider=SQLOLEDB; Data Source=198.154.99.70,1086; Initial Catalog=AppData2; User ID=Bullet; Password=N3wSl@t3!"

' if len(WebsiteID) > 0 then
'  Set CM = Server.CreateObject("Persits.CryptoManager")
 '''Set Context = CM.OpenContext("mycontainer", True )
'  Set Context = CM.OpenContext("", True )
'  Set Key = Context.GenerateKeyFromPassword("")
'  Set Blob = CM.CreateBlob
'  Blob.Hex = WebsiteID
'  WebsiteID = Key.DecryptText(Blob)	
'  Set CM = Nothing
' end if

 if Session("GatewayMessage") <> "OK" then
  Session("GatewayMessage") = ""
 end if

 Set rs = Server.CreateObject("ADODB.Connection")
 rs.Open Session("MyConnectStr")

'**********************************************************************************************

 Sub GetCustomerInfo (WebsiteID, Amount, Company, Website)

  Amount = 0

  if Request.QueryString("uid") <> "" then
   strSQL = "select C.CUSTOMER_ID, C.BALANCE, C.COMPANY, W.WEBSITE, W.WEBSITE_ID  from ar_invoices i WITH (nolock), ar_customers c WITH (nolock), sys_websites w WITH (nolock) where w.website_id = i.website_id and i.website_id = c.website_id and c.customer_id = i.customer_id and i.website_id = " + WebsiteIDbulletlink + " and i.unique_invoice_id = '" + Request.QueryString("uid") + "'"
  else
   strSQL = "SELECT C.CUSTOMER_ID, C.BALANCE, C.COMPANY, W.WEBSITE, W.WEBSITE_ID FROM [AppData2].[dbo].[AR_CUSTOMERS] C WITH (nolock), [AppData2].[dbo].[SYS_WEBSITES] W WITH (nolock) WHERE C.WEBSITE_ID = " + WebsiteIDbulletlink + " AND C.CUSTOMER_ID = W.CUSTOMER_ID and W.WEBSITE_ID = " + WebsiteID + " AND PAYMENT_METHOD in ('CreditCardManual','CreditCardAuto') ORDER BY C.ACTIVE DESC"
  end if

'response.write strSQL + "*<br>"
'response.write Request.QueryString("uid") + "*<br>"
'response.write cstr(0/0)

  CustomerID = 0
  Set rsResults = rs.Execute(strSQL, , 1)
  if not rsResults.eof then
  CustomerID = rsResults("CUSTOMER_ID")
  Company = rsResults("COMPANY")
  Website = rsResults("WEBSITE") 
  WebsiteID = rsResults("WEBSITE_ID") 
  Amount = rsResults("BALANCE") 
  end if
  rsResults.close

  if CustomerID = 0 then
  Session("ErrorCode") = "0"
  Session("MessageCode") = "Error: Missing Company. Please contact sales@bulletlink.com and report this error. Thank you." 
  Response.Redirect("error.asp?npage=" + Request.ServerVariables("HTTP_REFERER") )
  end if

  ' strSQL = "SELECT LOGO_LOCATION FROM [AppData2].[dbo].[SYS_OPTIONS_SYSTEMS] WITH (nolock) WHERE WEBSITE_ID = " + WebsiteIDbulletlink
  ' Set rsResults = rs.Execute(strSQL, , 1)
  ' LogoLocation = rsResults("LOGO_LOCATION")
  ' LogoLocation = "<IMG width=250 SRC=https://bulletlink.com/" + LogoLocation + ">"

  ' LogoLocation = "<span style=""font-family:arial""><h1>{ bulletlink.com }</h1></span>"

 End Sub

'***************************************************************************************************************************

Sub ProcessCreditCard

if Session("GatewayMessage") = "" then

  Response.Write "<center><FORM id=""CustomForm"" class=""custom-form p-3 p-lg-5 mx-2 mx-lg-0 border border-success rounded col-lg-5 my-4 bg-body"" METHOD=post ACTION=" + AppServer + "/creditcardform.asp?uid=" + Request.QueryString("uid") + "&site=" + Request.QueryString("site") + " name=form onSubmit=""return Vailidate(this)"">"

  Response.Write "<center>" + LogoLocation + "</center>"
  Response.Write "<center class=""fw-bold my-3 fs-5 text-success"">Payment Due $" + CStr(Amount) + "</center>"

  Response.Write "<fieldset>"

  Response.Write "<center class=""text-danger fs-3 fw-bold"">" + TransactionErrorMsg + "</center>"

  Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""card_number"" VALUE=""" + Request.Form("card_number") + """ id=""card_number"" maxlength=""50"" placeholder=""Card Number"" type=""text"" class=""formfieldinput formfieldinput_custom form-control"" required><label for=""card_number"" class=""form-label"" style=""display:none;color: #004500;"">Card Number</label><div></section>"

  if Request.Form("expiration_month") = "" then
    Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""select w-100 form-floatingx""><select id=""expiration_month"" name=""expiration_month"" required class=""form-select"" required><option value="""" selected="""">-- Select Expiration Month --</option><option required="" value=""01"">01</option><option required="" value=""02"">02</option><option required="" value=""03"">03</option><option required="" value=""04"">04</option><option required="" value=""05"">05</option><option required="" value=""06"">06</option><option required="" value=""07"">07</option><option required="" value=""08"">08</option><option required="" value=""09"">09</option><option required="" value=""10"">10</option><option required="" value=""11"">11</option><option required="" value=""12"">12</option></select><label for=""expiration_month"" class=""form-label"" style=""display:none;color: #004500;"">Expiration Month</label></div></section>"
  else
    Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""expiration_month"" VALUE=" + Request.Form("expiration_month") + " id=""expiration_month"" maxlength=""50"" placeholder=""Expiration Month"" type=""number"" class=""formfieldinput formfieldinput_custom form-control"" required><label for=""expiration_month"" class=""form-label"" style=""display:none;color: #004500;"">Expiration Month</label><div></section>"
  end if 

  if Request.Form("expiration_year") = "" then
    Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""select w-100 form-floatingx""><select id=""expiration_year"" name=""expiration_year"" required class=""form-select"" required><option value="""" selected="""">-- Select Expiration Year --</option><option required="""" value=""2021"">2021</option><option required="""" value=""2022"">2022</option><option required="""" value=""2023"">2023</option><option required="""" value=""2024"">2024</option><option required="""" value=""2025"">2025</option><option required="""" value=""2026"">2026</option><option required="""" value=""2027"">2027</option><option required="""" value=""2028"">2028</option><option required="""" value=""2029"">2029</option><option required="""" value=""2030"">2030</option><option required="""" value=""2031"">2031</option><option required="""" value=""2032"">2032</option><option required="""" value=""2033"">2033</option><option required="""" value=""2034"">2034</option><option required="""" value=""2035"">2035</option><option required="""" value=""2036"">2036</option><option required="""" value=""2037"">2037</option><option required="""" value=""2038"">2038</option><option required="""" value=""2039"">2039</option><option required="""" value=""2040"">2040</option><option required="""" value=""2041"">2041</option><option required="""" value=""2042"">2042</option><option required="""" value=""2043"">2043</option><option required="""" value=""2044"">2044</option><option required="""" value=""2045"">2045</option><option required="""" value=""2046"">2046</option></select><label for=""expiration_year"" class=""form-label"" style=""display:none;color: #004500;"">Expiration Year</label></div></section>"
  else
    Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""expiration_year"" VALUE=" + Request.Form("expiration_year") + " id=""expiration_year""  maxlength=""50"" placeholder=""Expiration Year"" type=""number"" class=""formfieldinput formfieldinput_custom form-control"" required><label for=""expiration_year"" class=""form-label"" style=""display:none;color: #004500;"">Expiration Year</label><div></section>"
  end if 

  Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""cvv"" VALUE=""" + Request.Form("cvv") + """ id=""cvv"" maxlength=""50"" placeholder=""CVV"" type=""number"" class=""formfieldinput formfieldinput_custom form-control"" required><label for=""cvv"" class=""form-label"" style=""display:none;color: #004500;"">CVV</label><div></section>"

  Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""total_amount"" VALUE=""" + CStr(Amount) + """ id=""total_amount"" maxlength=""50"" placeholder=""Amount"" type=""text"" class=""formfieldinput formfieldinput_custom form-control"" DISABLED><label for=""total_amount"" class=""form-label"" style=""display:none;color: #004500;"">Amount</label><div></section>"

  Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""first_name"" VALUE=""" + Request.Form("first_name") + """ id=""first_name"" maxlength=""50"" placeholder=""First Name"" type=""text"" class=""formfieldinput formfieldinput_custom form-control"" required><label for=""first_name"" class=""form-label"" style=""display:none;color: #004500;"">First Name</label><div></section>"

  Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""last_name"" VALUE=""" + Request.Form("last_name") + """ id=""last_name"" maxlength=""50"" placeholder=""Last Name"" type=""text"" class=""formfieldinput formfieldinput_custom form-control"" required><label for=""last_name"" class=""form-label"" style=""display:none;color: #004500;"">Last Name</label><div></section>"

  Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""company"" VALUE=""" + company + """ id=""company"" maxlength=""50"" placeholder=""Company"" type=""text"" class=""formfieldinput formfieldinput_custom form-control"" required DISABLED><label for=""company"" class=""form-label"" style=""display:none;color: #004500;"">Company</label><div></section>"

  Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""address"" VALUE=""" + Request.Form("address") + """ id=""address"" maxlength=""50"" placeholder=""Address"" type=""text"" class=""formfieldinput formfieldinput_custom form-control"" required><label for=""address"" class=""form-label"" style=""display:none;color: #004500;"">Address</label><div></section>"

  Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""city"" VALUE=""" + Request.Form("city") + """ id=""city"" maxlength=""50"" placeholder=""City"" type=""text"" class=""formfieldinput formfieldinput_custom form-control"" required><label for=""city"" class=""form-label"" style=""display:none;color: #004500;"">City</label><div></section>"

  Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""select w-100 form-floatingx""><select id=""state"" name=""state"" required class=""form-select"" required><OPTION>AK</OPTION><OPTION>AL</OPTION><OPTION>AR</OPTION><OPTION>AZ</OPTION><OPTION>CA</OPTION><OPTION>CO</OPTION><OPTION>CT</OPTION><OPTION>DC</OPTION><OPTION>DE</OPTION><OPTION>FL</OPTION><OPTION>GA</OPTION><OPTION>GU</OPTION><OPTION>HI</OPTION><OPTION>IA</OPTION><OPTION>ID</OPTION><OPTION>IL</OPTION><OPTION>IN</OPTION><OPTION>KS</OPTION><OPTION>KY</OPTION><OPTION>LA</OPTION><OPTION>MA</OPTION><OPTION>MD</OPTION><OPTION>ME</OPTION><OPTION>MI</OPTION><OPTION>MN</OPTION><OPTION>MO</OPTION><OPTION>MS</OPTION><OPTION>MT</OPTION><OPTION SELECTED VALUE=N/A>N/A</OPTION><OPTION>NC</OPTION><OPTION>ND</OPTION><OPTION>NE</OPTION><OPTION>NH</OPTION><OPTION>NJ</OPTION><OPTION>NM</OPTION><OPTION>NV</OPTION><OPTION>NY</OPTION><OPTION>OH</OPTION><OPTION>OK</OPTION><OPTION>OR</OPTION><OPTION>PA</OPTION><OPTION>RI</OPTION><OPTION>SC</OPTION><OPTION>SD</OPTION><OPTION>TN</OPTION><OPTION>TX</OPTION><OPTION>UT</OPTION><OPTION>VA</OPTION><OPTION>VT</OPTION><OPTION>WA</OPTION><OPTION>WI</OPTION><OPTION>WV</OPTION><OPTION>WY</OPTION></select><label for=""state"" class=""form-label"" style=""display:none;color: #004500;"">State</label></div></section>"

  Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""zip_code"" VALUE=""" + Request.Form("zip_code") + """ id=""zip_code"" maxlength=""50"" placeholder=""Zip / Postal Code"" type=""text"" class=""formfieldinput formfieldinput_custom form-control"" required><label for=""zip_code"" class=""form-label"" style=""display:none;color: #004500;"">Zip / Postal Code</label><div></section>"

  Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""phone"" VALUE=""" + Request.Form("phone") + """ id=""phone"" maxlength=""50"" placeholder=""Phone"" type=""text"" class=""formfieldinput formfieldinput_custom form-control"" required><label for=""phone"" class=""form-label"" style=""display:none;color: #004500;"">Phone</label><div></section>"

  Response.Write "<section class=""w-96 mb-3"" style=""margin-left:2%""><div class=""input w-100 form-floatingx""><INPUT NAME=""email"" VALUE=""" + Request.Form("email") + """ id=""email"" maxlength=""50"" placeholder=""Email"" type=""email"" class=""formfieldinput formfieldinput_custom form-control"" required><label for=""email"" class=""form-label"" style=""display:none;color: #004500;"">Email</label><div></section>"

  'Response.Write "<TR><TD><DIV class=""formfieldname"">Security Code</DIV></TD>"
  'Response.Write "<TD align=left><img height=""30"" src=""aspcaptcha.asp"" ></TD></TR>"

  'Response.Write "<TR><TD><DIV class=""formfieldname"">Security Code</DIV></TD>"
  'Response.Write "<TD><INPUT class=""formfieldinput"" SIZE=40 MAXLENGTH=50 id=SecurityCode name=SecurityCode></TD></TR>"

  Response.Write "</fieldset><br><br><button class=""button btn btn-success shadow"" id=""SUBMIT1"" type=""submit"" onclick=""document.getElementById('CustomForm').classList.add('was-validated');""><span class=""py-1 px-3 d-inline-block fs-4"">submit</span></button><i id=""cus-form-button-loader"" class=""fa fa-circle-o-notch fa-spin fast-spin fs-1 text-success""></i><BR><BR></TD></TR>"
  Response.Write "<input type=""hidden"" id=""token"" name=""token"">"
  Response.Write "</FORM></center>"

end if 'if Session("GatewayMessage") = "" then

End Sub ' ProcessCreditCard

'************************************************************************************************************************

Sub AuthorizeCreditCard

  TransactionErrorMsg = ""


  if Request.Form("card_number") <> "" and Session("GatewayMessage") = "" then

   ''''''''''''''''''''''''''''''''''''''''''''
   'Dim recaptcha_secret, sendstring, objXML
   'recaptcha_secret = "6LeYwjwUAAAAAO6zl4K4zYn40ijLiP4PT6QQpVSe"
   'sendstring = "https://www.google.com/recaptcha/api/siteverify?secret=" & recaptcha_secret & "&response=" & Request.form("g-recaptcha-response")
   'Set objXML = Server.CreateObject("MSXML2.ServerXMLHTTP")
   'objXML.Open "GET", sendstring, False
   'objXML.Send

   'if InStr(1, objXML.responseText, """success"": false") > 0 then
   ' Session("GatewayMessage") = ""
   ' Session("GlobalSession") = ""
   ' Session("MessageCode") = "Click on ""I'm not a robot""."
   ' Response.Redirect("error.asp?npage=" + Request.ServerVariables("HTTP_REFERER") )
   'end if
   'Set objXML = Nothing

   'if Request.Form("SecurityCode") = Trim(Session("CAPTCHA_" & Session.SessionID)) then
   '  Session("LanapBotDetectCodeHash") = "OK"
   'else
   ' Session("LanapBotDetectCodeHash") = ""
   ' Session("ErrorCode") = "0"
   ' Session("MessageCode") = "Invalid Security Code."
   ' Response.Redirect("error.asp?npage=" + Request.ServerVariables("HTTP_REFERER") )
   'End If
''''  Session("LanapBotDetectCodeHash") = ""


 VarString = _
          "secret=" & "6LdXmfgUAAAAAES85Fc7NMGevwUetJNnqrsOwH0z" & _
          "&response=" & Request.Form("token")

  Dim objXmlHttp
  Set objXmlHttp = Server.CreateObject("Msxml2.ServerXMLHTTP")
  objXmlHttp.open "POST", "https://www.google.com/recaptcha/api/siteverify", False
  objXmlHttp.setRequestHeader "Content-Type", "application/x-www-form-urlencoded"
  objXmlHttp.send VarString

  Dim ResponseString
  ResponseString = objXmlHttp.responseText
  Set objXmlHttp = Nothing

  CaptchaScore = 0
   
  Pos = InStr(ResponseString, "score"":")
  if Pos > 0 then
   CaptchaScore = mid(ResponseString, Pos+7) 
   Pos = InStr(CaptchaScore, ",")
   CaptchaScore = mid(CaptchaScore, 1, Pos-1) 
   CaptchaScore = LTrim(Rtrim(CaptchaScore))
   CaptchaScore = CCur(CaptchaScore)
  end if

  if CaptchaScore >= 0.3 then
   ' Captchapassed over 0.3 score, allow to access system
   'Session("LanapBotDetectCodeHash") = "OK"
   'RelayEmail "NoReply@bulletlink.com", "sales@bulletlink.com", "", "", "payment form score: " + CStr(CaptchaScore) + ", host: " + Request.ServerVariables("HTTP_HOST"), ResponseString, "", "", ""
  else

   'Session("LanapBotDetectCodeHash") = "OK"
   'RelayEmail "NoReply@bulletlink.com", "sales@bulletlink.com", "", "", "payment form score: " + CStr(CaptchaScore) + ", host: " + Request.ServerVariables("HTTP_HOST"), ResponseString, "", "", ""

  Session("ErrorCode") = "0"
  Session("MessageCode") = "Error: " + CStr(CaptchaScore) + " Timed Out / Avoid Auto Logins"
  Response.Redirect("error.asp?npage=" + Request.ServerVariables("HTTP_REFERER") )
  end if



   ''''''''''''''''''''''''''''''''''''''''''''

   strSQL = "SELECT MERCHANT_TRANSACTION_KEY, MERCHANT_ACCOUNT, MERCHANT_PASSWORD FROM [AppData2].[dbo].[SYS_OPTIONS_SYSTEMS] WITH (nolock) WHERE WEBSITE_ID = " + WebsiteIDbulletlink
   Set rsResults = rs.Execute(strSQL, , 1)
   MerchantAccount = rsResults("MERCHANT_ACCOUNT")
   if IsNull(MerchantAccount) then
    MerchantAccount = ""
   end if
   MerchantPassword = rsResults("MERCHANT_PASSWORD")
   if IsNull(MerchantPassword) then
    MerchantPassword = ""
   end if
   MerchantTransactionKey = rsResults("MERCHANT_TRANSACTION_KEY")
   if IsNull(MerchantTransactionKey) then
    MerchantTransactionKey = ""
   end if
   rsResults.close

   ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    PostString = "mydomain=" + MyDomain + "&login=" + MerchantAccount + "&key=" + MerchantTransactionKey + "&password=" + MerchantPassword + "&first_name=" + Request.Form("first_name") + "&last_name=" + Request.Form("last_name")  + "&address=" + Request.Form("address")  + "&city=" + Request.Form("city")  + "&state=" + Request.Form("state")  + "&zip=" + Request.Form("zip")  + "&country=" + Request.Form("country")  + "&email=" + Request.Form("email")  + "&phone=" + Request.Form("phone")  + "&card_number=" + Request.Form("card_number")  + "&expiration_month=" + Request.Form("expiration_month")  + "&expiration_year=" + Request.Form("expiration_year") + "&cvv=" + Request.Form("cvv") + "&x_amount=" + CStr(amount)

    Set objHTTP = Server.CreateObject("Msxml2.ServerXMLHTTP")
    objHTTP.open "POST", "https://" + Request.ServerVariables("HTTP_HOST") + "/credit_card_authorize.php", False
    objHTTP.setRequestHeader "Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"
    objHTTP.send PostString
    MyResponse = objHTTP.responseText    
    Set objHTTP = Nothing

    ' Response.Write "$$$" + MyResponse + "$$$"
    ' Response.Write cstr(0/0)

    '{{Success}}{{Status:Approved}}{{TransactionID:12345}}
 
    if InStr(1, MyResponse, "{{Success}}") > 0 then

     TransactionStatus = ""
     if InStr(1, MyResponse, "{{Status:") > 0 then
      TransactionStatus = GetSubString (MyResponse, "{{Status:", "}}")
     end if

     TransactionID = ""
     if InStr(1, MyResponse, "{{TransactionID:") > 0 then
     TransactionID = GetSubString (MyResponse, "{{TransactionID:", "}}")
     end if

     Session("GatewayMessage") = "OK"

    else 'TRANSACTION ERROR 

     TransactionErrorCode = ""
     if InStr(1, MyResponse, "{{Error:") > 0 then
      TransactionErrorCode = GetSubString (MyResponse, "{{Error:", "}}")
     end if

     TransactionErrorMsg = ""
     if InStr(1, MyResponse, "{{Error:") > 0 then
      TransactionErrorMsg = GetSubString (MyResponse, "{{ErrorMessage:", "}}")
     end if
     TransactionErrorMsg = "Error (" + TransactionErrorCode + ") " + TransactionErrorMsg

     Session("GatewayMessage") = ""
     Session("LanapBotDetectCodeHash") = "ERROR"
     Session("FormError") = "<center><br>Transaction Error (" + TransactionErrorCode + "): <b>" & TransactionErrorMsg & "</b><BR><BR></center><br>"

    end if ' if InStr(1, MyResponse, "{{Success}}") > 0 then



'     Set ICharge = Server.CreateObject("InPay5.ICharge")

'     'go ahead and authorize:
'      MerchantGateway = "1"
'      ICharge.Gateway =  1
	
'     ICharge.AddSpecialField "x_test_request", "false" ' "true"
'     ICharge.AddSpecialField "x_tran_key", MerchantTransactionKey

'   ' ICharge.GatewayURL = "https://secure.authorize.net/gateway/transact.dll"
'     ICharge.CardExpMonth = Request.Form("Expiration_Month") '02
'     ICharge.CardExpYear = Request.Form("Expiration_Year") ' 2008
'     ICharge.CardNumber = Request.Form("Card_Number") ' "4000200011112222"
'     ICharge.CardCVV2Data = Request.Form("CVV")
'     ICharge.CustomerAddress = Request.Form("Address")
'     ICharge.CustomerCity = Request.Form("City")
'     if Request.Form("country") = "" then    
'      ICharge.CustomerCountry = "US"
'     else
'      ICharge.CustomerCountry = Request.Form("country")
'     end if
'     ICharge.CustomerEmail = Request.Form("Email")
'     ICharge.CustomerFirstName  = Request.Form("First_Name")
'     ICharge.CustomerLastName = Request.Form("Last_Name")
'     ICharge.CustomerPhone = Request.Form("Phone")
'     ICharge.CustomerState = Request.Form("State")
'     ICharge.CustomerZip = Request.Form("Zip")
'     ICharge.InvoiceNumber = InvoiceNumber 
'     ICharge.MerchantLogin  = MerchantAccount '"testing"
'  ''''   ICharge.MerchantPassword = MerchantPassword '""

'     ICharge.TransactionAmount = Amount
'     ICharge.TransactionDesc = x_description
'     ICharge.Timeout = 360

'     ICharge.Config "SSLEnabledProtocols=3072"  ' *** added thsi line on Nov 5, 2017 to enable TLS 1.2 work ****
  
'     ICharge.Sale() ' DO AUTHORIZATION

'     If (Err.Number <> 0) Then  ' Check for Errors
'        ErrorMessage = "<center><font size=2 color=red>Transaction Error (" + CStr(Err.Number) + "): <b>ERROR: " & Err.Description & "</b></font></center>"
'        Session("GatewayMessage") = ""
'     Else
'        If (ICharge.ResponseApproved = True) Then ' Evaluate Response Code
'          TransactionID = ICharge.ResponseTransactionId
'          Session("GatewayMessage") = "OK"
'        Else
'          ErrorMessage = "<center><b><font size=2 color=red>Transaction Declined: " & ICharge.ResponseText & "</b></font></center>"
'          Session("GatewayMessage") = ""
'        End If
'     End If 

'    Set ICharge = Nothing

  end if

End Sub ' AuthorizeCreditCard

'*************************************************************************************************

 GetCustomerInfo WebsiteID, Amount, Company, Website

'response.write cstr(0/0)

 AuthorizeCreditCard ()

 if Amount > 0 then
  ProcessCreditCard ()
 end if

 if Session("GatewayMessage") = "OK" and Amount > 0 then

  strSQL = "select max(invoice_number) as invoice_number from [AppData2].[dbo].[ar_invoices] WITH (nolock) where website_id = " + WebsiteIDbulletlink + " and customer_id = " + CStr(CustomerID)
  Set rsResults = rs.Execute(strSQL, , 1)
  InvoiceNumber = CStr(rsResults("INVOICE_NUMBER"))
  rsResults.close

  strSQL = "SELECT MAX(CREDIT_ID) AS CREDIT_ID FROM [AppData2].[dbo].[AR_CREDITS] WITH (nolock) WHERE WEBSITE_ID = " + WebsiteIDbulletlink 
  Set rsResults = rs.Execute(strSQL, , 1)
  CreditID = rsResults("CREDIT_ID")
  if IsNull(CreditID) then
   CreditID = 1
  else
   CreditID = CreditID + 1
  end if
  rsResults.close

  strSQL = "INSERT INTO [AppData2].[dbo].[AR_CREDITS] (WEBSITE_ID, CREDIT_ID, CUSTOMER_ID, COMPANY, DATE_RECEIVED, CREDIT_METHOD, TRANSACTION_NUMBER, INVOICE_NUMBER, CREDITS) VALUES (" + WebsiteIDbulletlink + "," + CStr(CreditID) + "," + CStr(CustomerID) + ",'" + Replace(Company, "'", "''") + "','" + CStr(Month(Now())) + "/" + CStr(Day(Now())) + "/" + CStr(Year(Now())) + "','Credit Card','" + TransactionID + "','" + InvoiceNumber + "'," + CStr(Amount) +  ")"
  Set rsResults = rs.Execute(strSQL)

  strSQL = "UPDATE [AppData2].[dbo].[AR_CUSTOMERS] SET ACTIVE = 'Yes', BALANCE = BALANCE - " + CStr(Amount) + ", CREDITS = CREDITS + " + CStr(Amount) + ", LAST_UPDATE_DATE = GETDATE() WHERE WEBSITE_ID = " + WebsiteIDbulletlink + " AND CUSTOMER_ID = " + CStr(CustomerID)
  rs.Execute strSQL

  Set rsZ = Server.CreateObject("ADODB.Connection")
  rsZ.Open Session("MyConnectStr")
  Set rsU = Server.CreateObject("ADODB.Connection")
  rsU.Open Session("MyConnectStr")

  strSQLz = "SELECT WEBSITE, WEBSITE_ID FROM [AppData2].[dbo].[SYS_WEBSITES] WITH (nolock) WHERE CUSTOMER_ID = " + CStr(CustomerID)
  Set rsResultsZ = rsZ.Execute(strSQLz, , 1)

  do while not rsResultsZ.eof 

   strSQL = "SELECT active FROM [AppData2].[dbo].[ar_customers_services] WITH (nolock) WHERE WEBSITE_ID = 1010 AND CUSTOMER_ID = " + CStr(CustomerID) + " and description like '%" + rsResultsZ("WEBSITE") + "%'"
   Set rsResults = rs.Execute(strSQL, , 1)
   if not rsResults.eof then
    ClientWebsite = rsResultsZ("WEBSITE")
    strSQLu = "UPDATE [AppData2].[dbo].[SYS_WEBSITES] SET ACTIVE = '" + rsResults("ACTIVE") + "', description = '*** PAYMENT $" + CStr(Amount) + " RECEIVED ON " + CStr(Now()) + "***', ENDING_DATE = NULL, LAST_UPDATE_DATE = GETDATE() WHERE WEBSITE = '" + rsResultsZ("WEBSITE") + "' and CUSTOMER_ID = " + CStr(CustomerID)
    rsU.Execute strSQLu

'''    SyncSqliteBulletlinkSystemRecord CStr(rsResults("WEBSITE_ID"))

   end if
   rsResults.close
   rsResultsZ.moveNext
  loop

  Set rsResultsZ = Nothing
  Set rsZ = Nothing
  Set rsU = Nothing

  'strSQL = "UPDATE [AppData2].[dbo].[sys_notes_customers] SET ACTIVE = 'Yes' WHERE WEBSITE_ID_CUSTOMER = " + WebsiteID
  'rs.Execute strSQL


  Response.Write("<center>" + LogoLocation + "<br><br><br><b><font size=3 color=green>Transaction Successful !</b></font><br><br></center>")
  Response.Write "<BR><CENTER><FORM action=https://" + Request.QueryString("site") + "/admin>"
  Response.Write "<INPUT type=submit value="" Login to " + Request.QueryString("site") + """ id=submit1>"
  Response.Write "</FORM></CENTER>"

  GetIPtoLocation UserIPAddress, CountryShortX, CountryX, StateX, CityX

  UserIPAddress = UserIPAddress + " (" + CityX + ", " + StateX + ", " + CountryX + ", " + CountryShortX + ")"

  EBody = "<table border=0 cellpadding=0 cellspacing=10>"
  EBody = EBody + "<tr><td align=right>COMPANY: </td><td>" + Company + "</td></tr>"
  EBody = EBody + "<tr><td align=right>FIRST NAME: </td><td>" + Request.Form("first_name") + "</td></tr>"
  EBody = EBody + "<tr><td align=right>LAST NAME: </td><td>" + Request.Form("last_name") + "</td></tr>"
  EBody = EBody + "<tr><td align=right>ADDRESS: </td><td>" + Request.Form("address") + "</td></tr>"
  EBody = EBody + "<tr><td align=right>CITY: </td><td>" + Request.Form("city") + "</td></tr>"
  EBody = EBody + "<tr><td align=right>STATE: </td><td>" + Request.Form("state") + "</td></tr>"
  EBody = EBody + "<tr><td align=right>ZIP/POSTAL CODE: </td><td>" + Request.Form("zip_code") + "</td></tr>"
  EBody = EBody + "<tr><td align=right>PHONE: </td><td>" + Request.Form("phone") + "</td></tr>"
  EBody = EBody + "<tr><td align=right>INVOICE NUMBER: </td><td>" + InvoiceNumber + "</td></tr>"
  EBody = EBody + "<tr><td align=right>TRANSACTION ID: </td><td>" + TransactionID + "</td></tr>"
  EBody = EBody + "<tr><td align=right>LOCATION: </td><td>" + UserIPAddress + "</td></tr>"
  EBody = EBody + "</table>"

  Session("Payment") = ""
  Session("GatewayMessage") = ""
  TransactionID = ""

  Session("LanapBotDetectCodeHash") = "OK"
  RelayEmail "sales@bulletlink.com<sales@bulletlink.com>", Request.Form("email"), "", "", "bulletlink: $" + CStr(Amount) + " Payment Received. (" + ClientWebsite + ")", EBody, "", "", ""
  Session("LanapBotDetectCodeHash") = "OK"
  RelayEmail "NoReply@bulletlink.com", "sales@bulletlink.com<sales@bulletlink.com>", "", "", "bulletlink: $" + CStr(Amount) + " Payment Received. (" + ClientWebsite + ")", EBody, "", "", ""

 end if

 Set rsResults = Nothing
 Set rs = Nothing


%>


<script language=javascript>
function Vailidate(New){
{New.SUBMIT1.disabled=true;document.getElementsByTagName("body")[0].classList.add("cus-form-loader");}
}
</script>

</BODY></HTML>
