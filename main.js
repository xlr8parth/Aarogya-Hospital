function bodyOnLoad() {
   var x = document.getElementById("copyRight");
   var d = new Date();
   x.innerHTML = "Copyright &copy; Aarogya Hospital " + d.getFullYear();
}

//-----------------------------------------------------------

function showSlides() {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {
      slideIndex = 1
   }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 3000);

}

//-----------------------------------------------------------

function scrollBody() {
   var y = document.documentElement.scrollTop;
   if (y > 200) {
      document.getElementById("header").style.height = "75px";
      document.getElementById("apt").style.display = "none";
      document.getElementById("navbar").style.marginTop = "22px";
      document.getElementById("logo").style.height = "62px";

   } else if (y < 200) {
      document.getElementById("header").style.height = "150px";
      document.getElementById("apt").style.display = "block";
      document.getElementById("navbar").style.marginTop = "0px";
      document.getElementById("logo").style.height = "125px";
   }

   if (y > 10)
      document.getElementById("header").style.boxShadow = "5px 5px 5px #888";

   else
      document.getElementById("header").style.boxShadow = "";
}

//-----------------------------------------------------------

function showDoc(s, e) {
   var i;
   var slide = document.getElementsByClassName("inMySlides");
   document.getElementById("pre").style.display = "block";
   document.getElementById("nex").style.display = "block";
   if (e >= slide.length - 1) {
      e = slide.length - 1;
      s = e - 3;
      document.getElementById("nex").style.display = "none";
   }
   if (s < 1) {
      s = 0;
      e = s + 3;
      document.getElementById("pre").style.display = "none";
   }
   for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
   }
   for (i = s; i <= e; i++) {
      slide[i].style.display = "block";
   }
}


function plus(n) {
   showDoc(sDoc += n, eDoc += n);
}

//-----------------------------------------------------------
function docOnClick(doc) {
   var docObj = document.getElementsByClassName("doc-det");
   var docDet = docObj[doc].firstElementChild;
   var docName = docDet.innerHTML;
   var docKey = "doc0";

   localStorage.setItem("docSelected", true);
   localStorage.setItem("docNo", doc);
   localStorage.setItem("docCount", 1);
   localStorage.setItem(docKey, docName);

   window.location.href = "appointment.html";
}

//----------------------------------------------------------------
function saveAllDoc() {
   var docObj = document.getElementsByClassName("doc-det");

   localStorage.setItem("docSelected", false);
   localStorage.setItem("docNo", 0);
   localStorage.setItem("docCount", docObj.length);

   var docKey = "doc0";
   var docName = "";
   var arrDoc = [];
   for (var i = 0; i < docObj.length; i++) {
      docKey = "doc" + i;
      docName = docObj[i].firstElementChild.innerHTML;
      localStorage.setItem(docKey, docName);
      arrDoc[i] = docName;
   }
   localStorage.setItem("arrDoc", arrDoc.toString());

   window.location.href = "appointment.html";
}