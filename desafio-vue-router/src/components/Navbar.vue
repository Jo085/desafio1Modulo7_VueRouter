<template lang="">
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container px-4">
      <router-link  class="navbar-brand" to="/"><img src="../assets/img/logo.png" alt="logo de suricata" /></router-link>
      <button class="navbar-toggler navbar-dark border-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <!-- Items -->
          <router-link class="nav-link active text-light" aria-current="page" to="/">Inicio</router-link>
          <router-link class="nav-link text-light" :to="{name:'productos'}">Productos</router-link>
          <router-link class="nav-link text-light" :to="{name:'contacto'}">Contacto</router-link>          
        </ul>
      </div>
    </div>
  </nav>
</template>
