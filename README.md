# cic2020interns_wk2 - Implementing COVID-19 API
## Node.js Mini-Challenge
https://api.covid19api.com/

## Steps
1. Create new repository from https://github.ibm.com/Jamie-Scott-Richardson/cic2020interns_wk2.git (Same instructions from Week 1)
2. Add your certificate of completion for **Serverless Framework Bootcamp: Node.js, AWS & Microservices** to the **/certs** directory
3. Create new Node.js application exposing APIs #1, #2, and #3 and add your source code to **/src** directory (Remember: npm install)
4. Invoke/test APIs from Postman to ensure functionality
5. Commit and push your changes to your master branch
6. Create a new branch name **feature_api_4** from your master branch
7. Add API #4 to your new feature branch
8. Invoke/test all 4 APIs from Postman to ensure functionality
9. Commit and push your changes to your feature branch
10. Create a pull request, in GitHub, merging your feature branch's changes into your master branch

![alt text](https://media.github.ibm.com/user/203313/files/fcbbc300-b5f5-11ea-9d3e-f5aa66402e51)

## For the Demo
You will be required to clone a new copy of your master branch to your local and start your Node.js service.

## Deliverables
Use: https://api.covid19api.com/summary

### 1. API 1 - Top 10 countries with highest total recovered cases
The API should be accessible via the following endpoint: **GET http://:::8081/totalrecovered**

Example Response:
```
[
    {
		"country": "Country B",
		"totalRecoveredCases": 97
	},
	{
		"country": "Country C",
		"totalRecoveredCases": 97
	},
	{
		"country": "Country A",
		"totalRecoveredCases": 90
	},
	{
		"country": "Country D",
		"totalRecoveredCases": 72
	}
]
```

### 2. API 2 - Top 10 countries with lowest new confirmed cases
The API should be accessible via the following endpoint: **GET http://:::8081/newconfirmed**

Example Response:
```
[
    {
		"country": "Country B",
		"newConfirmedCases": 1
	},
	{
		"country": "Country C",
		"newConfirmedCases": 5
	},
	{
		"country": "Country D",
		"newConfirmedCases": 5
	},
	{
		"country": "Country A",
		"newConfirmedCases": 7
	}
]
```

### 3. API 3 - Percentage between country with highest total confirmed cases and country with lowest total confirmed cases
The API should be accessible via the following endpoint: **GET http://:::8081/differenceconfirmed**

Example Response:
```
[{
	"countryWithHighest": "Country B",
	"countryWithLowest": "Country G",
	"difference": 0.67
}]
```

### 4. API 4 - Percentage of total confirmed cases by country
The API should be accessible via the following endpoint: **GET http://:::8081/percentageconfirmed**

Example Response:
```
[
    {
		"country": "Country A",
		"percentageOfTotalConfirmedCases": 0.096
	},
	{
		"country": "Country B",
		"percentageOfTotalConfirmedCases": 0.056
	},
	{
		"country": "Country C",
		"percentageOfTotalConfirmedCases": 0.058
	},
	{
		"country": "Country D",
		"percentageOfTotalConfirmedCases": 0.078
	}
]
```

## Snippets
The **/snippets** directory contains useful examples.

## Links
- **API** - https://api.covid19api.com/summary
- **Creating a pull request in GitHub** - https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
- **What is Express?** - https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
- **Express** - https://expressjs.com/

