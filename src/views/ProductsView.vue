<script>
    export default {
        data() {
            return {
                products: []
            }
        },

        computed: {
        },

        created() {
            fetch("http://localhost:8080/products")
                .then(response => response.json())
                .then(data => this.products = data);
        }
    }
</script>

<template>
    <table class="border border-solid table-auto">
        <thead>
            <tr>
                <td>ID</td>
                <td>Code</td>
                <td>Name</td>
            </tr>
        </thead>

        <tbody>
            <tr v-for="product in products" v-bind:key="product.it">
                <td>{{ product.id }}</td>
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
            </tr>
        </tbody>
    </table>
</template>
