/**
 * Created by zhulinhai on 17/10/17.
 */
var camera, controls, scene, renderer, object, objY, posY;

function page2Init() {

    posY = 50;
    objY = 0;
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({canvas: document.getElementById('3dCanvas'), antialias:true, precision:"highp", alpha:true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    // 添加相机
    camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set(50, posY, 50);//相机位置
    camera.lookAt(new THREE.Vector3(0, 1, 0));

    // 添加控制器
    // controls = new THREE.OrbitControls( camera, renderer.domElement );
    // controls.enableZoom = false;
    // controls.target.set(0,1,0);
    // controls.autoRotate = true;

    // 添加圆环
    var textureLoader = new THREE.TextureLoader();
    textureLoader.load( 'images/2-ring.png', function ( texture ) {
        // 创建平面的骨架
        var planeGeometry = new THREE.PlaneGeometry(90,90);
        // 创建平面的材料
        var planeMaterial = new THREE.MeshBasicMaterial({map:texture, transparent : true});
        // 合成平面
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);

        // 设置平面的位置
        plane.position.x = 0;
        plane.position.y = 10;
        plane.position.z = 0;
        plane.rotation.x = -0.5*Math.PI;
        // 在场景中添加平面
        scene.add(plane);

    });

    var loader = new THREE.OBJLoader();//在init函数中，创建loader变量，用于导入模型
    loader.load('images/lifangti.obj', function(obj) {//第一个表示模型路径，第二个表示完成导入后的回调函数，一般我们需要在这个回调函数中将导入的模型添加到场景中
        obj.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material.side = THREE.DoubleSide;
            }
        });

        var material = new THREE.MeshBasicMaterial({
            color: 0Xffffff
        });

        loader = new THREE.TextureLoader();
        loader.load( 'images/lifangtitietu.jpg', function ( texture ) {
            material.map = texture;
            obj.children[0].material = material;
            obj.children[0].geometry.center();
            obj.scale.set(4.5,4.5,4.5);
            scene.add(obj);//将导入的模型添加到场景中
            object = obj;
            animate();
        });
    });

    // window.addEventListener( "resize", onWindowResize, false );
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {
    requestAnimationFrame( animate );

    object.rotation.y = objY * 0.01;
    camera.position.y = posY;
    camera.lookAt(new THREE.Vector3(0, 1, 0));
    // controls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true
    renderer.render( scene, camera );
}
