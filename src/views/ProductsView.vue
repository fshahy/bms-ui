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
            },
            selectProduct(product, event) {
                if(event) {
                    event.stopPropagation();
                }
            }
        },

    }
</script>

<template>
    <div v-if="listView">
        <div class="p-2    bg-black text-white flex space-x-4">
            <button>New</button>
            <button>Search</button>
            <button>Delete</button>
        </div>
        <hr />
        <table  class="w-full p-8 mt-2 border border-solid table-auto">
            <thead class="bg-gray-200">
                <tr class="font-bold">
                    <td></td>
                    <td>ID</td>
                    <td>Code</td>
                    <td>Name</td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="product in products" v-bind:key="product.id" @click="this.showForm(product)" class="border border-solid hover:bg-sky-700">
                    <td class="p-1">
                        <input @click="this.selectProduct(product, $event)" type="checkbox" name="" id="{{ product.id }}">
                    </td>
                    <td class="p-1">
                        <div class="underline">{{ product.id }}</div>
                    </td>
                    <td class="p-1">
                        <div class="underline">{{ product.code }}</div>
                    </td>
                    <td class="p-1">
                        <div class="underline">{{ product.name }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>


    <div v-if="formView">
        <div class="p-2 bg-black text-white flex space-x-4">
            <button @click="this.showList" class="underline">Show List</button>
            <button>Save</button>
            <button>Delete</button>
        </div>
        <hr />

        <div class="mt-2">
            <label for="product_id" class="font-bold">ID:</label>
            <input type="text" id="product_id" name="product_id" :value="this.currentProduct.id" disabled class="mx-2 border rounded">

            <label for="product_code" class="font-bold">Code:</label>
            <input type="text" id="product_code" name="product_code" :value="this.currentProduct.code" class="mx-2 border rounded">

            <label for="product_name" class="font-bold">Name:</label>
            <input type="text" id="product_name" name="product_name" :value="this.currentProduct.name" class="mx-2 border rounded">
        </div>
    </div>
</template>

<style>
</style>
