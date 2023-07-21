AFRAME.registerComponent('model-opacity', {
    schema: {
      default: 1.0
    },
    init() {
      this.el.addEventListener('model-loaded', this.update.bind(this))
    },
    update() {
      const MESH = this.el.getObject3D('mesh')
      const {
        data
      } = this
      if (!MESH) {
        return
      }
      MESH.traverse((node) => {
        if (node.isMesh) {
          node.material.opacity = data
          node.material.transparent = data < 1.0
          node.material.needsUpdate = true
        }
      })
    },
  })