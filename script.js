"use strict";
const tgl = document.querySelector(".toggle");
const content = document.querySelector(".content");
const nav = document.querySelector(".nav");
const title = document.querySelector(".title");

tgl.onclick = function () {
  content.classList.toggle("isOpen");
  nav.classList.toggle("isClose");
  title.classList.toggle("isClose");
};
