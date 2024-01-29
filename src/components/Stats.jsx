import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";


const colors = [
  "#ccc",
  "#ccc",
  "#ccc",
  "#ccc",
  "#7f7",
  "#7f7",
  "#77ddbb",
  "#77ddbb",
  "#aaaaff",
  "#aaaaff",
  "#aaf",
  "#f8f",
  "#f8f",
  "yellow",
  "yellow",
  "#ecac4e",
  "#fe7776",
  "#fe7776",
  "#fe3234",
  "#fe3234",
  "#fe3234",
  "#fe3234",
  "#aa0000",
  "#aa0000",
  "#aa0000",
  "#aa0000",
  "#aa0000",
  "#aa0000",
  "#aa0000",
  "#aa0000",
];


const Stats = (props) => {
  const [cf, setCf] = useState(new Map());
  // const [last, setLast] = useState(0);
  const [ratingdata, setRatingData] = useState([]);

  useEffect(() => {
    const problemUrl =
      "https://codeforces.com/api/user.status?handle=" + props.username;

    fetch(problemUrl)
      .then((res) => res.json())
      .then((res) => {
        let response = res.result;
        let map = new Map();
        let rating = new Map();

        for (let i = 800; i <= 4000; i++) {
          rating.set(i, 0);
        }

        response.forEach((value) => {
          let flag = false;

          if (value.verdict === "OK" && !map.has(value.problem.name)) {
            flag = true;
            let cur = rating.get(value.problem.rating);
            rating.set(value.problem.rating, cur + 1);
            map.set(value.problem.name, true);
          }

          return flag;
        });

        setCf(rating);
      })
      .catch((err) => {
        // alert("Could not fetch Codeforces data!");
      });

    const ratingUrl = "https://codeforces.com/api/user.rating?handle=" + props.username;

    fetch(ratingUrl)
      .then((res) => res.json())
      .then((res) => {
        let response = res.result;

        let rd = [["Contest", "Rating", { role: "tooltip", type: "string", p: { html: true } }]];
        
        response.forEach((contest, i) => {
          const str =
            "<h6>Contest Number: " +
            i +
            "</h6><h6>Contest Name: " +
            contest.contestName +
            "</h6><h6>Delta: " +
            (contest.newRating - contest.oldRating) +
            "</h6><h6>New Rating: " +
            contest.newRating +
            "</h6>" +
            "<h6>Rank: " +
            contest.rank +
            "</h6>" +
            "<h6>Time: " +
            new Date(contest.ratingUpdateTimeSeconds * 1000).toLocaleString() +
            "</h6>";

          rd.push([i, contest.newRating, str]);
          // setLast(contest.contestId);
        });

        setRatingData(rd);
      })
      .catch((err) => {
        alert("Could not fetch Codeforces data!");
      });
  }, [props.username, cf]);

  const cfdata = [["Rating", "Count", { role: "style" }]];

  let cfTotal = 0;
  for (let i = 800; i <= 3500; i += 100) {
    const count = cf.get(i) || 0; // Ensure count is defined
    cfTotal += count;
    if (count > 0) {
      cfdata.push([i, count, colors[(i - 800) / 100]]);
    }
  }

  const options = {
    series: [{ color: "#1B8768" }],
    pointSize: 5,
    tooltip: { isHtml: true },
  };

  return (
    <div className="charts">
      <h4>Total Problems Solved: {cfTotal}</h4>
      <Chart chartType="ColumnChart" width="auto" height="600px" data={cfdata} />
      <h4>Rating Graph</h4>
      <Chart
        chartType="LineChart"
        width="auto"
        height="900px"
        data={ratingdata}
        options={options}
      />
    </div>
  );
};

export default Stats;
