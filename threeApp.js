import * as THREE from 'three'

// class中想赋予自身什么东西都要用到this
export default class Three_App {
  // class里面直接就是变量，不需要用const锁定
  renderer = new THREE.WebGLRenderer({
    antialias: true, // 抗锯齿
  });

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75, // FOV: 视角
    window.innerWidth / window.innerHeight, // aspect: 长宽比
    0.1, // near: 最近的渲染距离
    1000 // far: 最远的渲染距离
  );

  model = null;

  // 做初始化
  constructor() {
    this.init();
    this.animate();
  }

  // init调用rendererSetting和cameraSetting
  init = () => {
    this.rendererSetting();
    this.cameraSetting();
  };

  rendererSetting = () => {
    // 注意前面要加this
    // 设置渲染器的大小
    this.renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

    // 设置domElement的id
    this.renderer.domElement.id = "threejs_scene";

    // 将渲染器的domElement添加到页面中
    document
      .querySelector("#app")
      .appendChild(this.renderer.domElement);
  };

  // 设置camera的距离
  cameraSetting = () => {
    this.camera.position.z = 5; // 设定相机的位置
  };

  // 渲染
  render = () => {
    this.renderer.render(this.scene, this.camera);
  };

  // 渲染动画animate
  animate = () => {
    requestAnimationFrame(this.animate);
    if(this.model?.animate) this.model.animate()
    // 加载模型
    this.render();
  };

  addMesh = (mesh) => {
    this.scene.add(mesh);
  }

  addModel = (model) => {
    this.model = model;
    if (model?.mesh) this.scene.add(model.mesh);
  };
}