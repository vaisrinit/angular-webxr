import{N as p,R as c,S as y,a as o,b as n,c as h,d as s,e as m,ea as M,f as l,g as f,h as u,i as w,m as g,o as v,p as C,q as E,r as a}from"./chunk-ZS7WFKSN.js";var R=(()=>{let e=class e{constructor(i,r){this.ngZone=i,this.el=r,this.scene=new y,this.camera=new p(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new c}ngOnInit(){this.init(),this.animate()}ngOnDestroy(){this.vrButton.remove()}init(){this.camera=new p(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.renderer=new c,this.renderer.setSize(window.innerWidth,window.innerHeight),this.el.nativeElement.appendChild(this.renderer.domElement),this.vrButton=M.createButton(this.renderer),document.body.appendChild(this.vrButton)}animate(){this.ngZone.runOutsideAngular(()=>{this.vrButton.isPresenting(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(()=>this.animate())})}};e.\u0275fac=function(r){return new(r||e)(m(l),m(h))},e.\u0275cmp=o({type:e,selectors:[["app-vr"]],decls:2,vars:0,template:function(r,T){r&1&&(f(0,"p"),g(1,"vr works!"),u())}});let t=e;return t})();var x=[{path:"solar",loadChildren:()=>import("./chunk-6QABFVW4.js").then(t=>t.SolarSystemModule)},{path:"demo",loadChildren:()=>import("./chunk-BQVRWR5R.js").then(t=>t.DemoModule)},{path:"vr",component:R}],H=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=n({type:e}),e.\u0275inj=s({imports:[a.forRoot(x),a]});let t=e;return t})();var b=(()=>{let e=class e{constructor(){this.title="client"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=o({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,T){r&1&&w(0,"router-outlet")},dependencies:[E],styles:["body[_ngcontent-%COMP%]{margin:0}"]});let t=e;return t})();var B=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=n({type:e,bootstrap:[b]}),e.\u0275inj=s({imports:[C,H]});let t=e;return t})();v().bootstrapModule(B).catch(t=>console.error(t));
