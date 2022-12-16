// import Typewriter from 'typewriter-effect/dist/core';

let typing = document.querySelector('.typing')

let introTypewriter = new Typewriter(typing, {
  loop: true
});

introTypewriter.typeString('Hello world')
.pauseFor(1000)
.deleteAll()
.typeString('Привет мир')
.pauseFor(1000)
.deleteAll()
.typeString('Hola mundo')
.pauseFor(1000)
.deleteAll()
.typeString('Bonjour le monde')
.pauseFor(1000)
.deleteAll()
.typeString('Ciao mondo')
.pauseFor(1000)
.deleteAll()
.typeString('你好世界')
.pauseFor(1000)
.deleteAll()
.typeString('Hallo welt')
.pauseFor(1000)
.deleteAll()
.typeString('مرحبا بالعالم')
.pauseFor(1000)
.deleteAll()
.typeString('Halo dunia')
.pauseFor(1000)
.deleteAll()
.typeString('नमस्ते दुनिया')
.pauseFor(1000)
.deleteAll()
.typeString('こんにちは世界')
.pauseFor(1000)
.deleteAll()
.typeString('Are you still here reading this?')
.pauseFor(2000)
.start();
