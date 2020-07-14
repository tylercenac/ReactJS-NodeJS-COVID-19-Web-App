class Summary {
    constructor(totalCases, totalDeath, casesInLast7Days, ratePer100K) {
        this.totalCases = Math.trunc(totalCases);
        this.totalDeath = Math.trunc(totalDeath);
        this.casesInLast7Days = Math.trunc(casesInLast7Days);
        this.ratePer100K = Math.trunc(ratePer100K);
        this.avgCasesPerDay = Math.trunc(this.casesInLast7Days / 7);        
    }
 }

 module.exports = Summary;