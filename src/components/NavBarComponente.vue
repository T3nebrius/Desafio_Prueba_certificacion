<template>
    <nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Flora y Fauna de Chile</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="/principal">
                            Buscar
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="/contacto">
                            Contacto
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
}
</script>
<style scoped lang="scss">
.navbar {
    a {
        font-weight: bold;
        color: #2c3e50;
        &.active {
            color: #42b983;
        }
    }
}
</style>