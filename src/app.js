import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            countries: [
                { name: "Country1", population: 600 },
                { name: "Country2", population: 750 },
                { name: "Country3", population: 200 },
                { name: "Country4", population: 1200 }
            ]
        },
        mounted() {
            fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => this.countries = data);
        },
        computed: {

        },
        methods: {

        }
    });
});
