import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            countries: [],
            selectedCountryName: "",
            favouriteCountries: []
        },
        mounted() {
            fetch("https://restcountries.eu/rest/v2/all")
                .then(response => response.json())
                .then(data => this.countries = data)
                .then(list => list.sort(function (a, b) { return a.population - b.population; }))
        },
        computed: {
            totalPopulation: function () {
                return this.countries.reduce((runningTotal, country) => {
                    return runningTotal + country.population;
                }, 0)
            },
            selectedCountry: function () {
                return this.countries.find((country) => {
                    return country.name === this.selectedCountryName;
                })
            }
        },
        methods: {
            countrySelected: function (event) {
                this.selectedCountryName = event.target.value
            },
            favouriteCountry: function () {
                if (event.target.checked) {
                    // console.log(this.selectedCountry.name)
                    this.favouriteCountries.push(this.selectedCountry)
                }
            }
        }
    });
});
