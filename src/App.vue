<template>
  <div>
    <!-- Barre de navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Recettes</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/ajouter">Ajouter une Recette</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/list">Liste des Recettes</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Contenu de la page -->
    <div class="container mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
</script>

<style scoped>
h2 {
  text-align: center;
}

.table th,
.table td {
  vertical-align: middle;
}

.table td ul {
  padding-left: 1.2rem;
}

.btn-link {
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
}

.btn-link:hover {
  color: #0056b3;
}

.btn-link.text-danger {
  color: #dc3545;
}

.btn-link.text-danger:hover {
  color: #c82333;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-brand {
  font-weight: bold;
}

.nav-link {
  color: white;
}

.nav-link:hover {
  color: lightgray;
}
</style>
