//----------------------------------------------------------------
function apptOnLoad() {
   var docCount = localStorage.getItem("docCount");
   var docSelected = localStorage.getItem("docSelected");
   var doc = localStorage.getItem("docNo");

   var seleDoc = document.getElementById("doctor");
   var option = document.createElement("option");

   for (var i = 0; i < seleDoc.length; i++)
      seleDoc.remove(0);

   seleDoc.disabled = true;
   if (docSelected == "false") {
      option.text = "--Select Doctor--";
      seleDoc.add(option);
      seleDoc.disabled = false;
   }

   var docKey = "doc0";
   var docName = "";
   for (var i = 0; i < docCount; i++) {
      docKey = "doc" + i;
      docName = localStorage.getItem(docKey);

      option = document.createElement("option")
      option.text = docName;
      seleDoc.add(option);

   }
   setSpclt(doc, docSelected);

   localStorage.removeItem("docCount");
   localStorage.removeItem("docSelected");
   localStorage.removeItem("docNo");
}

//----------------------------------------------------------------
function arrSpclt() {
   var spclt = [];
   spclt[0] = ["Cardiology"];
   spclt[1] = ["Dietetics", "Medicine", "Pediatrics"];
   spclt[2] = ["Ortho & Joint Replacement", "Physiotherapy"];
   spclt[3] = ["Ear Nose Throat (ENT)", "Ophthalmology"];
   spclt[4] = ["General Surgery", "Anaesthesiology"];
   spclt[5] = ["Obstetrics & Gynaecology"];
   spclt[6] = ["Cancer"];
   spclt[7] = ["Neurosurgery"];

   return spclt;
}
//----------------------------------------------------------------
function setSpclt(doc, docSelected) {

   var spclt = arrSpclt();

   var seleSpclt = document.getElementById("spclt");
   var option = document.createElement("option");

   for (var i = 0; i < seleSpclt.length; i++)
      seleSpclt.remove(0);

   option.text = "--Select Speciality--";
   seleSpclt.add(option);

   if (docSelected == "true") {
      for (s of spclt[doc]) {
         option = document.createElement("option")
         option.text = s;
         seleSpclt.add(option);
      }
   } else {
      for (var i = 0; i < spclt.length; i++)
         for (s of spclt[i]) {
            option = document.createElement("option")
            option.text = s;
            seleSpclt.add(option);
         }
   }
}

//----------------------------------------------------------------
function setDocList() {

   var seleSpclt = document.getElementById("spclt")
   var spcValue = seleSpclt.options[seleSpclt.selectedIndex].value;
   console.log(spcValue);

   var spclt = arrSpclt();

   for (var i = 0; i < spclt.length; i++)
      if (spclt[i].indexOf(spcValue) >= 0)
         break;

   var arrDoc = localStorage.getItem("arrDoc").split(",");
   var docName = arrDoc[i];

   var seleDoc = document.getElementById("doctor");
   var option = document.createElement("option");

   var len = seleDoc.length;
   for (var i = 0; i < len; i++)
      seleDoc.remove(0);

   option = document.createElement("option")
   option.text = docName;
   seleDoc.add(option);
}