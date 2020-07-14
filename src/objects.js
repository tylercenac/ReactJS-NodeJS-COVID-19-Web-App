// I realized too late that I can use less classes by creating one class to be used in most cases, but I did not have enough time to implement and test this

class TotalRecoveredCases {
  constructor(
    country,
    newConfirmed,
    totalConfirmed,
    newRecovered,
    totalRecovered,
    newDeaths,
    totalDeaths
  ) {
    //this data is used for the assignment
    this.country = country;
    this.totalRecovered = totalRecovered;

    //this data is used for ui
    this.ui = totalRecovered;
    this.newConfirmed = newConfirmed;
    this.totalConfirmed = totalConfirmed;

    this.newRecovered = newRecovered;
    this.newDeaths = newDeaths;
    this.totalDeaths = totalDeaths;
  }
}

class NewConfirmedCases {
  constructor(
    country,
    newConfirmed,
    totalConfirmed,
    newRecovered,
    totalRecovered,
    newDeaths,
    totalDeaths
  ) {
    this.country = country;
    this.newConfirmed = newConfirmed;

    //this data is used for ui
    this.ui = newConfirmed;
    this.totalConfirmed = totalConfirmed;
    this.newRecovered = newRecovered;
    this.totalRecovered = totalRecovered;
    this.newDeaths = newDeaths;
    this.totalDeaths = totalDeaths;
  }
}

class TotalConfirmedCases {
  constructor(
    country,
    newConfirmed,
    totalConfirmed,
    newRecovered,
    totalRecovered,
    newDeaths,
    totalDeaths
  ) {
    this.country = country;
    this.totalConfirmed = totalConfirmed;

    //this data is used for ui
    this.ui = totalConfirmed;
    this.newConfirmed = newConfirmed;
    this.newRecovered = newRecovered;
    this.totalRecovered = totalRecovered;
    this.newDeaths = newDeaths;
    this.totalDeaths = totalDeaths;
  }
}

class PercentageOfTotalCases {
  constructor(
    globalConfirmed,
    country,
    newConfirmed,
    totalConfirmed,
    newRecovered,
    totalRecovered,
    newDeaths,
    totalDeaths
  ) {
    this.country = country;
    this.percentageOfTotalConfirmedCases = totalConfirmed / globalConfirmed;

    //this data is used for ui
    this.ui = totalConfirmed / globalConfirmed;
    this.newConfirmed = newConfirmed;
    this.totalConfirmed = totalConfirmed;
    this.newRecovered = newRecovered;
    this.totalRecovered = totalRecovered;
    this.newDeaths = newDeaths;
    this.totalDeaths = totalDeaths;
  }
}

module.exports = {
  TotalRecoveredCases: TotalRecoveredCases,
  NewConfirmedCases: NewConfirmedCases,
  TotalConfirmedCases: TotalConfirmedCases,
  PercentageOfTotalCases: PercentageOfTotalCases
};
