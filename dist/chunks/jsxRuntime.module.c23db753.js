import{l as u,p as $}from"./preact.module.4fb7b7f3.js";var d,n,m,N,s=0,q=[],v=[],E=u.__b,V=u.__r,A=u.diffed,g=u.__c,k=u.unmount;function H(_,r){u.__h&&u.__h(n,_,s||r),s=0;var o=n.__H||(n.__H={__:[],__h:[]});return _>=o.__.length&&o.__.push({__V:v}),o.__[_]}function B(_){return s=1,x(b,_)}function x(_,r,o){var t=H(d++,2);if(t.t=_,!t.__c&&(t.__=[o?o(r):b(void 0,r),function(e){var i=t.__N?t.__N[0]:t.__[0],f=t.t(i,e);i!==f&&(t.__N=[f,t.__[1]],t.__c.setState({}))}],t.__c=n,!n.u)){n.u=!0;var c=n.shouldComponentUpdate;n.shouldComponentUpdate=function(e,i,f){if(!t.__c.__H)return!0;var h=t.__c.__H.__.filter(function(a){return a.__c});if(h.every(function(a){return!a.__N}))return!c||c.call(this,e,i,f);var y=!1;return h.forEach(function(a){if(a.__N){var C=a.__[0];a.__=a.__N,a.__N=void 0,C!==a.__[0]&&(y=!0)}}),!!y&&(!c||c.call(this,e,i,f))}}return t.__N||t.__}function O(_,r){var o=H(d++,3);!u.__s&&T(o.__H,r)&&(o.__=_,o.i=r,n.__H.__h.push(o))}function S(_){return s=5,P(function(){return{current:_}},[])}function P(_,r){var o=H(d++,7);return T(o.__H,r)?(o.__V=_(),o.i=r,o.__h=_,o.__V):o.__}function U(){for(var _;_=q.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(l),_.__H.__h.forEach(p),_.__H.__h=[]}catch(r){_.__H.__h=[],u.__e(r,_.__v)}}u.__b=function(_){typeof _.type!="function"||_.o||_.type===$?_.o||(_.o=_.__&&_.__.o?_.__.o:""):_.o=(_.__&&_.__.o?_.__.o:"")+(_.__&&_.__.__k?_.__.__k.indexOf(_):0),n=null,E&&E(_)},u.__r=function(_){V&&V(_),d=0;var r=(n=_.__c).__H;r&&(m===n?(r.__h=[],n.__h=[],r.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=v,o.__N=o.i=void 0})):(r.__h.forEach(l),r.__h.forEach(p),r.__h=[])),m=n},u.diffed=function(_){A&&A(_);var r=_.__c;r&&r.__H&&(r.__H.__h.length&&(q.push(r)!==1&&N===u.requestAnimationFrame||((N=u.requestAnimationFrame)||j)(U)),r.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==v&&(o.__=o.__V),o.i=void 0,o.__V=v})),m=n=null},u.__c=function(_,r){r.some(function(o){try{o.__h.forEach(l),o.__h=o.__h.filter(function(t){return!t.__||p(t)})}catch(t){r.some(function(c){c.__h&&(c.__h=[])}),r=[],u.__e(t,o.__v)}}),g&&g(_,r)},u.unmount=function(_){k&&k(_);var r,o=_.__c;o&&o.__H&&(o.__H.__.forEach(function(t){try{l(t)}catch(c){r=c}}),o.__H=void 0,r&&u.__e(r,o.__v))};var F=typeof requestAnimationFrame=="function";function j(_){var r,o=function(){clearTimeout(t),F&&cancelAnimationFrame(r),setTimeout(_)},t=setTimeout(o,100);F&&(r=requestAnimationFrame(o))}function l(_){var r=n,o=_.__c;typeof o=="function"&&(_.__c=void 0,o()),n=r}function p(_){var r=n;_.__c=_.__(),n=r}function T(_,r){return!_||_.length!==r.length||r.some(function(o,t){return o!==_[t]})}function b(_,r){return typeof r=="function"?r(_):r}var w=0;function D(_,r,o,t,c){var e,i,f={};for(i in r)i=="ref"?e=r[i]:f[i]=r[i];var h={type:_,props:f,key:o,ref:e,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--w,__source:c,__self:t};if(typeof _=="function"&&(e=_.defaultProps))for(i in e)f[i]===void 0&&(f[i]=e[i]);return u.vnode&&u.vnode(h),h}export{S as A,D as o,O as s,B as y};
