import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import * as THREE from 'three';

@Component({
  selector: 'app-user-image-threed',
  templateUrl: './user-image-threed.component.html',
  styleUrl: './user-image-threed.component.css'
})
export class UserImageThreedComponent implements AfterViewInit{
  @ViewChild('rendererCanvas', { static: false }) 
  rendererCanvas!: ElementRef<HTMLCanvasElement>;

  // private scene!: THREE.Scene;
  // private camera!: THREE.PerspectiveCamera;
  // private renderer!: THREE.WebGLRenderer;
  // private cube!: THREE.Mesh;
  
  ngAfterViewInit(): void {
    this.init3DScene();
    this.animate();
  }

  public onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if(target.files && target.files.length > 0) {
      const file = target.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const imageUrl = e.target?.result as string;
        this.loadTexture(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  }

  private init3DScene() {
    // this.scene = new THREE.Scene();
    // this.camera = new THREE.PerspectiveCamera(75, 
    //   this.rendererCanvas.nativeElement.width / this.rendererCanvas.nativeElement.height, 0.1, 1000);
    // // this.camera.position.set(0, 0, 5);
    // // this.camera.lookAt(this.scene.position);  
    // this.camera.position.z = 5;
    
    // this.renderer = new THREE.WebGLRenderer({
    //   canvas: this.rendererCanvas.nativeElement
    // });

    // this.renderer.setSize(this.rendererCanvas.nativeElement.width, this.rendererCanvas.nativeElement.height);

    // const geometry = new THREE.PlaneGeometry(3, 3);
    // const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    // this.cube = new THREE.Mesh(geometry, material);
    // // this.cube.position.set(0, 0, 0);
    // // this.cube.rotation.x = -Math.PI / 2;
    // this.scene.add(this.cube);
  }

  private animate() {
    // requestAnimationFrame(() => this.animate());
    // this.renderer.render(this.scene, this.camera);
  }

  public loadTexture(imageUrl: string) {
    // const textureLoader = new THREE.TextureLoader();
    // textureLoader.load(imageUrl, (texture) => {
    //   const material = this.cube.material as THREE.MeshBasicMaterial;
    //   material.map = texture;
    //   material.needsUpdate = true;
    // });
  }
}
