(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();const r=document.querySelectorAll(".video-overlay--container video"),d=document.querySelectorAll(".content-overlay--container article");let c=0;const i=document.querySelector(".timed--popup"),y=i.getBoundingClientRect().top,L=document.querySelector(".close--timed-popup");console.log(y);document.querySelector(".slider--track");let u,a,m,p,f;console.log(r.length);setInterval(()=>{for(let o=0;o<r.length;o++)r[o].classList.remove("fadeIn"),d[o].classList.remove("fadeIn");c=(c+1)%r.length,r[c].classList.add("fadeIn"),d[c].classList.add("fadeIn"),r[c].play(),setTimeout(()=>{r[c-1].pause(),r[c-1].currentTime=0},3e3)},5e3);setInterval(()=>{a=document.querySelector(".img-first"),m=document.querySelector(".img-center"),u=document.querySelector(".img-last"),f=document.querySelector(".img-clone"),p=document.querySelector(".img-dump"),a.classList.replace("img-first","img-center"),m.classList.replace("img-center","img-last"),u.classList.replace("img-last","img-dump"),p.classList.replace("img-dump","img-clone"),f.classList.replace("img-clone","img-first")},3e3);window.addEventListener("scroll",()=>{let o=window.scrollY;console.log(o),o===1500&&i.classList.add("isActive")});L.addEventListener("click",()=>{i.classList.remove("isActive")});document.querySelector(".open--letter").addEventListener("click",()=>{document.querySelector(".letter--popup-outer").classList.add("isActive")});document.querySelector(".close--letter").addEventListener("click",()=>{document.querySelector(".letter--popup-outer").classList.remove("isActive")});
