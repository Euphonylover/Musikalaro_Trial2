gdjs.RonPage2Code = {};
gdjs.RonPage2Code.GDmainmapbObjects1= [];
gdjs.RonPage2Code.GDmainmapbObjects2= [];
gdjs.RonPage2Code.GDselfcheckObjects1= [];
gdjs.RonPage2Code.GDselfcheckObjects2= [];
gdjs.RonPage2Code.GDselfcheckbuttonObjects1= [];
gdjs.RonPage2Code.GDselfcheckbuttonObjects2= [];
gdjs.RonPage2Code.GDbgObjects1= [];
gdjs.RonPage2Code.GDbgObjects2= [];
gdjs.RonPage2Code.GDgitaraObjects1= [];
gdjs.RonPage2Code.GDgitaraObjects2= [];
gdjs.RonPage2Code.GDDbassObjects1= [];
gdjs.RonPage2Code.GDDbassObjects2= [];
gdjs.RonPage2Code.GDbutBajoObjects1= [];
gdjs.RonPage2Code.GDbutBajoObjects2= [];
gdjs.RonPage2Code.GDBajooObjects1= [];
gdjs.RonPage2Code.GDBajooObjects2= [];
gdjs.RonPage2Code.GDguitarinfoObjects1= [];
gdjs.RonPage2Code.GDguitarinfoObjects2= [];
gdjs.RonPage2Code.GDActivity2aObjects1= [];
gdjs.RonPage2Code.GDActivity2aObjects2= [];
gdjs.RonPage2Code.GDActivity1aObjects1= [];
gdjs.RonPage2Code.GDActivity1aObjects2= [];
gdjs.RonPage2Code.GDBajoObjects1= [];
gdjs.RonPage2Code.GDBajoObjects2= [];
gdjs.RonPage2Code.GDGitara2Objects1= [];
gdjs.RonPage2Code.GDGitara2Objects2= [];
gdjs.RonPage2Code.GDchestsingalongObjects1= [];
gdjs.RonPage2Code.GDchestsingalongObjects2= [];
gdjs.RonPage2Code.GDchestlisteningObjects1= [];
gdjs.RonPage2Code.GDchestlisteningObjects2= [];
gdjs.RonPage2Code.GDActivity2Objects1= [];
gdjs.RonPage2Code.GDActivity2Objects2= [];
gdjs.RonPage2Code.GDActivity1Objects1= [];
gdjs.RonPage2Code.GDActivity1Objects2= [];
gdjs.RonPage2Code.GDbackbutObjects1= [];
gdjs.RonPage2Code.GDbackbutObjects2= [];
gdjs.RonPage2Code.GDSCRObjects1= [];
gdjs.RonPage2Code.GDSCRObjects2= [];

gdjs.RonPage2Code.conditionTrue_0 = {val:false};
gdjs.RonPage2Code.condition0IsTrue_0 = {val:false};
gdjs.RonPage2Code.condition1IsTrue_0 = {val:false};
gdjs.RonPage2Code.condition2IsTrue_0 = {val:false};
gdjs.RonPage2Code.condition3IsTrue_0 = {val:false};
gdjs.RonPage2Code.conditionTrue_1 = {val:false};
gdjs.RonPage2Code.condition0IsTrue_1 = {val:false};
gdjs.RonPage2Code.condition1IsTrue_1 = {val:false};
gdjs.RonPage2Code.condition2IsTrue_1 = {val:false};
gdjs.RonPage2Code.condition3IsTrue_1 = {val:false};


gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.RonPage2Code.GDmainmapbObjects1});gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.RonPage2Code.GDmainmapbObjects1});gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.RonPage2Code.GDmainmapbObjects1});gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDbackbutObjects1Objects = Hashtable.newFrom({"backbut": gdjs.RonPage2Code.GDbackbutObjects1});gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDBajoObjects1Objects = Hashtable.newFrom({"Bajo": gdjs.RonPage2Code.GDBajoObjects1});gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDActivity1aObjects1Objects = Hashtable.newFrom({"Activity1a": gdjs.RonPage2Code.GDActivity1aObjects1});gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDActivity2aObjects1Objects = Hashtable.newFrom({"Activity2a": gdjs.RonPage2Code.GDActivity2aObjects1});gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDSCRObjects1Objects = Hashtable.newFrom({"SCR": gdjs.RonPage2Code.GDSCRObjects1});gdjs.RonPage2Code.eventsList0 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.RonPage2Code.GDmainmapbObjects1);

gdjs.RonPage2Code.condition0IsTrue_0.val = false;
{
gdjs.RonPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.RonPage2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.RonPage2Code.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.RonPage2Code.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.RonPage2Code.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.RonPage2Code.GDmainmapbObjects1);

gdjs.RonPage2Code.condition0IsTrue_0.val = false;
gdjs.RonPage2Code.condition1IsTrue_0.val = false;
gdjs.RonPage2Code.condition2IsTrue_0.val = false;
{
gdjs.RonPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RonPage2Code.condition0IsTrue_0.val ) {
{
gdjs.RonPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RonPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.RonPage2Code.conditionTrue_1 = gdjs.RonPage2Code.condition2IsTrue_0;
gdjs.RonPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11248132);
}
}}
}
if (gdjs.RonPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.RonPage2Code.GDmainmapbObjects1);

gdjs.RonPage2Code.condition0IsTrue_0.val = false;
{
gdjs.RonPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.RonPage2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.RonPage2Code.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.RonPage2Code.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.RonPage2Code.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backbut"), gdjs.RonPage2Code.GDbackbutObjects1);

gdjs.RonPage2Code.condition0IsTrue_0.val = false;
gdjs.RonPage2Code.condition1IsTrue_0.val = false;
gdjs.RonPage2Code.condition2IsTrue_0.val = false;
{
gdjs.RonPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDbackbutObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RonPage2Code.condition0IsTrue_0.val ) {
{
gdjs.RonPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RonPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.RonPage2Code.conditionTrue_1 = gdjs.RonPage2Code.condition2IsTrue_0;
gdjs.RonPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11249876);
}
}}
}
if (gdjs.RonPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "RonPage1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bajo"), gdjs.RonPage2Code.GDBajoObjects1);

gdjs.RonPage2Code.condition0IsTrue_0.val = false;
gdjs.RonPage2Code.condition1IsTrue_0.val = false;
gdjs.RonPage2Code.condition2IsTrue_0.val = false;
{
gdjs.RonPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDBajoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RonPage2Code.condition0IsTrue_0.val ) {
{
gdjs.RonPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RonPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.RonPage2Code.conditionTrue_1 = gdjs.RonPage2Code.condition2IsTrue_0;
gdjs.RonPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11250892);
}
}}
}
if (gdjs.RonPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Double Bass Pizzicato Styles-[AudioTrimmer.com].mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Activity1a"), gdjs.RonPage2Code.GDActivity1aObjects1);

gdjs.RonPage2Code.condition0IsTrue_0.val = false;
gdjs.RonPage2Code.condition1IsTrue_0.val = false;
gdjs.RonPage2Code.condition2IsTrue_0.val = false;
{
gdjs.RonPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDActivity1aObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RonPage2Code.condition0IsTrue_0.val ) {
{
gdjs.RonPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RonPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.RonPage2Code.conditionTrue_1 = gdjs.RonPage2Code.condition2IsTrue_0;
gdjs.RonPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11252084);
}
}}
}
if (gdjs.RonPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=pXmKr5ArMBk&list=PLJPyalARUKjvTBbTg_Nma1vLbXm2TtR5L&index=14", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Activity2a"), gdjs.RonPage2Code.GDActivity2aObjects1);

gdjs.RonPage2Code.condition0IsTrue_0.val = false;
gdjs.RonPage2Code.condition1IsTrue_0.val = false;
gdjs.RonPage2Code.condition2IsTrue_0.val = false;
{
gdjs.RonPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDActivity2aObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RonPage2Code.condition0IsTrue_0.val ) {
{
gdjs.RonPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RonPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.RonPage2Code.conditionTrue_1 = gdjs.RonPage2Code.condition2IsTrue_0;
gdjs.RonPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11253188);
}
}}
}
if (gdjs.RonPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=vcVv6ifaNqc&list=PLJPyalARUKjvTBbTg_Nma1vLbXm2TtR5L&index=2", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SCR"), gdjs.RonPage2Code.GDSCRObjects1);

gdjs.RonPage2Code.condition0IsTrue_0.val = false;
gdjs.RonPage2Code.condition1IsTrue_0.val = false;
gdjs.RonPage2Code.condition2IsTrue_0.val = false;
{
gdjs.RonPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage2Code.mapOfGDgdjs_46RonPage2Code_46GDSCRObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RonPage2Code.condition0IsTrue_0.val ) {
{
gdjs.RonPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RonPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.RonPage2Code.conditionTrue_1 = gdjs.RonPage2Code.condition2IsTrue_0;
gdjs.RonPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11254292);
}
}}
}
if (gdjs.RonPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Selfeval-Rondalla", false);
}}

}


};

gdjs.RonPage2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RonPage2Code.GDmainmapbObjects1.length = 0;
gdjs.RonPage2Code.GDmainmapbObjects2.length = 0;
gdjs.RonPage2Code.GDselfcheckObjects1.length = 0;
gdjs.RonPage2Code.GDselfcheckObjects2.length = 0;
gdjs.RonPage2Code.GDselfcheckbuttonObjects1.length = 0;
gdjs.RonPage2Code.GDselfcheckbuttonObjects2.length = 0;
gdjs.RonPage2Code.GDbgObjects1.length = 0;
gdjs.RonPage2Code.GDbgObjects2.length = 0;
gdjs.RonPage2Code.GDgitaraObjects1.length = 0;
gdjs.RonPage2Code.GDgitaraObjects2.length = 0;
gdjs.RonPage2Code.GDDbassObjects1.length = 0;
gdjs.RonPage2Code.GDDbassObjects2.length = 0;
gdjs.RonPage2Code.GDbutBajoObjects1.length = 0;
gdjs.RonPage2Code.GDbutBajoObjects2.length = 0;
gdjs.RonPage2Code.GDBajooObjects1.length = 0;
gdjs.RonPage2Code.GDBajooObjects2.length = 0;
gdjs.RonPage2Code.GDguitarinfoObjects1.length = 0;
gdjs.RonPage2Code.GDguitarinfoObjects2.length = 0;
gdjs.RonPage2Code.GDActivity2aObjects1.length = 0;
gdjs.RonPage2Code.GDActivity2aObjects2.length = 0;
gdjs.RonPage2Code.GDActivity1aObjects1.length = 0;
gdjs.RonPage2Code.GDActivity1aObjects2.length = 0;
gdjs.RonPage2Code.GDBajoObjects1.length = 0;
gdjs.RonPage2Code.GDBajoObjects2.length = 0;
gdjs.RonPage2Code.GDGitara2Objects1.length = 0;
gdjs.RonPage2Code.GDGitara2Objects2.length = 0;
gdjs.RonPage2Code.GDchestsingalongObjects1.length = 0;
gdjs.RonPage2Code.GDchestsingalongObjects2.length = 0;
gdjs.RonPage2Code.GDchestlisteningObjects1.length = 0;
gdjs.RonPage2Code.GDchestlisteningObjects2.length = 0;
gdjs.RonPage2Code.GDActivity2Objects1.length = 0;
gdjs.RonPage2Code.GDActivity2Objects2.length = 0;
gdjs.RonPage2Code.GDActivity1Objects1.length = 0;
gdjs.RonPage2Code.GDActivity1Objects2.length = 0;
gdjs.RonPage2Code.GDbackbutObjects1.length = 0;
gdjs.RonPage2Code.GDbackbutObjects2.length = 0;
gdjs.RonPage2Code.GDSCRObjects1.length = 0;
gdjs.RonPage2Code.GDSCRObjects2.length = 0;

gdjs.RonPage2Code.eventsList0(runtimeScene);
return;

}

gdjs['RonPage2Code'] = gdjs.RonPage2Code;
