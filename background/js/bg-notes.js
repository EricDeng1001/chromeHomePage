"use strict";var bgNotes={init:function(){var i=[{time:(new Date).getTime(),text:""}];infinity.init("infinity-notes",i),infinity.onMessage("notesChange",function(i){infinity.doSyncData(),infinity.sendMessage("updateNotesView",{tabid:i.tabid})})}};