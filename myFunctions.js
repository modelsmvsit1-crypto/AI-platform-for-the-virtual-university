function showDetails(appName) {
  const details = {
    ChatGPT: {site: "https://chat.openai.com", desc: "نموذج لغوي متقدم يساعد في الإجابة على الأسئلة وإنشاء النصوص.", img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", video: "https://www.youtube.com/embed/j5a0jTc9S10"},
    Midjourney: {site: "https://www.midjourney.com", desc: "أداة لإنشاء الصور باستخدام الذكاء الاصطناعي.", img: "https://seeklogo.com/images/M/midjourney-logo", video: ""}
  };
  if (details[appName]) {
    let d = details[appName];
    alert(`الموقع: ${d.site}\n\nالوصف: ${d.desc}\n\nصورة: ${d.img}\n\nفيديو: ${d.video}`);
  } else {alert("لا توجد تفاصيل متاحة لهذا التطبيق.");}
}

function validateForm() {
  const name = document.getElementById("appName").value.trim();
  const company = document.getElementById("companyName").value.trim();
  const website = document.getElementById("website").value.trim();
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(name)) {alert("اسم التطبيق يجب أن يكون أحرف إنجليزية فقط بدون فراغات."); return false;}
  if (!nameRegex.test(company)) {alert("اسم الشركة يجب أن يكون أحرف إنجليزية فقط بدون فراغات."); return false;}
  if (!website.startsWith("http")) {alert("الرجاء إدخال موقع إلكتروني صحيح يبدأ بـ http أو https."); return false;}
  alert("تم إضافة التطبيق بنجاح!");
  window.location.href = "apps.html";
  return false;
}