import * as THREE from "three";

export class Planet {
    public mesh: THREE.Mesh;
    private geometry: THREE.SphereGeometry;
    private material: THREE.MeshStandardMaterial;

    constructor(radius: number, color: number) {
        this.geometry = new THREE.SphereGeometry(radius, 32, 32);
        this.material = new THREE.MeshStandardMaterial({ color: color });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }
}