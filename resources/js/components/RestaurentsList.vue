<template>
    <ul class="list-group list-group-flush">
        <li class="list-item" v-for="restaurant in restaurants" :key="restaurant.name">{{ restaurant.name}}</li>
    </ul>
</template>

<script>
export default {
    name: "RestaurentsList",
    data() {
        return {
            restaurants: [
                {
                    name: 'La vida loca',
                    description: 'Cuisine espagnole',
                    position: {
                        lat: 36.717471,
                        lng: 3.028533
                    }
                },
                {
                    name: 'La cosa nostra',
                    description: 'Cuisine itaienne',
                    position: {
                        lat: 36.717467,
                        lng: 2.953049
                    }
                },
                {
                    name: 'Boubrit',
                    description: 'Cuisine algérienne',
                    position: {
                        lat: 36.682099,
                        lng: 2.918225
                    }
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
