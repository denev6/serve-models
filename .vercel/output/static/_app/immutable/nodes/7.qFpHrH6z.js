import{t as p,a as r}from"../chunks/vMUy-l4-.js";import{p as I,s as f,f as l,a as N,a7 as g,ad as n,l as o,c as S,r as k,t as y}from"../chunks/BmosVzqU.js";import{s as z}from"../chunks/BIkekS2W.js";import{i as F}from"../chunks/B-pjV1An.js";import{s as J}from"../chunks/B8RWNBdP.js";import{p as v}from"../chunks/BYI5g8cN.js";import{o as M}from"../chunks/BWH4WX17.js";var O=p('<p> </p> <img alt="" class="svelte-pzh0pi">',1),P=p("<p>Fail to parse the result</p>"),j=p("<h1>Processed Image</h1> <!>",1);function G(c,_){I(_,!0);let t=n(""),m=n("");M(()=>{let a=JSON.parse(sessionStorage.getItem("img"));a&&(g(t,v(a.image)),g(m,v(a.name)))});var i=j(),h=f(l(i),2);{var u=a=>{var e=O(),s=l(e),x=S(s,!0);k(s);var b=f(s,2);y(()=>{z(x,o(m)),J(b,"src",o(t))}),r(a,e)},d=a=>{var e=P();r(a,e)};F(h,a=>{o(t)?a(u):a(d,!1)})}r(c,i),N()}export{G as component};
