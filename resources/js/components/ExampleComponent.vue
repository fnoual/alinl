<template>
    <div class="card border-light shadow-sm " style="width: 520px">
        <div class="card-header">Trouvez un réstaurant</div>

        <div class="card-body p-6">
            <div v-if="userLoc">
                Ma localisation : <br>
                <strong>{{ userLoc }}</strong>
                <a href="#" @click="changeMyLoc">Modifier</a>
                <GMapMap
                    :center="{lat: userLoc[0], lng: userLoc[1]}"
                    :zoom="14"
                    map-type-id="roadmap"
                    style="width: 100vw; height: 900px"
                >
                    <GMapMarker
                        :key="index"
                        v-for="(m, index) in restaurants"
                        :position="m.position"
                        :clickable="true"
                    />
                </GMapMap>
            </div>
            <div class="d-flex flex-column" v-else>
                <a href="#" class="btn btn-link" @click="localizeMe">Localisez-moi</a>
                <span>
                    Ou
                </span>

                <input type="text" class="form-control border-light shadow-sm" placeholder="Indiquer un lieu" autofocus>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userLoc: null,
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
    },
    mounted() {
        // Vérifier si la latitude et longitude sont dans le localstorage
        if (localStorage.getItem('userLoc')) {
            this.userLoc = JSON.parse(localStorage.getItem('userLoc'))
        } else {
            // si inexistante lire et écrire
            this.localizeMe()
        }

        console.log(this.userLoc)
    },
    methods: {
        localizeMe() {
            navigator.geolocation.getCurrentPosition(pos => {
                localStorage.setItem('userLoc', JSON.stringify([pos.coords.latitude, pos.coords.longitude]))
            })
        },
        changeMyLoc() {

        }
    }
}
</script>
