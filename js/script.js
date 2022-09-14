const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

const INTERVAL_SECONDS = 3;

const app = new Vue(
    {
        el: '#app',
        data: {
            activeIndex: 0,
            slides,
            intervalId: undefined
        },
        /* created e mounted fanno partire la funzione al caricamento della pagina
            created quando non è nel DOM, mounted quando è nel DOM
        created: function(){
            setInterval(this.nextIndex, INTERVAL_SECONDS * 1000);
        },
        */
        mounted() {
            this.createInterval()
        },
        methods: {
            deleteInterval() {
                if (this.intervalId) {
                    clearInterval(this.intervalId)
                }
            },
            createInterval() {
                this.intervalId = setInterval(this.nextIndex, INTERVAL_SECONDS * 1000);
            },
            previousIndex: function () {
                this.activeIndex === 0 ? this.activeIndex = slides.length - 1 : this.activeIndex--;
            },
            nextIndex: function () {
                this.activeIndex === slides.length - 1 ? this.activeIndex = 0 : this.activeIndex++;
            },
            onNextClick() {
                this.nextIndex();
                this.deleteInterval();
                this.createInterval();
            },
            onPrevClick() {
                this.previousIndex();
                this.deleteInterval();
                this.createInterval();
            },
            getImage: function (thumbIndex) {
                this.activeIndex = thumbIndex;
                this.deleteInterval();
                this.createInterval();
            }
        }
    }
)

