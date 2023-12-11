<script>
    export default {
        data() {
            return {
                products: [],
                listView: true,
                formView: false,
                currentProduct: {},
            }
        },

        computed: {
        },

        created() {
            fetch("http://localhost:8080/products")
                .then(response => response.json())
                .then(data => this.products = data);
        },

        methods: {
            showForm(product) {
                this.listView = false;
                this.formView = true;
                this.currentProduct = product;
            },
            showList() {
                this.formView = false;
                this.listView = true;
            }
        },

    }
</script>

<template>
    <div v-show="listView">
        <div class="p-2    bg-black text-white flex space-x-4">
            <button>New</button>
            <button>Search</button>
        </div>
        <hr />
        <table  class="w-full p-8 border border-solid table-auto">
            <thead class="bg-gray-200">
                <tr class="font-bold">
                    <td>ID</td>
                    <td>Code</td>
                    <td>Name</td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="product in products" v-bind:key="product.id" @click="this.showForm(product)" class="border border-solid hover:bg-sky-700">
                    <td>
                        <div class="underline">{{ product.id }}</div>
                    </td>
                    <td>
                        <div class="underline">{{ product.code }}</div>
                    </td>
                    <td>
                        <div class="underline">{{ product.name }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>


    <div v-show="formView">
        <div class="p-2 bg-black text-white flex space-x-4">
            <button @click="this.showList" class="underline">Show List</button>
            <button>Save</button>
            <button>Delete</button>
        </div>
        <hr />
        <table class="w-full">
            <thead class="bg-gray-200">
                <tr class="font-bold">
                    <td>ID</td>
                    <td>Code</td>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ this.currentProduct.id }}</td>
                    <td>{{ this.currentProduct.code }}</td>
                    <td>{{ this.currentProduct.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
