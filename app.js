

const app = {
    data() {
        return {
            gross: "0.00",

        }

    },
    computed: {
        afterGST() {
            return (Number(this.gross) / 1.1).toFixed(2);
        },
        incomeAfterTax() {
            return (Number(this.afterGST * .74)).toFixed(2);
        },
        gst() {
            return (Number(this.afterGST) * .1).toFixed(2);
        },
        tax() {
            return (Number(this.afterGST * .26)).toFixed(2);
        }

    },
    methods: {

    }

}
Vue.createApp(app).mount('#app')
