import{C as J,D as u,E as we,O as Oe,da as $,s as M,t as j,x as Pe,y as Te,z as d}from"./chunk-ZS7WFKSN.js";var Me={type:"change"},v={type:"start"},je={type:"end"},Z=new we,Ae=new Oe,qe=Math.cos(70*Te.DEG2RAD),Le=class extends Pe{constructor(F,De){super(),this.object=F,this.domElement=De,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new u,this.cursor=new u,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:M.ROTATE,MIDDLE:M.DOLLY,RIGHT:M.PAN},this.touches={ONE:j.ROTATE,TWO:j.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",Q),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Q),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(Me),e.update(),s=a.NONE},this.update=function(){let t=new u,o=new J().setFromUnitVectors(F.up,new u(0,1,0)),n=o.clone().invert(),i=new u,l=new J,g=new u,p=2*Math.PI;return function(Ge=null){let Ee=e.object.position;t.copy(Ee).sub(e.target),t.applyQuaternion(o),r.setFromVector3(t),e.autoRotate&&s===a.NONE&&I(xe(Ge)),e.enableDamping?(r.theta+=m.theta*e.dampingFactor,r.phi+=m.phi*e.dampingFactor):(r.theta+=m.theta,r.phi+=m.phi);let h=e.minAzimuthAngle,f=e.maxAzimuthAngle;isFinite(h)&&isFinite(f)&&(h<-Math.PI?h+=p:h>Math.PI&&(h-=p),f<-Math.PI?f+=p:f>Math.PI&&(f-=p),h<=f?r.theta=Math.max(h,Math.min(f,r.theta)):r.theta=r.theta>(h+f)/2?Math.max(h,r.theta):Math.min(f,r.theta)),r.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,r.phi)),r.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(A,e.dampingFactor):e.target.add(A),e.target.sub(e.cursor),e.target.clampLength(e.minTargetRadius,e.maxTargetRadius),e.target.add(e.cursor),e.zoomToCursor&&z||e.object.isOrthographicCamera?r.radius=q(r.radius):r.radius=q(r.radius*b),t.setFromSpherical(r),t.applyQuaternion(n),Ee.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(m.theta*=1-e.dampingFactor,m.phi*=1-e.dampingFactor,A.multiplyScalar(1-e.dampingFactor)):(m.set(0,0,0),A.set(0,0,0));let U=!1;if(e.zoomToCursor&&z){let Y=null;if(e.object.isPerspectiveCamera){let _=t.length();Y=q(_*b);let X=_-Y;e.object.position.addScaledVector(te,X),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){let _=new u(y.x,y.y,0);_.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/b)),e.object.updateProjectionMatrix(),U=!0;let X=new u(y.x,y.y,0);X.unproject(e.object),e.object.position.sub(X).add(_),e.object.updateMatrixWorld(),Y=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Y!==null&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Y).add(e.object.position):(Z.origin.copy(e.object.position),Z.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Z.direction))<qe?F.lookAt(e.target):(Ae.setFromNormalAndCoplanarPoint(e.object.up,e.target),Z.intersectPlane(Ae,e.target))))}else e.object.isOrthographicCamera&&(U=b!==1,U&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/b)),e.object.updateProjectionMatrix()));return b=1,z=!1,U||i.distanceToSquared(e.object.position)>ee||8*(1-l.dot(e.object.quaternion))>ee||g.distanceToSquared(e.target)>0?(e.dispatchEvent(Me),i.copy(e.object.position),l.copy(e.object.quaternion),g.copy(e.target),!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",ye),e.domElement.removeEventListener("pointerdown",me),e.domElement.removeEventListener("pointercancel",C),e.domElement.removeEventListener("wheel",he),e.domElement.removeEventListener("pointermove",B),e.domElement.removeEventListener("pointerup",C),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",Q),e._domElementKeyEvents=null)};let e=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=a.NONE,ee=1e-6,r=new $,m=new $,b=1,A=new u,E=new d,P=new d,L=new d,T=new d,w=new d,D=new d,x=new d,R=new d,O=new d,te=new u,y=new d,z=!1,c=[],k={},V=!1;function xe(t){return t!==null?2*Math.PI/60*e.autoRotateSpeed*t:2*Math.PI/60/60*e.autoRotateSpeed}function K(t){let o=Math.abs(t*.01);return Math.pow(.95,e.zoomSpeed*o)}function I(t){m.theta-=t}function H(t){m.phi-=t}let oe=function(){let t=new u;return function(n,i){t.setFromMatrixColumn(i,0),t.multiplyScalar(-n),A.add(t)}}(),ne=function(){let t=new u;return function(n,i){e.screenSpacePanning===!0?t.setFromMatrixColumn(i,1):(t.setFromMatrixColumn(i,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(n),A.add(t)}}(),N=function(){let t=new u;return function(n,i){let l=e.domElement;if(e.object.isPerspectiveCamera){let g=e.object.position;t.copy(g).sub(e.target);let p=t.length();p*=Math.tan(e.object.fov/2*Math.PI/180),oe(2*n*p/l.clientHeight,e.object.matrix),ne(2*i*p/l.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(oe(n*(e.object.right-e.object.left)/e.object.zoom/l.clientWidth,e.object.matrix),ne(i*(e.object.top-e.object.bottom)/e.object.zoom/l.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function W(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?b/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function ae(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?b*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function G(t,o){if(!e.zoomToCursor)return;z=!0;let n=e.domElement.getBoundingClientRect(),i=t-n.left,l=o-n.top,g=n.width,p=n.height;y.x=i/g*2-1,y.y=-(l/p)*2+1,te.set(y.x,y.y,1).unproject(e.object).sub(e.object.position).normalize()}function q(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function ie(t){E.set(t.clientX,t.clientY)}function Re(t){G(t.clientX,t.clientX),x.set(t.clientX,t.clientY)}function se(t){T.set(t.clientX,t.clientY)}function Ne(t){P.set(t.clientX,t.clientY),L.subVectors(P,E).multiplyScalar(e.rotateSpeed);let o=e.domElement;I(2*Math.PI*L.x/o.clientHeight),H(2*Math.PI*L.y/o.clientHeight),E.copy(P),e.update()}function Se(t){R.set(t.clientX,t.clientY),O.subVectors(R,x),O.y>0?W(K(O.y)):O.y<0&&ae(K(O.y)),x.copy(R),e.update()}function ke(t){w.set(t.clientX,t.clientY),D.subVectors(w,T).multiplyScalar(e.panSpeed),N(D.x,D.y),T.copy(w),e.update()}function Ie(t){G(t.clientX,t.clientY),t.deltaY<0?ae(K(t.deltaY)):t.deltaY>0&&W(K(t.deltaY)),e.update()}function Ce(t){let o=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?H(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):N(0,e.keyPanSpeed),o=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?H(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):N(0,-e.keyPanSpeed),o=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?I(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):N(e.keyPanSpeed,0),o=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?I(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):N(-e.keyPanSpeed,0),o=!0;break}o&&(t.preventDefault(),e.update())}function re(t){if(c.length===1)E.set(t.pageX,t.pageY);else{let o=S(t),n=.5*(t.pageX+o.x),i=.5*(t.pageY+o.y);E.set(n,i)}}function ce(t){if(c.length===1)T.set(t.pageX,t.pageY);else{let o=S(t),n=.5*(t.pageX+o.x),i=.5*(t.pageY+o.y);T.set(n,i)}}function le(t){let o=S(t),n=t.pageX-o.x,i=t.pageY-o.y,l=Math.sqrt(n*n+i*i);x.set(0,l)}function Ye(t){e.enableZoom&&le(t),e.enablePan&&ce(t)}function _e(t){e.enableZoom&&le(t),e.enableRotate&&re(t)}function ue(t){if(c.length==1)P.set(t.pageX,t.pageY);else{let n=S(t),i=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);P.set(i,l)}L.subVectors(P,E).multiplyScalar(e.rotateSpeed);let o=e.domElement;I(2*Math.PI*L.x/o.clientHeight),H(2*Math.PI*L.y/o.clientHeight),E.copy(P)}function pe(t){if(c.length===1)w.set(t.pageX,t.pageY);else{let o=S(t),n=.5*(t.pageX+o.x),i=.5*(t.pageY+o.y);w.set(n,i)}D.subVectors(w,T).multiplyScalar(e.panSpeed),N(D.x,D.y),T.copy(w)}function de(t){let o=S(t),n=t.pageX-o.x,i=t.pageY-o.y,l=Math.sqrt(n*n+i*i);R.set(0,l),O.set(0,Math.pow(R.y/x.y,e.zoomSpeed)),W(O.y),x.copy(R);let g=(t.pageX+o.x)*.5,p=(t.pageY+o.y)*.5;G(g,p)}function ze(t){e.enableZoom&&de(t),e.enablePan&&pe(t)}function Ke(t){e.enableZoom&&de(t),e.enableRotate&&ue(t)}function me(t){e.enabled!==!1&&(c.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",B),e.domElement.addEventListener("pointerup",C)),Ve(t),t.pointerType==="touch"?be(t):He(t))}function B(t){e.enabled!==!1&&(t.pointerType==="touch"?Fe(t):Ue(t))}function C(t){switch(We(t),c.length){case 0:e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",B),e.domElement.removeEventListener("pointerup",C),e.dispatchEvent(je),s=a.NONE;break;case 1:let o=c[0],n=k[o];be({pointerId:o,pageX:n.x,pageY:n.y});break}}function He(t){let o;switch(t.button){case 0:o=e.mouseButtons.LEFT;break;case 1:o=e.mouseButtons.MIDDLE;break;case 2:o=e.mouseButtons.RIGHT;break;default:o=-1}switch(o){case M.DOLLY:if(e.enableZoom===!1)return;Re(t),s=a.DOLLY;break;case M.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;se(t),s=a.PAN}else{if(e.enableRotate===!1)return;ie(t),s=a.ROTATE}break;case M.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;ie(t),s=a.ROTATE}else{if(e.enablePan===!1)return;se(t),s=a.PAN}break;default:s=a.NONE}s!==a.NONE&&e.dispatchEvent(v)}function Ue(t){switch(s){case a.ROTATE:if(e.enableRotate===!1)return;Ne(t);break;case a.DOLLY:if(e.enableZoom===!1)return;Se(t);break;case a.PAN:if(e.enablePan===!1)return;ke(t);break}}function he(t){e.enabled===!1||e.enableZoom===!1||s!==a.NONE||(t.preventDefault(),e.dispatchEvent(v),Ie(Xe(t)),e.dispatchEvent(je))}function Xe(t){let o=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(o){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!V&&(n.deltaY*=10),n}function Ze(t){t.key==="Control"&&(V=!0,e.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(t){t.key==="Control"&&(V=!1,e.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function Q(t){e.enabled===!1||e.enablePan===!1||Ce(t)}function be(t){switch(ge(t),c.length){case 1:switch(e.touches.ONE){case j.ROTATE:if(e.enableRotate===!1)return;re(t),s=a.TOUCH_ROTATE;break;case j.PAN:if(e.enablePan===!1)return;ce(t),s=a.TOUCH_PAN;break;default:s=a.NONE}break;case 2:switch(e.touches.TWO){case j.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ye(t),s=a.TOUCH_DOLLY_PAN;break;case j.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;_e(t),s=a.TOUCH_DOLLY_ROTATE;break;default:s=a.NONE}break;default:s=a.NONE}s!==a.NONE&&e.dispatchEvent(v)}function Fe(t){switch(ge(t),s){case a.TOUCH_ROTATE:if(e.enableRotate===!1)return;ue(t),e.update();break;case a.TOUCH_PAN:if(e.enablePan===!1)return;pe(t),e.update();break;case a.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ze(t),e.update();break;case a.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ke(t),e.update();break;default:s=a.NONE}}function ye(t){e.enabled!==!1&&t.preventDefault()}function Ve(t){c.push(t.pointerId)}function We(t){delete k[t.pointerId];for(let o=0;o<c.length;o++)if(c[o]==t.pointerId){c.splice(o,1);return}}function ge(t){let o=k[t.pointerId];o===void 0&&(o=new d,k[t.pointerId]=o),o.set(t.pageX,t.pageY)}function S(t){let o=t.pointerId===c[0]?c[1]:c[0];return k[o]}e.domElement.addEventListener("contextmenu",ye),e.domElement.addEventListener("pointerdown",me),e.domElement.addEventListener("pointercancel",C),e.domElement.addEventListener("wheel",he,{passive:!1}),e.domElement.getRootNode().addEventListener("keydown",Ze,{passive:!0,capture:!0}),this.update()}};export{Le as a};
