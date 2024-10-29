<script>
export default {
    props: {
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        cantidad: { 
            type: String,
            required: true
        },
    },   
};
</script>

<template lang="">

    <div class="container p-5 mx-5 mt-4"> 
            <!-- Título -->
            <h1 class="my-4">
            Productos
            </h1>

            <div class="row">      
                <div class="col-sm-4 col-12 px-5 mb-3">
                <!-- Card -->
                    <div class="card mb-4">
                        <img src="../assets/img/desayunos.jpg" class="card-img-top" alt="colaciones" />
                        <div class="card-body">
                            <!-- Nombre -->
                            <h5 class="card-title fw-bold">{{nombre}}</h5>
                            <!-- Descripción -->
                            <p class="card-text">
                            {{ descripcion}}
                            </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <!-- Precio -->
                            <li class="list-group-item">Precio: ${{precio}}</li>
                            <!-- Cantidad -->
                            <li class="list-group-item">Cantidad: {{cantidad}}</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">Ver más</a>
                            <a href="#" class="card-link">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
             <!-- enlace de redirección -->
            <button class="btn btn-warning">
                <router-link class=" buttonText fw-bold" to='/'>Volver al inicio</router-link>
            </button>
        </div> 

</template>
