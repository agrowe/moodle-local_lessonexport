YUI.add("moodle-local_lessonexport-printlinks",function(e,t){M.local_lessonexport=M.local_lessonexport||{},
M.local_lessonexport.printlinks={init:function(t){var n,r,i;try{n=e.one('#region-main>[role="main"]'),n=n.one("#maincontent"),n=n.next(),r=n.ancestor()}catch(s){return}for(i in t){if(!t.hasOwnProperty(i))continue;r.insert(t[i],n)}}}},"@VERSION@",{requires:["base","node"]});
