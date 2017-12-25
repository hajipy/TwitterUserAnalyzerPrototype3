import Vue from "vue";

/* tslint:disable:object-literal-sort-keys */
const app = new Vue({
    el: "#app",
    data: {
        state: "no-analyazed",
        analyzeScreenName: "",
        analyzeProgresses: [],
        followEachOther: [
            1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
           11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
           21, 22, 23, 24, 25
        ],
        showFollowEachOther: false,
        followedOnly: [
            1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
           11, 12, 13, 14, 15, 16, 17, 18
        ],
        showFollowedOnly: false,
        followOnly: [
            1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
           11, 12, 13, 14
        ],
        showFollowOnly: false,
    },
    methods: {
        analyze() {
            console.log(this.$data.analyzeScreenName);
            this.$data.state = "analyzing";
            this.$data.analyzeProgresses.push(`Analyzing ${this.$data.analyzeScreenName} ...`);

            setTimeout(() => {
                this.$data.analyzeProgresses.push(`Analyzing (1/3) ...`);
            }, 1000);

            setTimeout(() => {
                this.$data.analyzeProgresses.push(`Analyzing (2/3) ...`);
            }, 2000);

            setTimeout(() => {
                this.$data.analyzeProgresses.push(`Analyzing (3/3) ...`);
            }, 3000);

            setTimeout(() => {
                this.$data.analyzeProgresses.push(`Analyzing finish!!`);
            }, 4000);

            setTimeout(() => {
                this.$data.analyzeProgresses.splice(0, this.$data.analyzeProgresses.length);
                this.$data.state = "analyzed";
            }, 4500);
        }
    }
});
/* tslint:enable:object-literal-sort-keys */
