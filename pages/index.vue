<template>
  <div class="landing-container">
    <!-- Header -->
    <section class="section landing">
      <div class="container">
        <header class="landing__header">
          <h1 class="landing__header-text">
            Hi,
            <br>
            <span class="landing__name">I'm Daniel<span class="text--orange">.</span></span>
            <br>
            <div class="landing__subheader text--blue">{{ this.jobTitle }}</div>
          </h1>
          <a class="landing__link" href="/contact"><button class="landing__btn btn--orange btn--outline">Contact
              Me!</button></a>
        </header>
      </div>
      <canvas class="landing__canvas" id="landingCanvas" />
    </section>
    <!-- Header End -->

    <!-- Portfolio Section -->
    <section class="section landing-portfolio">
      <div class="container">
        <div class="landing-portfolio__header">
          <SectionBody class="section__header" title="My Portfolio">
            <p>Here's my work experience. Interested in seeing my projects? Check out <a class="section__work-link"
                href='/work'>my work</a> page.</p>
          </SectionBody>

          <a href="/work" class="landing-portfolio__work-btn btn--orange btn--outline">See projects</a>
        </div>

        <PortfolioPlanet :planet="true" :skills="['LangChain', 'Golang', 'Django', 'DynamoDB', 'Azure', 'Angular', 'NextJS']" title="SourceFuse"
          desc="Used React native-Router to turn the application into Single Page Application and utilized Axios, mobx, Lodash, and Nextjs."
          imgSrc="https://camo.githubusercontent.com/074efab13f1e347846539e047ac1cd10644b19bc611ed15149e7aec0df876312/68747470733a2f2f692e696d6775722e636f6d2f4b4b6f657268622e706e67" gitLink="/work" />

        <PortfolioPlanet :planet="true" :skills="['Blockchain', 'Flask', 'Elixir', 'Azure', 'Flutter', 'GatsbyJS']" title="Umbrella Solution"
          desc="Wrote the entire admin from scratch(PHP), rewrote the main API(PHP), and fixed issues in our slot API(Coffeescript)."
          imgSrc="https://i.imgur.com/vbsylK9.png"
          gitLink="/work" />

        <PortfolioPlanet :planet="true" :skills="['NextJS', 'NuxtJS', 'React Native', 'Tailwind CSS']" title="Medratek"
          desc="Partnered with a team of 5 developers to create 14 e-commerce websites using NestJS and NodeJS in the first month on the job."
          imgSrc="https://camo.githubusercontent.com/074efab13f1e347846539e047ac1cd10644b19bc611ed15149e7aec0df876312/68747470733a2f2f692e696d6775722e636f6d2f4b4b6f657268622e706e67" gitLink="/work" />

          <PortfolioPlanet :planet="true" :skills="['ExpressJS', 'NestJS', 'Laravel', 'MongoDB', 'Redis', 'AWS']" title="Noggins Lab"
          desc="Designed the Backend-API using mongoose with express framework. Connected to the Mongo database using Mongoose"
          imgSrc="https://i.imgur.com/vbsylK9.png" gitLink="/work" />
      </div>
    </section>
    <!-- Portfolio Section End -->

    <!-- About Section -->
    <section class="section landing-about">
      <div class="container">
        <AboutSection class="section__header" />
      </div>
    </section>
    <!-- About Section End -->

    <!-- Contact Section -->
    <section class="section landing-contact">
      <div class="container">
        <SectionBody class="section__header" title="Contact Me">
          <p>If you're looking to collaborate on a project, get in touch about a position, or say hi, feel free to use the
            form below. I'll be in touch with you as soon as I can.</p>
        </SectionBody>

        <ContactForm class="landing-contact__form" />
      </div>
    </section>
    <!-- Contact Section  End -->

    <!-- Footer -->
    <footer class="footer">
      <p>Designed and Developed By Daniel Evans</p>
    </footer>
    <!-- Footer End -->
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'IndexPage',
  methods: {
    // THREE.JS Landing Page Scenes
    generateScene1() {
      let mouse = new THREE.Vector2();

      document.addEventListener('mousemove', onDocumentMouseMove, false);

      function onDocumentMouseMove(event) {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }

      const canvas = document.querySelector('#landingCanvas');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

      renderer.setClearColor(0x0b0c0d);

      const fov = 75;
      const aspect = 2;
      const near = 0.1;
      const far = 100;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

      camera.position.z = 5.5;
      camera.position.x = -2;

      const scene = new THREE.Scene();

      const geometry = new THREE.OctahedronGeometry(2.75, 2);
      const geometry2 = new THREE.OctahedronGeometry(1.5, 3);

      const material = new THREE.MeshBasicMaterial({ color: 0xd88b0f, wireframe: true });
      const material2 = new THREE.MeshBasicMaterial({ color: 0x111111 });


      const sphere = new THREE.Mesh(geometry, material);
      const sphere2 = new THREE.Mesh(geometry2, material2);

      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);

      scene.add(sphere);
      scene.add(sphere2);

      renderer.setPixelRatio(window.devicePixelRatio * 5);
      renderer.render(scene, camera);

      function render(time) {
        time *= 0.001;

        sphere.rotation.x = time / 3;
        sphere.rotation.y = time / 3;

        sphere2.rotation.x = -time / 2;
        sphere2.rotation.y = -time / 2;


        sphere.position.lerp(new THREE.Vector3(mouse.x, mouse.y + Math.sin(time * 2) * 0.75, sphere2.z), 0.01);
        sphere2.position.lerp(new THREE.Vector3(mouse.x, mouse.y + Math.sin(time * 2) * 0.5, sphere2.z), 0.2)

        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();

        renderer.render(scene, camera);

        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    },
    generateScene2() {
      let mouse = new THREE.Vector2();

      document.addEventListener('mousemove', onDocumentMouseMove, false);

      function onDocumentMouseMove(event) {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }

      const canvas = document.querySelector('#landingCanvas');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

      renderer.setClearColor(0x0b0c0d);
      const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 100);

      camera.position.set(2, -3, 5)

      const scene = new THREE.Scene();

      class CustomCircleCurve extends THREE.Curve {

        constructor(scale = 1) {
          super();
          this.scale = scale;
        }

        getPoint(t, optionalTarget = new THREE.Vector3()) {
          const tx = Math.cos(2 * Math.PI * t);
          const ty = Math.sin(2 * Math.PI * t);
          const tz = 0;
          return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
        }

      }

      // Int -> THREE.Mesh[] Int[]
      // produces a number of rings based on the given int

      const getRingList = n => {
        let ringArray = [];
        let ringRadArray = [];

        for (let i = 2; i < n + 2; i++) {
          const radius = i + (i * (i / 5));

          const path = new CustomCircleCurve(radius);
          const geometry = new THREE.TubeGeometry(path, 96, 0.015, 8, false);
          const material = new THREE.MeshBasicMaterial({ color: 0x1F3B58 });

          material.transparent = true;
          material.opacity = 1 / i;

          const ring = new THREE.Mesh(geometry, material);

          ringRadArray.push(radius);
          ringArray.push(ring);
        }

        return [ringArray, ringRadArray];
      }

      const [rings, ringsRadius] = getRingList(15);

      const geometry = new THREE.SphereGeometry(1.4, 30, 30);
      const material = new THREE.MeshBasicMaterial({ color: 0xd88b0f });
      const sphere = new THREE.Mesh(geometry, material);

      const geometry2 = new THREE.SphereGeometry(0.2, 30, 30);
      const material2 = new THREE.MeshBasicMaterial({ color: 0x163E66 });
      const sphere2 = new THREE.Mesh(geometry2, material2);

      const light = new THREE.DirectionalLight(0xFFFFFF, 1);
      light.position.set(-2, 1, 5);
      scene.add(light);

      scene.add(sphere);
      scene.add(sphere2);

      rings.forEach(ring => {
        scene.add(ring);
      });

      renderer.setPixelRatio(window.devicePixelRatio * 4);
      renderer.render(scene, camera);

      let offsetX = 1;
      let offsetY = -4;

      // start planet in correct position
      sphere2.position.lerp(new THREE.Vector3(Math.cos(0) * ringsRadius[0], Math.sin(0) * ringsRadius[0], mouse.y), 1);

      function render(time) {
        time *= 0.001;

        const bounce = Math.sin(time / 5) / 3;

        sphere.position.lerp(new THREE.Vector3(sphere.x, sphere.y, mouse.y + bounce), 0.05);

        camera.position.lerp(new THREE.Vector3(-mouse.x + offsetX, -mouse.y + bounce + offsetY, camera.position.z), 0.02);


        rings.forEach((ring, i) => {
          const LERP_SPEED = (0.005 * rings.length) / ((i + 1) * 2);

          ring.position.lerp(new THREE.Vector3(ring.x, ring.y, mouse.y + bounce), LERP_SPEED);
          // object.materials[0].opacity = 1 + Math.sin(new Date().getTime() * .0025);//or any other value you like
          if (i == 0) {
            sphere2.position.lerp(new THREE.Vector3(Math.cos(time / 1.5) * ringsRadius[i], Math.sin(time / 1.5) * ringsRadius[i], mouse.y + bounce), LERP_SPEED);
          }
        });


        camera.lookAt(new THREE.Vector3(sphere.position.x - 2, sphere.position.y + 1, sphere.position.z));

        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();

        renderer.render(scene, camera);
        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    },

    // Page Functions
    updateMouse() {
      const mouseEl = document.querySelector('#mouseEl');
      document.addEventListener('mousemove', onDocumentMouseMove, false);

      function onDocumentMouseMove(event) {
        event.preventDefault();
        mouseEl.style.left = `${event.pageX}px`;
        mouseEl.style.top = `${event.pageY}px`;
      }
    },

    animateJobTitle() {
      const index = Math.floor(Math.random() * this.titleList.length - 1);

      // get title from list but dont include already selected title
      let selectedTitle = this.titleList.filter(el => el !== this.jobTitle)[index].split('');

      // set title to first character to keep up content spacing
      this.jobTitle = selectedTitle.shift();

      for (let i = 1; i < selectedTitle.length + 1; i++) {
        let interval = 50 * i;
        setTimeout(() => {
          this.jobTitle += selectedTitle.shift();
        }, interval);
      }

    }
  },
  mounted: function () {
    // this.generateScene1();
    this.generateScene2();
    // this.updateMouse();
    let jobTitalInterval = setInterval(() => {
      this.animateJobTitle()
    }, 5000)
  },
  data() {
    return {
      jobTitle: 'Full-Stack Engineer',
      titleList: ['Software Engineer', 'Software Architect', 'Back-End Developer', 'Front-End Developer', 'Web Developer', 'Mobile Developer', 'Fast Learner']
    }
  },
  head() {
    return {
      title: `Daniel Evans | ${this.jobTitle}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Hey There! I\'m a Creative Software Developer with a passion for designing and building applications. Looking to collab? Check out my portfolio and get in touch.'
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/landing';
</style>