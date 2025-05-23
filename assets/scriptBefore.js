function hideStartPage() {
  document.getElementById("startPage").style.display = "none", resetActiveTabs()
}

function resetActiveTabs() {
  document.querySelectorAll(".file-item").forEach((e => e.classList.remove("active")))
}

function showStartPage() {
  document.getElementById("loadingIndicator").style.display = "none", document.getElementById("contentFrame").src = "about:blank", document.getElementById("startPage").style.display = "flex", document.querySelectorAll(".skin-tree").forEach((e => e.style.display = "block")), document.querySelectorAll(".skin-tree > .file-item").forEach((e => e.style.display = "flex")), resetActiveTabs(), history.pushState({}, "", window.location.origin + window.location.pathname);
  document.getElementById("contentFrame").style.display = "none"
}

function loadContent(e, t) {
  hideStartPage(), document.getElementById("selectMessage").style.display = "none";
  const n = document.getElementById("loadingIndicator");
  n.style.display = "flex", resetActiveTabs(), e.classList.add("active");
  const o = document.getElementById("contentFrame");
  o.onload = () => n.style.display = "none", o.src = t, history.pushState({}, "", "?doc=" + encodeURIComponent(t)), o.style.display = "block"
}

function loadPdf(e, t) {
  hideStartPage(), e.stopPropagation(), loadContent(e.target.closest(".file-item"), t)
}

function toggleStructure() {
  const e = document.getElementById("structure"),
    t = document.getElementById("contentArea"),
    n = document.getElementById("skin-split-pane"),
    o = document.getElementById("toggleIcon");
  e.classList.contains("hidden") ? (e.classList.remove("hidden"), t.classList.remove("full-width"), n.classList.remove("hidden"), o.textContent = "«", e.style.width = "20%", t.style.width = "80%") : (e.classList.add("hidden"), t.classList.add("full-width"), n.classList.add("hidden"), o.textContent = "»", e.style.width = "0", t.style.width = "100%")
}

function searchDocuments() {
  const e = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll(".file-item").forEach((t => {
    t.textContent.toLowerCase().includes(e) ? t.style.display = "flex" : t.style.display = "none"
  }))
}

function clearSearch() {
  document.getElementById("searchInput").value = "", searchDocuments()
}

function showMTPADocs() {
  hideStartPage(), document.getElementById("selectMessage").style.display = "flex", document.getElementById("MTPASection").style.display = "block", document.querySelectorAll(".skin-tree:not(#MTPASection)").forEach((e => e.style.display = "none"))
}

function showMDLDocs() {
  hideStartPage(), document.getElementById("selectMessage").style.display = "flex", document.getElementById("MDLSection").style.display = "block", document.querySelectorAll(".skin-tree:not(#MDLSection)").forEach((e => e.style.display = "none")), document.getElementById("PresSection").style.display = "block", document.querySelectorAll("#PresSection .file-item").forEach((e => {
    e.id.includes("PresentMDL") ? e.style.display = "block" : e.style.display = "none"
  }))
}

function showMTPMDocs() {
  hideStartPage(), document.getElementById("selectMessage").style.display = "flex", document.getElementById("EducateSection").style.display = "block", document.getElementById("MTPMSection").style.display = "block", document.querySelectorAll(".skin-tree:not(#EducateSection):not(#MTPMSection)").forEach((e => e.style.display = "none"))
}

function showGRZNTDocs() {
  hideStartPage(), document.getElementById("selectMessage").style.display = "flex", document.querySelectorAll(".skin-tree:not(#GRZNTSection)").forEach((e => e.style.display = "none")), document.getElementById("PresSection").style.display = "block", document.querySelectorAll("#PresSection .file-item").forEach((e => {
    e.id.includes("PresentGRZNT") ? e.style.display = "block" : e.style.display = "none"
  }))
}

function checkOrientation() {
  const e = document.getElementById("rotateMessage");
  window.matchMedia("(orientation: portrait)").matches ? e.style.display = "flex" : e.style.display = "none"
}
window.addEventListener("load", (() => {
  const e = new URLSearchParams(window.location.search).get("doc");
  if (e) {
    const t = document.querySelectorAll(".file-item");
    let n = !1;
    t.forEach((t => {
      const o = t.getAttribute("onclick");
      o && o.includes(e) && (n = !0, loadContent(t, e))
    })), n || showStartPage()
  }
})), window.addEventListener("load", checkOrientation), window.addEventListener("orientationchange", checkOrientation), window.addEventListener("resize", (() => {
  const e = document.getElementById("rotateMessage");
  window.matchMedia("(orientation: portrait)").matches || (e.style.display = "none")
}));
