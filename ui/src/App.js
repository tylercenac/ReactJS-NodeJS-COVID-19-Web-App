import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

let uri = 'http://localhost:8081/totalrecovered';

function App() {
  // declare state variables
  const [loader, setLoader] = useState(false);
  const [countryList, setCountryList] = useState([]);

  const fetchData = () => {
    axios.get(`${uri}`).then((res) => {
      console.log(res);
      setCountryList(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2
        style={{
          fontSize: '80px',
          height: '110px',
          color: 'white',
          fontWeight: '1000',
          textAlign: 'center',
          backgroundColor: 'black'
        }}
      >
        COVID-19 Data
      </h2>
      <div className="container-fluid">
        <table className="table table-borderless">
          <tbody>
            <tr
              style={{
                fontSize: '28px',
                color: 'black',
                fontWeight: '1000',
                textAlign: 'center'
              }}
            >
              <td
                onClick={() => {
                  uri = 'http://localhost:8081/totalrecovered';
                  fetchData();
                }}
              >
                Total Recovered
              </td>
              <td
                onClick={() => {
                  uri = 'http://localhost:8081/newconfirmed';
                  fetchData();
                }}
              >
                New Confirmed
              </td>
              <td
                onClick={() => {
                  uri = 'http://localhost:8081/differenceConfirmed';
                  fetchData();
                }}
              >
                Difference Confirmed
              </td>
              <td
                onClick={() => {
                  uri = 'http://localhost:8081/percentageConfirmed';
                  fetchData();
                }}
              >
                Percentages
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th width="50%">Country</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {loader && <h2>loading...</h2>}
          {countryList &&
            countryList.map((country) => {
              return (
                <>
                  <tr
                    onClick={() => {
                      alert(
                        `Country: ${country.country} 
                        \nNew Confirmed Cases: ${country.newConfirmed}
                        \nTotal Confirmed Cases: ${country.totalConfirmed}
                        \nNew Recovered Cases: ${country.newRecovered}
                        \nTotal Recovered Cases: ${country.totalRecovered}
                        \nNew Deaths: ${country.newDeaths}
                        \nTotal Deaths: ${country.totalDeaths}`
                      );
                    }}
                  >
                    <td>{country.country}</td>
                    <td>{country.ui}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default App;
