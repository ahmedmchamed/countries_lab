import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            countries: [],
            countryInfo: null
        },
        mounted() {
            fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => this.countries = data)
            .then(list => list.sort(function (a,b) { return a.population - b.population; }))
        },
        computed: {
            totalPopulation: function () {
                return this.countries.reduce((runningTotal, country) => {
                    return runningTotal + country.population;
                }, 0)
            },
            filteredCountrys: functio

        },
        methods: {
            countrySelected: function (event) {
                this.countryInfo = event.target.value
            }
        }
    });
});
