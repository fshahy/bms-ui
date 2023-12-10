<script>
    export default {
        data() {
            return {
                customers: []
            }
        },

        computed() {
        },

        created() {
            fetch("http://localhost:8080/customers")
                .then(response => response.json())
                .then(data => this.customers = data)
        }
    }
</script>

<template>
    <table class="border border-solid table-auto">
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
            </tr>
        </thead>

        <tbody>
            <tr v-for="customer in customers" v-bind:key="customer.id">
                <td>{{ customer.id }}</td>
                <td>{{ customer.name }}</td>
            </tr>
        </tbody>
    </table>
</template>
