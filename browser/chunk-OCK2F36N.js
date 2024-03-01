import{a as Q}from"./chunk-NHDFJ2WU.js";import{$ as D,H as M,J as V,K as S,L as b,M as j,O as v,S as x,T,U as B,V as F,W as G,Y as I,Z as U,a as f,b as u,ba as L,d as w,fa as N,i as E,j as R,k as H,l as y,n as P,s as C}from"./chunk-Y5M3B4OQ.js";var g=class extends S{constructor(e=1,z=1,r=1,t=1,a=1,c=1){super(),t=Math.floor(t),a=Math.floor(a),c=Math.floor(c);let o=e/2,i=z/2,n=r/2,A=e/t,K=z/a,X=r/c,d=[],m=-o,h=-i,p=-n;for(let l=0;l<=t;l++)d.push(m,-i,-n,m,i,-n),d.push(m,i,-n,m,i,n),d.push(m,i,n,m,-i,n),d.push(m,-i,n,m,-i,-n),m+=A;for(let l=0;l<=a;l++)d.push(-o,h,-n,o,h,-n),d.push(o,h,-n,o,h,n),d.push(o,h,n,-o,h,n),d.push(-o,h,n,-o,h,-n),h+=K;for(let l=0;l<=c;l++)d.push(-o,-i,p,-o,i,p),d.push(-o,i,p,o,i,p),d.push(o,i,p,o,-i,p),d.push(o,-i,p,-o,-i,p),p+=X;this.setAttribute("position",new V(d,3))}};var W=["scene"],q=(()=>{let e=class e{constructor(){this.scene=new T,this.camera=new v(45,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new x({antialias:!0})}ngOnInit(){this.createScene(),this.setUpVR()}setUpVR(){}createScene(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.position.set(0,0,4),this.scene.background=new M(11184810),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight);let r=new D(16777215,12303291,.3);this.scene.add(r);let t=new L;t.position.set(.2,1,1),this.scene.add(t),this.sceneElement.nativeElement.appendChild(this.renderer.domElement);let a=()=>{n.rotateY(.04),this.renderer.render(this.scene,this.camera)},c=()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)};this.renderer.setAnimationLoop(a),window.addEventListener("resize",c);let o=new j,i=new I({color:16711680}),n=new b(o,i);this.scene.add(n);let A=new Q(this.camera,this.renderer.domElement)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f({type:e,selectors:[["app-demo"]],viewQuery:function(t,a){if(t&1&&R(W,7),t&2){let c;H(c=y())&&(a.sceneElement=c.first)}},decls:2,vars:0,consts:[["scene",""]],template:function(t,a){t&1&&E(0,"div",null,0)}});let s=e;return s})(),k=(()=>{let e=class e{constructor(){this.scene=new T,this.camera=new v(50,window.innerWidth/window.innerHeight,.1,100),this.renderer=new x({antialias:!0})}ngOnInit(){this.createScene(),this.setUpVR()}setUpVR(){this.renderer.xr.enabled=!0,this.sceneElement.nativeElement.appendChild(N.createButton(this.renderer)),this.renderer.xr.setReferenceSpaceType("local")}createScene(){this.camera.position.set(0,1.6,3),this.scene.background=new M(5263440),this.scene.add(new D(6316128,4210752));let r=new L(16777215);r.position.set(1,1,1).normalize(),this.scene.add(r),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.sceneElement.nativeElement.appendChild(this.renderer.domElement);let t=new Q(this.camera,this.renderer.domElement);t.target.set(0,1.6,0),t.update();let a=.08,c=new F(new g(6,6,6,10,10,10),new B({color:0}));c.geometry.translate(0,3,0),this.scene.add(c);let o=new G(a,2);for(let i=0;i<200;i++){let n=new b(o,new U({color:Math.random()*16777215}));n.position.x=this.random(-2,2),n.position.y=this.random(-2,2),n.position.z=this.random(-2,2),c.add(n),this.renderer.render(this.scene,this.camera)}}random(r,t){return Math.random()*(t-r)+r}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f({type:e,selectors:[["app-demo2"]],viewQuery:function(t,a){if(t&1&&R(W,7),t&2){let c;H(c=y())&&(a.sceneElement=c.first)}},decls:2,vars:0,consts:[["scene",""]],template:function(t,a){t&1&&E(0,"div",null,0)}});let s=e;return s})(),Y=(()=>{let e=class e{constructor(){this.scene=new T,this.camera=new v(50,window.innerWidth/window.innerHeight,.1,100),this.renderer=new x({antialias:!0})}ngOnInit(){this.createScene(),this.setUpVR()}setUpVR(){}createScene(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f({type:e,selectors:[["app-demo3"]],viewQuery:function(t,a){if(t&1&&R(W,7),t&2){let c;H(c=y())&&(a.sceneElement=c.first)}},decls:2,vars:0,consts:[["scene",""]],template:function(t,a){t&1&&E(0,"div",null,0)}});let s=e;return s})();var Z=[{path:"",component:q},{path:"2",component:k},{path:"3",component:Y}],J=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u({type:e}),e.\u0275inj=w({imports:[C.forChild(Z),C]});let s=e;return s})();var fe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u({type:e}),e.\u0275inj=w({imports:[P,J]});let s=e;return s})();export{fe as DemoModule};