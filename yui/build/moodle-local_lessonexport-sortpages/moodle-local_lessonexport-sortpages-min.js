YUI.add("moodle-local_lessonexport-sortpages",function(e,t){M.local_lessonexport=M.local_lessonexport||{},M.local_lessonexport.sortpages={cmid:null,groupid:null,userid:null,sesskey:null,init:function(t){var n,r,i=!1,s=0,o=null,u,a=0;this.cmid=t.cmid,this.sesskey=t.sesskey,this.groupid=t.groupid,this.userid=t.userid,r=e.one("#lesson-sortpages"),n=r.all("li"),n.each(function(t){var n,i;if(t.hasClass("nomove"))return;n=(new e.DD.Drag({node:t,target:{padding:"0 0 0 20"}})).addHandle(t.one(".jsicons")).plug(e.Plugin.DDProxy,{moveOnEnd:!1}).plug(e.Plugin.DDConstrained,{constrain2node:r,constrainX:!0}),i=parseInt(this.get_sortorder(t),10),i>a&&(a=i)},this),e.DD.DDM.on("drag:start",function(e){var t=e.target;t.get("node").setStyle("opacity",".25"),t.get("dragNode").set("innerHTML",t.get("node").get("innerHTML")),t.get("dragNode").setStyles({opacity:".5"}),o=null}),e.DD.DDM.on("drag:end",function(e){var t=e.target;t.get("node").setStyles({visibility:"",opacity:"1"}),o&&this.send_reorder(t.get("node"),o)},this),e.DD.DDM.on("drag:drag",function(e){var t=e.target.lastXY[1];i=t<s,s=t}),e.DD.DDM.on("drop:over",function(e){var t=e.drag.get("node"),n=e.drop.get("node"),r=parseInt(this.get_sortorder(t),10);n.get("tagName").toLowerCase()==="li"&&(i||(n=n.get("nextSibling")),u=this.get_sortorder(n),u?(u=parseInt(u,10),u>r&&(u-=1),o=u):o=a,e.drop.get("node").get("parentNode").insertBefore(t,n),e.drop.sizeShim())},this)},get_sortorder:function(e){var t,n;return e?(t=e.get("className"),n=t.match(/sortorder-(\d+)/),n?n[1]:null):null},get_pageid:function(e){var t,n;return t=e.get("id"),n=t.match(/lessonpageid-(\d+)/),n?n[1]:null},get_by_pageid:function(t){return e.one("#lessonpageid-"+t)},set_sortorder:function(e,t){var n;n=this.get_sortorder(e),n&&(e.removeClass("sortorder-"+n),e.addClass("sortorder-"+t))},show_spinner:function(){e.one("#lesson-sortpages-spinner").addClass("show")},hide_spinner:function(){e.one("#lesson-sortpages-spinner").removeClass("show")},send_reorder:function(t,n){var r,i;this.show_spinner(),r=M.cfg.wwwroot+"/local/lessonexport/sortpages_ajax.php",i={data:{id:this.cmid,userid:this.userid,groupid:this.groupid,sesskey:this.sesskey,action:"moveto",pageid:this.get_pageid(t),position:n},context:this,on:{success:this.update_sortorder}},e.io(r,i)},update_sortorder:function(t,n){var r,i,s,o;this.hide_spinner(),n=e.JSON.parse(n.responseText);if(n.error){alert(n.error);return}r=n.order;for(i in r){if(!r.hasOwnProperty(i))continue;o=r[i],s=this.get_by_pageid(i),s&&this.set_sortorder(s,o)}}}},"@VERSION@",{requires:["base","node","io-base","dd-constrain","dd-proxy","dd-drop","json-parse"]});
