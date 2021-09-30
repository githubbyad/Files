<%@ Language=VBScript %>
<!--#include file="connect_string.asp"-->
<!--#include file="generalsubs2.asp"-->

<%

 Response.Expires = 0
 Response.ExpiresAbsolute=Now()-1
 Response.AddHeader "pragma","no-cache"
 Response.AddHeader "cache-control","private"
 Response.CacheControl="no-cache"
 Response.Buffer = true

 QString = Request.QueryString()
 
 QSite = Request.QueryString("site")

 SQLinj QSite, QString, "target_poll.asp"

 GetDomainPartsV QSite, HostCompany, MyDomain, MyDomainX

 WebsiteID = Session("WebsiteID")

 HttpHost = LCase(Request.ServerVariables("HTTP_HOST"))

 Response.CodePage = 65001 
 Response.CharSet = "UTF-8" 

 Response.Write "<html><head><script src='/iframe-resizer-master/js/iframeResizer.contentWindow.js'></script><style>#poll-loader {border: 4px solid #0d6efd;border-radius: 50%;border-top: 4px solid #ddd;width: 10vw;height: 10vw;-webkit-animation: spin 700ms linear infinite;animation: spin 700ms linear infinite;position: fixed;left: 45vw;transform: translate(-50%,0);top: 15vh;}@-webkit-keyframes spin {0% {-webkit-transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);}}@keyframes spin {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}.poll-table > tbody > tr > td:nth-child(2) {display: none;}.cus-poll-ans-div{width:100%;float:left;margin-bottom:16px;box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important;box-sizing:border-box;color:#2a2a2a;font-weight:700;position:relative;border-radius:.25rem!important;background:#fff;padding-top:5px;padding-bottom:10px;overflow:hidden;border:1px solid transparent;transition:.2s linear}.cus-poll-ans-div:hover{border-color:#0d6efd;transition:.2s linear}.cus-poll-ans-text{font-weight:normal;float:left;width:67%;padding-right:5%;padding-left:3%;text-align:left;line-height:25px}.cus-poll-ans-pt{width:22%;float:right;padding-right:3%;text-align:right;line-height:25px;color:#0d6efd}.cus-poll-ans-border-bg{height:5px;background:#eaeaea;position:absolute;bottom:0;width:100%}.cus-poll-ans-border-pt{background:#0d6efd;height:5px;float:left;position:absolute;bottom:0}.cus-poll-total{float:left;width:100%;text-align:center;font-weight:700;margin-bottom:8px;margin-top:10px;color:#000}.cus-poll-voted{background:#f8d7da;border:1px solid #f5c2c7;border-radius:.25rem;color:#842029;padding:.75rem .75rem;margin-bottom:10px;box-sizing:border-box}.cus-poll-voted{background:#f8d7da;border:1px solid #f5c2c7;border-radius:.25rem;color:#842029;padding:.75rem .75rem;margin-bottom:10px;box-sizing:border-box}</style><script>window.addEventListener('DOMContentLoaded', (event) => {document.getElementById('poll-loader').style.display = 'none';});</script></head><body class=""polls1body"" style=""background-color:#ffffff; background-image:none; margin-left: auto; margin-right: auto; margin-top: auto; padding: 0px; border:none;font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; ""><div id='poll-loader'></div>"

 dim IP_Address
 dim SubMenu
 SubMenu = ""

 ID = Request.QueryString("choiceid")
 V_UniquePollID = Request.QueryString("UniquePollID")
 V_SysPollID = Request.QueryString("SysPollID")
 IP_Address = Request.QueryString("vip")

 if ID = "undefined" then
  ID = ""
 end if

 Set rsP = Server.CreateObject("ADODB.Connection")
 rsP.Open Session("MyConnectStr")


AlreadyVoted = false

if ID <> "" or Request.QueryString("PollType") = "M" then

 'IP_Address = GetClientIP

 strSQLp = "SELECT IP FROM [AppData2].[dbo].[SYS_POLLS_VOTED] WHERE WEBSITE_ID = " + CStr(WebsiteID) + " AND IP = '" + IP_Address + "' AND UNIQUE_POLL_ID = " + CStr(V_UniquePollID)
 'response.write strSQLp
 Set rsResultsP = rsP.Execute(strSQLp, , 1)
 if not rsResultsP.eof then
  AlreadyVoted = true
  IP_Address = rsResultsP("IP")
  rsResultsP.close
 else
  rsResultsP.close
  strSQLp = "INSERT INTO [AppData2].[dbo].[SYS_POLLS_VOTED] (WEBSITE_ID, SYS_POLL_ID, UNIQUE_POLL_ID, IP) VALUES (" + CStr(WebSiteID) + "," + CStr(V_SysPollID) + "," + CStr(V_UniquePollID) + ",'" + IP_Address + "')"
  Set rsResultsP = rsP.Execute(strSQLp)
  IP_Address = ""
 end if

 if IP_Address = "" then

  if Request.QueryString("PollType") = "M" then

   Ans1 = 0
   Ans2 = 0
   Ans3 = 0
   Ans4 = 0
   Ans5 = 0
   Ans6 = 0
   Ans7 = 0
   if Request.QueryString("choiceid1") = "1" then
     Ans1 = 1
   end if
   if Request.QueryString("choiceid2") = "1" then
     Ans2 = 1
   end if
   if Request.QueryString("choiceid3") = "1" then
     Ans3 = 1
   end if
   if Request.QueryString("choiceid4") = "1" then
     Ans4 = 1
   end if
   if Request.QueryString("choiceid5") = "1" then
     Ans5 = 1
   end if
   if Request.QueryString("choiceid6") = "1" then
     Ans6 = 1
   end if
   if Request.QueryString("choiceid7") = "1" then
     Ans7 = 1
   end if

   strSQLp = "UPDATE [AppData2].[dbo].[SYS_POLLS] SET ANSWER1_RESPONDED = ANSWER1_RESPONDED + " + CStr(Ans1) + ", ANSWER2_RESPONDED = ANSWER2_RESPONDED + " + CStr(Ans2) + ", ANSWER3_RESPONDED = ANSWER3_RESPONDED + " + CStr(Ans3) + ", ANSWER4_RESPONDED = ANSWER4_RESPONDED + " + CStr(Ans4) + ", ANSWER5_RESPONDED = ANSWER5_RESPONDED + " + CStr(Ans5) + ", ANSWER6_RESPONDED = ANSWER6_RESPONDED + " + CStr(Ans6) + ", ANSWER7_RESPONDED = ANSWER7_RESPONDED + " + CStr(Ans7) + ", TOTAL_RESPONDED = TOTAL_RESPONDED + " + CStr(Ans1+Ans2+Ans3+Ans4+Ans5+Ans6+Ans7) + " WHERE WEBSITE_ID = " + CStr(WebsiteID) + " AND ACTIVE = 'Yes' AND UNIQUE_POLL_ID = " + CStr(V_UniquePollID)
   rsP.Execute strSQLp, , 1

  else

   if ID = "1" then
     strSQLp = "UPDATE [AppData2].[dbo].[SYS_POLLS] SET ANSWER1_RESPONDED = ANSWER1_RESPONDED + 1, TOTAL_RESPONDED = TOTAL_RESPONDED + 1 WHERE WEBSITE_ID = " + CStr(WebsiteID) + " AND ACTIVE = 'Yes' AND UNIQUE_POLL_ID = " + CStr(V_UniquePollID)
   elseif ID = "2" then
     strSQLp = "UPDATE [AppData2].[dbo].[SYS_POLLS] SET ANSWER2_RESPONDED = ANSWER2_RESPONDED + 1, TOTAL_RESPONDED = TOTAL_RESPONDED + 1 WHERE WEBSITE_ID = " + CStr(WebsiteID) + " AND ACTIVE = 'Yes' AND UNIQUE_POLL_ID = " + CStr(V_UniquePollID)
   elseif ID = "3" then
     strSQLp = "UPDATE [AppData2].[dbo].[SYS_POLLS] SET ANSWER3_RESPONDED = ANSWER3_RESPONDED + 1, TOTAL_RESPONDED = TOTAL_RESPONDED + 1 WHERE WEBSITE_ID = " + CStr(WebsiteID) + " AND ACTIVE = 'Yes' AND UNIQUE_POLL_ID = " + CStr(V_UniquePollID)
   elseif ID = "4" then
     strSQLp = "UPDATE [AppData2].[dbo].[SYS_POLLS] SET ANSWER4_RESPONDED = ANSWER4_RESPONDED + 1, TOTAL_RESPONDED = TOTAL_RESPONDED + 1 WHERE WEBSITE_ID = " + CStr(WebsiteID) + " AND ACTIVE = 'Yes' AND UNIQUE_POLL_ID = " + CStr(V_UniquePollID)
   elseif ID = "5" then
     strSQLp = "UPDATE [AppData2].[dbo].[SYS_POLLS] SET ANSWER5_RESPONDED = ANSWER5_RESPONDED + 1, TOTAL_RESPONDED = TOTAL_RESPONDED + 1 WHERE WEBSITE_ID = " + CStr(WebsiteID) + " AND ACTIVE = 'Yes' AND UNIQUE_POLL_ID = " + CStr(V_UniquePollID)
   elseif ID = "6" then
     strSQLp = "UPDATE [AppData2].[dbo].[SYS_POLLS] SET ANSWER6_RESPONDED = ANSWER6_RESPONDED + 1, TOTAL_RESPONDED = TOTAL_RESPONDED + 1 WHERE WEBSITE_ID = " + CStr(WebsiteID) + " AND ACTIVE = 'Yes' AND UNIQUE_POLL_ID = " + CStr(V_UniquePollID)
   elseif ID = "7" then
     strSQLp = "UPDATE [AppData2].[dbo].[SYS_POLLS] SET ANSWER7_RESPONDED = ANSWER7_RESPONDED + 1, TOTAL_RESPONDED = TOTAL_RESPONDED + 1 WHERE WEBSITE_ID = " + CStr(WebsiteID) + " AND ACTIVE = 'Yes' AND UNIQUE_POLL_ID = " + CStr(V_UniquePollID)
   end if
   rsP.Execute strSQLp, , 1

  end if

 end if

end if 'if ID <> "" then


 strSQLp = "SELECT * FROM [AppData2].[dbo].[SYS_POLLS] WHERE WEBSITE_ID = " + CStr(WebsiteID) + " AND ACTIVE = 'Yes' AND UNIQUE_POLL_ID = " + CStr(V_UniquePollID)
 Set rsResultsP = rsP.Execute(strSQLp)

'response.write strSQLp 

 SubMenu = rsResultsP("MENU")
 if IsNull(SubMenu) then
  SubMenu = ""
 end if

 Header = rsResultsP("header")
 if IsNull(Header) then
  Header = ""
 end if

 if len(Header) > 0 then
  do while InStr(1, LCase(Header), "{{adgroup") > 0
   Header = InsertBannersInText (Header)
  loop 
  Header = "<div>" + Header + "</div>"
  'Header = ReplaceJavascriptSpecialTags (Header)
  Response.Write Header
 end if

 Footer = rsResultsP("Footer")
 if IsNull(Footer) then
  Footer = ""
 end if

 if len(Footer) > 0 then
  do while InStr(1, LCase(Footer), "{{adgroup") > 0
   Footer = InsertBannersInText (Footer)
  loop 
  Footer = "<div>" + Footer + "</div>"
  'Footer = ReplaceJavascriptSpecialTags (Footer)
 end if


 DisplayDetailPollFlag = rsResultsP("DISPLAY_DETAIL_POLL_FLAG")
 ReportHeadingValue = rsResultsP("report_heading_value")
 if IsNull(ReportHeadingValue) then
  ReportHeadingValue = "Poll Result"
 end if
 ReportMessage = rsResultsP("report_message")
 if IsNull(ReportMessage) then
  ReportMessage = "Thank you for taking a part in our poll.<BR><BR>The results will be published in our publication."
 end if
 ReportVotedValue = rsResultsP("report_voted_value")
 if IsNull(ReportVotedValue) then
  ReportVotedValue = "You have already voted." 
 end if

 ReportVotesValue = rsResultsP("report_votes_value")
 if IsNull(ReportVotesValue) then
  ReportVotesValue = "Votes"
 end if
 ReportTotalVotesValue = rsResultsP("report_total_votes_value")
 if IsNull(ReportTotalVotesValue) then
  ReportTotalVotesValue = "Total Votes"
 end if

 if AlreadyVoted  then
  Response.Write "<center class='cus-poll-voted'><svg xmlns='http://www.w3.org/2000/svg' style='display: none;'><symbol id='exclamation-triangle-fill' fill='currentColor' viewBox='0 0 16 16'><path d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'></path></symbol></svg> <svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Danger:'><use xlink:href='#exclamation-triangle-fill'></use></svg>" + ReportVotedValue + "</center>"
 end if

 if DisplayDetailPollFlag = "No" then 
  Response.Write "<CENTER><b><font size=4>" + ReportHeadingValue + "</font></b></CENTER><P>"
 end if

 
%>

<% if rsResultsP("TOTAL_RESPONDED") = 0 then %>

 <% Response.Write "<CENTER><BR><BR>There are no responses at this time.</CENTER>" %>

<% else %>

<%
   P1 = ROUND((rsResultsP("ANSWER1_RESPONDED") / rsResultsP("TOTAL_RESPONDED")) * 100)
   P2 = ROUND((rsResultsP("ANSWER2_RESPONDED") / rsResultsP("TOTAL_RESPONDED")) * 100)
   P3 = ROUND((rsResultsP("ANSWER3_RESPONDED") / rsResultsP("TOTAL_RESPONDED")) * 100)
   P4 = ROUND((rsResultsP("ANSWER4_RESPONDED") / rsResultsP("TOTAL_RESPONDED")) * 100)
   P5 = ROUND((rsResultsP("ANSWER5_RESPONDED") / rsResultsP("TOTAL_RESPONDED")) * 100)
   P6 = ROUND((rsResultsP("ANSWER6_RESPONDED") / rsResultsP("TOTAL_RESPONDED")) * 100)
   P7 = ROUND((rsResultsP("ANSWER7_RESPONDED") / rsResultsP("TOTAL_RESPONDED")) * 100)

   BarImage = rsResultsP("bar_color")
   if IsNull(BarImage) then
    BarImage = "red"
   end if
   if BarImage = "red" then
    BarBGColor = "#fbe2e2"
   end if
   if BarImage = "grey" then
    BarBGColor = "#e1e1d7"
   end if
   if BarImage = "blue" then
    BarBGColor = "#c9dede"
   end if
   if BarImage = "magenta" then
    BarBGColor = "#fbd8ee"
   end if
   if BarImage = "violet" then
    BarBGColor = "#e4d9ea"
   end if
   if BarImage = "orange" then
    BarBGColor = "#fde3c8"
   end if
   if BarImage = "green" then
    BarBGColor = "#c5dcb2"
   end if
   if BarImage = "yellow" then
    BarBGColor = "#efe0a5"
   end if
   if BarImage = "cyan" then
    BarBGColor = "##c6eae0"
   end if
   if BarImage = "brown" then
    BarBGColor = "#efe0c1"
   end if

   BarImage = "/images/poll_bar_" + BarImage + ".jpg"
%>

<% if DisplayDetailPollFlag = "Message" then %>
<CENTER>
<BR><BR><BR>
<font size=2><%=ReportMessage%></font>
<BR><BR><BR>
</CENTER>

<% elseif DisplayDetailPollFlag = "Yes" then %>

  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER1")%></div>
  <div class="cus-poll-ans-pt"><%=P1%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P1%>%;"></div>
  </div>

  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER2")%></div>
  <div class="cus-poll-ans-pt"><%=P2%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P2%>%;"></div>
  </div>

  <% if rsResultsP("ANSWER3") <> "" then %>
  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER3")%></div>
  <div class="cus-poll-ans-pt"><%=P3%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P3%>%;"></div>
  </div>
  <% end if %>

  <% if rsResultsP("ANSWER4") <> "" then %>
  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER4")%></div>
  <div class="cus-poll-ans-pt"><%=P4%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P4%>%;"></div>
  </div>
  <% end if %>

  <% if rsResultsP("ANSWER5") <> "" then %>
  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER5")%></div>
  <div class="cus-poll-ans-pt"><%=P5%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P5%>%;"></div>
  </div>
  <% end if %>

  <% if rsResultsP("ANSWER6") <> "" then %>
  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER6")%></div>
  <div class="cus-poll-ans-pt"><%=P6%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P6%>%;"></div>
  </div>
  <% end if %>

  <% if rsResultsP("ANSWER7") <> "" then %>
  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER7")%></div>
  <div class="cus-poll-ans-pt"><%=P7%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P7%>%;"></div>
  </div>
  <% end if %>

  <div class="cus-poll-total"><%=ReportTotalVotesValue%>&nbsp;:&nbsp;&nbsp;<%=rsResultsP("TOTAL_RESPONDED")%></div>

<% else %>

  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER1")%></div>
  <div class="cus-poll-ans-pt"><%=P1%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P1%>%;"></div>
  </div>

  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER2")%></div>
  <div class="cus-poll-ans-pt"><%=P2%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P2%>%;"></div>
  </div>

  <% if rsResultsP("ANSWER3") <> "" then %>
  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER3")%></div>
  <div class="cus-poll-ans-pt"><%=P3%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P3%>%;"></div>
  </div>
  <% end if %>

  <% if rsResultsP("ANSWER4") <> "" then %>
  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER4")%></div>
  <div class="cus-poll-ans-pt"><%=P4%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P4%>%;"></div>
  </div>
  <% end if %>

  <% if rsResultsP("ANSWER5") <> "" then %>
  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER5")%></div>
  <div class="cus-poll-ans-pt"><%=P5%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P5%>%;"></div>
  </div>
  <% end if %>

  <% if rsResultsP("ANSWER6") <> "" then %>
  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER6")%></div>
  <div class="cus-poll-ans-pt"><%=P6%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P6%>%;"></div>
  </div>
  <% end if %>

  <% if rsResultsP("ANSWER7") <> "" then %>
  <div class="cus-poll-ans-div">
  <div class="cus-poll-ans-text"><%=rsResultsP("ANSWER7")%></div>
  <div class="cus-poll-ans-pt"><%=P7%>%</div>
  <div class="cus-poll-ans-border-bg"></div>
  <div class="cus-poll-ans-border-pt" style="width:<%=P7%>%;"></div>
  </div>
  <% end if %>


<% end if %>

<% end if %>

<% 
 if len(Footer) > 0 then
  Response.Write "<br>" + Footer
 end if
%>

<%

 if Request.Querystring("sname") = "" then
  Response.Write "<script type=""text/javascript"" language=""JavaScript"">LoadDoc(""/get_sc.asp"", ""hcdiv"", """");</script>"
 end if

 Response.Write "<script language=""javascript"">GetGoogleAnalytics('POLL:" + mid(SubMenu, 1, 50) + "');</script>"

 Response.Write "</body></html>"

 set rsResultsP = Nothing
 set rsP = Nothing
 
%>

