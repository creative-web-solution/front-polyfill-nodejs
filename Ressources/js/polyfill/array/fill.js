/*! Polyfill from MDN */
[].fill||(Array.prototype.fill=function(t){for(var a=Object(this),r=parseInt(a.length),n=arguments[1],e=parseInt(n)||0,i=e<0?Math.max(r+e,0):Math.min(e,r),h=arguments[2],l=void 0===h?r:parseInt(h)||0,o=l<0?Math.max(r+l,0):Math.min(l,r);i<o;i++)a[i]=t;return a});