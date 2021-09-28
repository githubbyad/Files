Sub CreatePolls (WebsiteID, MyDomainZ, IPz)

 MyDomainX = MyDomainZ
 IPx = IPz
 MyDomain  = "https://" + MyDomainX + "/"

 AppServer = "https://" + Request.ServerVariables("HTTP_HOST")

 dim rs
 dim strSQL
 dim rsResults
 dim V_SysPollID
 dim V_UniquePollID
 dim V_Question
 dim V_Answer1
 dim V_Answer2
 dim V_Answer3
 dim V_Answer4
 dim V_Answer5
 dim V_Answer6
 dim V_Answer7
 dim PollMenuTitle
 dim MyContent
 dim TotalPolls

 MyContentAll = ""
 TotalPolls = 0

 Set rs = Server.CreateObject("ADODB.Connection")
 rs.Open Session("MyConnectStr")

 strSQL = "SELECT charset FROM [AppData2].[dbo].[SYS_OPTIONS_SYSTEMS] WITH (nolock) WHERE website_id = " + CStr(WebsiteID)
 Set rsResults = rs.Execute(strSQL)
 CharSet = rsResults("charset")
 if IsNull(CharSet) then
  CharSet = ""
 end if
 rsResults.close


 PollLocation1 = ""
 PollLocation2 = ""
 PollLocation3 = ""
 PollLocation4 = ""
 PollLocation5 = ""

 strSQL = "SELECT * FROM [AppData2].[dbo].[SYS_POLLS] WITH (nolock) WHERE website_id = " + CStr(WebsiteID) + " AND ACTIVE = 'Yes' ORDER BY poll_location, sys_menu_sub_id, LAST_UPDATE_DATE DESC"
 Set rsResults = rs.Execute(strSQL)

 do while not rsResults.eof

  MyContent = ""

  TotalPolls = TotalPolls + 1

  'if PollStacking = "Horizontal" then
  ' MyContent = MyContent + "<td valign=top>"
  'end if

  PollMenuTitle = ""
  PollLocation = mid(rsResults("poll_location"), 5, 1)
  SysMenuSubID = rsResults("sys_menu_sub_id")
  if IsNull(SysMenuSubID) then
   SysMenuSubID = ""
  end if
  SysMenuSubID = CStr(SysMenuSubID)

  ClosePollFlag = rsResults("close_poll_flag")
  if IsNull(ClosePollFlag) or len(ClosePollFlag) = 0 then
   ClosePollFlag = "No"
  end if

  ReportVotesValue = rsResults("report_votes_value")
  if IsNull(ReportVotesValue) then
   ReportVotesValue = "Votes"
  end if

  TotalResponded = rsResults("TOTAL_RESPONDED")
  if IsNull(TotalResponded) then
   TotalResponded = 0
  end if

  ReportTotalVotesValue = rsResults("report_total_votes_value")

  P1Responded = rsResults("ANSWER1_RESPONDED")
  if IsNull(P1Responded) then
   P1Responded = 0
  end if

  P2Responded = rsResults("ANSWER2_RESPONDED")
  if IsNull(P2Responded) then
   P2Responded = 0
  end if

  P3Responded = rsResults("ANSWER3_RESPONDED")
  if IsNull(P3Responded) then
   P13esponded = 0
  end if

  P4Responded = rsResults("ANSWER4_RESPONDED")
  if IsNull(P4Responded) then
   P4Responded = 0
  end if

  P5Responded = rsResults("ANSWER5_RESPONDED")
  if IsNull(P5Responded) then
   P5Responded = 0
  end if

  P6Responded = rsResults("ANSWER6_RESPONDED")
  if IsNull(P6Responded) then
   P6Responded = 0
  end if

  P7Responded = rsResults("ANSWER7_RESPONDED")
  if IsNull(P7Responded) then
   P7Responded = 0
  end if

  if TotalResponded <> 0 then
   P1 = ROUND((P1Responded / TotalResponded) * 100)
   P2 = ROUND((P2Responded / TotalResponded) * 100)
   P3 = ROUND((P3Responded / TotalResponded) * 100)
   P4 = ROUND((P4Responded / TotalResponded) * 100)
   P5 = ROUND((P5Responded / TotalResponded) * 100)
   P6 = ROUND((P6Responded / TotalResponded) * 100)
   P7 = ROUND((P7Responded / TotalResponded) * 100)
  end if

  DisplayDetailPollFlag = rsResults("DISPLAY_DETAIL_POLL_FLAG")

   BarImage = rsResults("bar_color")
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

  PollButton = rsResults("BUTTON_VALUE")
  PollMenuTitle = rsResults("POLL_MENU_TITLE")
  V_PollType = rsResults("POLL_TYPE")
  V_SysPollID = rsResults("SYS_POLL_ID")
  V_UniquePollID = rsResults("UNIQUE_POLL_ID")
  V_Question  = rsResults("QUESTION")
  V_Answer1   = rsResults("ANSWER1")
  V_Answer2   = rsResults("ANSWER2")
  V_Answer3   = rsResults("ANSWER3")
  V_Answer4   = rsResults("ANSWER4")
  V_Answer5   = rsResults("ANSWER5")
  V_Answer6   = rsResults("ANSWER6")
  V_Answer7   = rsResults("ANSWER7")


  MyContent = MyContent + "<div id=""poll" + CStr(V_SysPollID) + """ name=""poll" + CStr(V_SysPollID) + """ class=""polls1body cus-poll-1-container container mb-3 p-2 border rounded"">"

  if V_PollType = "MultipleChoice-CheckBox" then
   MyContent = MyContent + "<form class=""cus-poll-1-form"" style=""margin:0px; padding:0px;"" method=""post"" id=F" + CStr(V_UniquePollID) + " name=F" + CStr(V_UniquePollID) + " onSubmit=""var vip=document.getElementById('vip').value; var chk_val = get_checkbox_value('F" + CStr(V_UniquePollID) + "');var pollFrame = document.createElement('iframe');pollFrame.src = '" + AppServer + "/target_poll.asp?PollType=M&UniquePollID=" + CStr(V_UniquePollID) + "&site=" + MyDomainX + "&SysPollID=" + CStr(V_SysPollID) + "&vip=' + vip + '&' + chk_val;pollFrame.width = '100%';pollFrame.id = 'F" + CStr(V_UniquePollID) + "_FRAME';pollFrame.setAttribute('style', 'border: medium none; overflow: hidden;');pollFrame.setAttribute('scrolling', 'no');var frm = '#F" + CStr(V_UniquePollID) + "_FRAME';pollFrame.setAttribute('onload', 'iFrameResize({log:true}, ' + frm + ');');document.getElementsByClassName('poll-table-unq-" + CStr(V_UniquePollID) + "')[0].style.display = 'none';document.getElementsByClassName('poll-button-unq-" + CStr(V_UniquePollID) + "')[0].style.display = 'none';document.getElementById('F" + CStr(V_UniquePollID) + "_FRAME').insertBefore(pollFrame, document.getElementById('F" + CStr(V_UniquePollID) + "_FRAME').childNodes[0]);return false;"">"

   'MyContent = MyContent + "<form class=""cus-poll-1-form"" style=""margin:0px; padding:0px;"" method=""post"" id=F" + CStr(V_UniquePollID) + " name=F" + CStr(V_UniquePollID) + " onSubmit=""var vip=document.getElementById('vip').value; var chk_val = get_checkbox_value('F" + CStr(V_UniquePollID) + "');OpenPopup2('" + AppServer + "/target_poll.asp?PollType=M&UniquePollID=" + CStr(V_UniquePollID) + "&site=" + MyDomainX + "&SysPollID=" + CStr(V_SysPollID) + "&vip='+vip+'&'+chk_val,'iframe','600','400');return false;"">"
   
  else
  'MyContent = MyContent + "<form class=""cus-poll-1-form"" style=""margin:0px; padding:0px;"" method=""post"" id=F" + CStr(V_UniquePollID) + " name=F" + CStr(V_UniquePollID) + " onSubmit=""var vip=document.getElementById('vip').value; var rad_val=get_radio_value('F" + CStr(V_UniquePollID) + "');OpenPopup2('" + AppServer + "/target_poll.asp?UniquePollID=" + CStr(V_UniquePollID) + "&site=" + MyDomainX + "&SysPollID=" + CStr(V_SysPollID) + "&vip='+vip+'&choiceid='+rad_val,'iframe','600','400');return false;"">"

  MyContent = MyContent + "<form class=""cus-poll-1-form"" style=""margin:0px; padding:0px;"" method=""post"" id=F" + CStr(V_UniquePollID) + " name=F" + CStr(V_UniquePollID) + " onSubmit=""var vip=document.getElementById('vip').value; var rad_val=get_radio_value('F" + CStr(V_UniquePollID) + "');var pollFrame = document.createElement('iframe');pollFrame.src = '" + AppServer + "/target_poll.asp?UniquePollID=" + CStr(V_UniquePollID) + "&site=" + MyDomainX + "&SysPollID=" + CStr(V_SysPollID) + "&vip=' + vip + '&choiceid=' + rad_val;pollFrame.width = '100%';pollFrame.id = 'F" + CStr(V_UniquePollID) + "_FRAME';pollFrame.setAttribute('style', 'border: medium none; overflow: hidden;');pollFrame.setAttribute('scrolling', 'no');var frm = '#F" + CStr(V_UniquePollID) + "_FRAME';pollFrame.setAttribute('onload', 'iFrameResize({log:true}, ' + frm + ');');document.getElementsByClassName('poll-table-unq-" + CStr(V_UniquePollID) + "')[0].style.display = 'none';document.getElementsByClassName('poll-button-unq-" + CStr(V_UniquePollID) + "')[0].style.display = 'none';document.getElementById('F" + CStr(V_UniquePollID) + "_FRAME').insertBefore(pollFrame, document.getElementById('F" + CStr(V_UniquePollID) + "_FRAME').childNodes[0]);return false;"">"

  
  end if
  MyContent = MyContent + "<input type=""hidden"" id=""pollid"" name=""pollid"" value=""" + CStr(V_SysPollID) + """>"

  MyContent = MyContent + "<script src=""" + AppServer + "/php_get_ip.php""><\/script>"

  if V_PollType = "MultipleChoice-CheckBox" then

   MyContent = MyContent + "<div class=""polls1title polls1title_custom cus-poll-1-header fs-5 fw-bold p-2 bg-secondary text-center text-white text-uppercase"">" + PollMenuTitle + "</div>"
   MyContent = MyContent + "<div class=""polls1question polls1question_custom cus-poll-1-question py-2 fw-bold"">" + V_Question + "</div>"

   if ClosePollFlag = "Yes" then
    MyContent = MyContent + "<table border=1 cellPadding=5 cellSpacing=0 width=""100%"" class=""polls1question polls1question_custom cus-poll-1-table poll-table-unq-" + CStr(V_UniquePollID) + """ style=""border-collapse: collapse; border: 1px solid " + BarBGColor + ";"">"
   else
    MyContent = MyContent + "<table border=0 cellPadding=0 cellSpacing=0 width=""100%"" class=""polls1question cus-poll-1-table poll-table-unq-" + CStr(V_UniquePollID) + """>"
   end if


   if ClosePollFlag = "No" then
    MyContent = MyContent + "<tr class=""polls1question polls1question_custom cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""checkbox"" name=""choiceid1"" id=""choiceid1-" + CStr(V_UniquePollID) + """ value=1 class=""choiceid1_custom cus-poll-1-input form-check-input ms-0""></td>"
   else
    if DisplayDetailPollFlag = "Yes" then    
     ShowDetails = "<TD align=right style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P1Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
    end if
    MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P1/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P1)+ "%</div></div></td>" + ShowDetails
   end if
   MyContent = MyContent + "<td align=left class=""answer1_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid1-" + CStr(V_UniquePollID) + """>" + V_Answer1 + "</label></td></tr>"

   if ClosePollFlag = "No" then
    MyContent = MyContent + "<tr class=""polls1question polls1question_custom cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""checkbox"" name=""choiceid2"" id=""choiceid2-" + CStr(V_UniquePollID) + """ value=1 class=""choiceid2_custom cus-poll-1-input form-check-input ms-0""></td>"
   else
    if DisplayDetailPollFlag = "Yes" then    
     ShowDetails = "<TD align=right style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P2Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
    end if
    MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P2/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P2)+ "%</div></div></td>" + ShowDetails
   end if
   MyContent = MyContent + "<td align=left class=""answer2_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid2-" + CStr(V_UniquePollID) + """>" + V_Answer2 + "</label></td></tr>"


   if V_Answer3 <> "" then
    if ClosePollFlag = "No" then
     MyContent = MyContent + "<tr class=""polls1question polls1question_custom cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""checkbox"" name=""choiceid3"" id=""choiceid3-" + CStr(V_UniquePollID) + """ value=1 class=""choiceid3_custom cus-poll-1-input form-check-input ms-0""></td>"
    else
     if DisplayDetailPollFlag = "Yes" then    
      ShowDetails = "<TD align=right style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P3Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
     end if
     MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P3/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P3)+ "%</div></div></td>" + ShowDetails
    end if
    MyContent = MyContent + "<td align=left class=""answer3_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid3-" + CStr(V_UniquePollID) + """>" + V_Answer3 + "</label></td></tr>"
   end if

   if V_Answer4 <> "" then
    if ClosePollFlag = "No" then
     MyContent = MyContent + "<tr class=""polls1question polls1question_custom cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""checkbox"" name=""choiceid4"" id=""choiceid4-" + CStr(V_UniquePollID) + """ value=1 class=""choiceid4_custom cus-poll-1-input form-check-input ms-0""></td>"
    else
     if DisplayDetailPollFlag = "Yes" then    
      ShowDetails = "<TD align=right style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P4Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
     end if
     MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P4/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P4)+ "%</div></div></td>" + ShowDetails
    end if
    MyContent = MyContent + "<td align=left class=""answer4_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid4-" + CStr(V_UniquePollID) + """>" + V_Answer4 + "</label></td></tr>"
   end if

   if V_Answer5 <> "" then
    if ClosePollFlag = "No" then
     MyContent = MyContent + "<tr class=""polls1question polls1question_customcus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""checkbox"" name=""choiceid5"" id=""choiceid5-" + CStr(V_UniquePollID) + """ value=1 class=""choiceid5_custom cus-poll-1-input form-check-input ms-0""></td>"
    else
     if DisplayDetailPollFlag = "Yes" then    
      ShowDetails = "<TD align=right style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P5Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
     end if
     MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P5/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P5)+ "%</div></div></td>" + ShowDetails
    end if
    MyContent = MyContent + "<td align=left class=""answer5_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid5-" + CStr(V_UniquePollID) + """>" + V_Answer5 + "</label></td></tr>"
   end if

   if V_Answer6 <> "" then
    if ClosePollFlag = "No" then
     MyContent = MyContent + "<tr class=""polls1question polls1question_custom cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""checkbox"" name=""choiceid6"" id=""choiceid6-" + CStr(V_UniquePollID) + """ value=1 class=""choiceid6_custom cus-poll-1-input form-check-input ms-0""></td>"
    else
     if DisplayDetailPollFlag = "Yes" then    
      ShowDetails = "<TD align=right style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P6Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
     end if
     MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P6/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P6)+ "%</div></div></td>" + ShowDetails
    end if
    MyContent = MyContent + "<td align=left class=""answer6_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid6-" + CStr(V_UniquePollID) + """>" + V_Answer6 + "</label></td></tr>"
   end if

   if V_Answer7 <> "" then
    if ClosePollFlag = "No" then
     MyContent = MyContent + "<tr class=""polls1question polls1question_custom cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""checkbox"" name=""choiceid7"" id=""choiceid7-" + CStr(V_UniquePollID) + """ value=1 class=""choiceid7_custom cus-poll-1-input form-check-input ms-0""></td>"
    else
     if DisplayDetailPollFlag = "Yes" then    
      ShowDetails = "<TD align=right style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P7Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
     end if
     MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P7/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P7)+ "%</div></div></td>" + ShowDetails
    end if
    MyContent = MyContent + "<td align=left class=""answer7_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid7-" + CStr(V_UniquePollID) + """>" + V_Answer7 + "</label></td></tr>"
   end if

   if ClosePollFlag = "Yes" then
    if DisplayDetailPollFlag = "Yes" then    
     MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question""><TD colspan=3 align=center width=""15%"" style=""border: 1px solid " + BarBGColor + ";"">" + ReportTotalVotesValue + ":&nbsp; " + CStr(TotalResponded) + "</TD>"
    end if
   end if

   MyContent = MyContent + "</table><style>.cus-poll-1-answers {transition-delay: 200ms linear;}.cus-poll-1-answers:hover {transition: 100ms linear; box-shadow: 0 0 0 2px #ddd !important;}.cus-poll-1-label:hover {color: #0d6efd;}</style>"

   if ClosePollFlag = "No" then
    MyContent = MyContent + "<center><input class=""polls1button polls1button_custom cus-poll-1-button poll-button-unq-" + CStr(V_UniquePollID) + " fw-bold fs-6 text-wrap btn btn-primary col-10 col-lg-6 text-uppercase my-3"" type=submit value=""&nbsp;" + PollButton + "&nbsp;"" id=submit" + CStr(V_SysPollID) + " name=submit" + CStr(V_SysPollID) + "></center>"
   end if


  else '**************************

   MyContent = MyContent + "<div class=""polls1title polls1title_custom cus-poll-1-header fs-5 fw-bold p-2 bg-secondary text-white text-uppercase text-center"">" + PollMenuTitle + "</div>"
   MyContent = MyContent + "<div class=""polls1question polls1question_custom cus-poll-1-question py-2 fw-bold"">" + V_Question + "</div>"

   if ClosePollFlag = "Yes" then
    MyContent = MyContent + "<table border=1 cellPadding=5 cellSpacing=0 width=""100%"" class=""polls1question polls1question_custom  poll-table-unq-" + CStr(V_UniquePollID) + """ style=""border-collapse: collapse; border: 1px solid " + BarBGColor + ";"">"
   else
    MyContent = MyContent + "<table border=0 cellPadding=0 cellSpacing=0 width=""100%"" class=""polls1question polls1question_custom cus-poll-1-table poll-table-unq-" + CStr(V_UniquePollID) + """>"
   end if

   if ClosePollFlag = "No" then
    MyContent = MyContent + "<tr class=""polls1question polls1question_custom cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""radio"" name=""choiceid"" value=1 id=""choiceid1-" + CStr(V_UniquePollID) + """ class=""choiceid1_custom cus-poll-1-input form-check-input ms-0""></td>"
   else
    if DisplayDetailPollFlag = "Yes" then    
     ShowDetails = "<TD align=right style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P1Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
    end if
    MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P1/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P1)+ "%</div></div></td>" + ShowDetails
   end if   
   MyContent = MyContent + "<td align=left class=""answer1_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid1-" + CStr(V_UniquePollID) + """>" + V_Answer1 + "</label></td></tr>"

   if ClosePollFlag = "No" then
    MyContent = MyContent + "<tr class=""polls1question cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""radio"" name=""choiceid"" id=""choiceid2-" + CStr(V_UniquePollID) + """ value=2 class=""choiceid2_custom cus-poll-1-input form-check-input ms-0""></td>"
   else
    if DisplayDetailPollFlag = "Yes" then    
     ShowDetails = "<TD align=right style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P2Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
    end if
    MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P2/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P2)+ "%</div></div></td>" + ShowDetails
   end if

   MyContent = MyContent + "<td align=left class=""answer2_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid2-" + CStr(V_UniquePollID) + """>" + V_Answer2 + "</label></td></tr>"

   if V_Answer3 <> "" then
    if ClosePollFlag = "No" then
     MyContent = MyContent + "<tr class=""polls1question cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""radio"" name=""choiceid"" id=""choiceid3-" + CStr(V_UniquePollID) + """ value=3 class=""choiceid3_custom cus-poll-1-input form-check-input ms-0""></td>"
    else
    if DisplayDetailPollFlag = "Yes" then    
     ShowDetails = "<TD align=right style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P3Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
    end if
     MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P3/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P3)+ "%</div></div></td>" + ShowDetails
    end if
    MyContent = MyContent + "<td align=left class=""answer3_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid3-" + CStr(V_UniquePollID) + """>" + V_Answer3 + "</label></td></tr>"
   end if

   if V_Answer4 <> "" then
    if ClosePollFlag = "No" then
     MyContent = MyContent + "<tr class=""polls1question cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""radio"" name=""choiceid"" id=""choiceid4-" + CStr(V_UniquePollID) + """ value=4 class=""choiceid4_custom cus-poll-1-input form-check-input ms-0""></td>"
    else
    if DisplayDetailPollFlag = "Yes" then    
     ShowDetails = "<TD align=right width=""15%"" style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P4Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
    end if
     MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P4/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P4)+ "%</div></div></td>" + ShowDetails
    end if
    MyContent = MyContent + "<td align=left class=""answer4_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid4-" + CStr(V_UniquePollID) + """>" + V_Answer4 + "</label></td></tr>"
   end if

   if V_Answer5 <> "" then
    if ClosePollFlag = "No" then
     MyContent = MyContent + "<tr class=""polls1question cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""radio"" name=""choiceid"" id=""choiceid5-" + CStr(V_UniquePollID) + """ value=5 class=""choiceid5_custom cus-poll-1-input form-check-input ms-0""></td>"
    else
    if DisplayDetailPollFlag = "Yes" then    
     ShowDetails = "<TD align=right width=""15%"" style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P5Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
    end if
     MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P5/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P5)+ "%</div></div></td>" + ShowDetails
    end if
    MyContent = MyContent + "<td align=left class=""answer5_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid5-" + CStr(V_UniquePollID) + """>" + V_Answer5 + "</label></td></tr>"
   end if

   if V_Answer6 <> "" then
    if ClosePollFlag = "No" then
     MyContent = MyContent + "<tr class=""polls1question cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top CLASS=WB><input role=""button"" type=""radio"" name=""choiceid"" id=""choiceid6-" + CStr(V_UniquePollID) + """ value=6 class=""choiceid6_custom cus-poll-1-input form-check-input ms-0""></td>"
    else
    if DisplayDetailPollFlag = "Yes" then    
     ShowDetails = "<TD align=right width=""15%"" style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P6Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
    end if
     MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P6/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P6)+ "%</div></div></td>" + ShowDetails
    end if
    MyContent = MyContent + "<td align=left class=""answer6_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid6-" + CStr(V_UniquePollID) + """>" + V_Answer6 + "</label></td></tr>"
   end if

   if V_Answer7 <> "" then
    if ClosePollFlag = "No" then
     MyContent = MyContent + "<tr class=""polls1question cus-poll-1-answers form-check shadow-sm p-2 mb-3 bg-body rounded""><td align=right valign=top><input role=""button"" type=""radio"" name=""choiceid"" id=""choiceid7-" + CStr(V_UniquePollID) + """ value=7 class=""choiceid7_custom cus-poll-1-input form-check-input ms-0""></td>"
    else
    if DisplayDetailPollFlag = "Yes" then    
     ShowDetails = "<TD align=right width=""15%"" style=""border: 1px solid " + BarBGColor + ";"">" + CStr(P7Responded) + "&nbsp; " + ReportVotesValue + "</TD>"
    end if
     MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question polls1question_custom""><td align=left valign=top width=""50px""><div style=""width:100%; background-color: " + BarBGColor + ";""><div style=""width:" + CStr(P7/2) + "px; background-color: " + BarImage+ ";"">" + CStr(P7)+ "%</div></div></td>" + ShowDetails
    end if
    MyContent = MyContent + "<td align=left class=""answer7_custom""><label role=""button"" class=""cus-poll-1-label form-check-label ps-2"" for=""choiceid7-" + CStr(V_UniquePollID) + """>" + V_Answer7 + "</label></td></tr>"
   end if

    if ClosePollFlag = "Yes" then
     if DisplayDetailPollFlag = "Yes" then    
      MyContent = MyContent + "<tr style=""border: 1px solid " + BarBGColor + ";"" class=""polls1question""><TD colspan=3 align=center width=""15%"" style=""border: 1px solid " + BarBGColor + ";"">" + ReportTotalVotesValue + ":&nbsp; " + CStr(TotalResponded) + "</TD>"
     end if
    end if

   MyContent = MyContent + "</table><style>.cus-poll-1-answers {transition-delay: 200ms linear;}.cus-poll-1-answers:hover {transition: 100ms linear; box-shadow: 0 0 0 2px #ddd !important;}.cus-poll-1-label:hover {color: #0d6efd;}</style>"

   if ClosePollFlag = "No" then
    MyContent = MyContent + "<center><input class=""polls1button polls1button_custom cus-poll-1-button poll-button-unq-" + CStr(V_UniquePollID) + " fw-bold fs-6 text-wrap btn btn-primary col-10 col-lg-6 text-uppercase my-3"" type=submit value=""&nbsp;" + PollButton + "&nbsp;"" id=submit" + CStr(V_SysPollID) + " name=submit" + CStr(V_SysPollID) + "></center>"
   end if
 
  end if 'if V_PollType = "MultipleChoice-CheckBox" then

  MyContent = MyContent + "</form></div>"

  MyContent = replace(MyContent, "'", "\'")

'  MyContent =  + MyContent + "</div></form>"

  JString = "restrictedMenu = """ + SysMenuSubID + """;"

  MyContent = JString + " if(restrictedMenu=="""" || restrictedMenu==smenu) {document.write('" + MyContent + "');" + chr(13)+chr(10) + " } else { document.write(""""); }"


  if PollLocation = "1" then
   PollLocation1 = PollLocation1 + MyContent
  elseif PollLocation = "2" then
   PollLocation2 = PollLocation2 + MyContent
  elseif PollLocation = "3" then
   PollLocation3 = PollLocation3 + MyContent
  elseif PollLocation = "4" then
   PollLocation4 = PollLocation4 + MyContent
  elseif PollLocation = "5" then
   PollLocation5 = PollLocation5 + MyContent
  end if

  rsResults.moveNext

 loop

 rsResults.close

 Set rsResults = Nothing
 Set rs = Nothing

  JString = "var myParameters = new Array();myParameters = ReadSParameters();var smenu = myParameters[""smenu""];var restrictedMenu;"

  PollLocation1 = "function GetPoll1(){" + JString + PollLocation1 + "}" + chr(13)+chr(10)
  PollLocation2 = "function GetPoll2(){" + JString + PollLocation2 + "}" + chr(13)+chr(10)
  PollLocation3 = "function GetPoll3(){" + JString + PollLocation3 + "}" + chr(13)+chr(10)
  PollLocation4 = "function GetPoll4(){" + JString + PollLocation4 + "}" + chr(13)+chr(10)
  PollLocation5 = "function GetPoll5(){" + JString + PollLocation5 + "}" + chr(13)+chr(10)

  WriteToFile MyDomainX, IPx, "polls.htm", PollLocation1 + PollLocation2 + PollLocation3 + PollLocation4 + PollLocation5, CharSet, "No"

 
End Sub 'CreatePolls (WebsiteID, MyDomainX)
