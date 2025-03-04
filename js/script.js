const { createApp } = Vue

createApp({
    data() {
        return {
            images: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            active_img: 0,
            autoplayInterval: null
        }
    },
    methods: {
        nextImage() {
            if (this.active_img == this.images.length - 1) {
                this.active_img = 0
            } else {
                this.active_img++
            }
        },

        prevImage() {
            if (this.active_img == 0) {
                this.active_img = this.images.length - 1
            } else {
                this.active_img--
            }
        },

        setActiveImage(index) {
            this.active_img = index
        },

        autoPlay() {
            if (this.autoplayInterval === null) {
                this.autoplayInterval = setInterval(this.nextImage, 3000);
            }
        },

        removeAutoPlay() {
            if (this.autoplayInterval !== null) {
                clearInterval(this.autoplayInterval);
                this.autoplayInterval = null;
            }
        },

        reverseAutoPlay() {
            this.removeAutoPlay()
            this.autoplayInterval = setInterval(this.prevImage, 3000)
        }

    }
}).mount('#app')