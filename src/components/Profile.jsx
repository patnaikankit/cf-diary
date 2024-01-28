import { useEffect, useState } from "react";
import Stats from "./Stats";
const colors = [
  "#ccc",
  "#ccc",
  "#ccc",
  "#ccc",
  "#037f51",
  "#037f51",
  "#029665",
  "#029665",
  "#1006c9",
  "#1006c9",
  "#1006c9",
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
  "#aa0000",
  "#aa0000",
  "#aa0000",
  "#aa0000",
  "#aa0000",
  "#aa0000",
  "#aa0000",
];

const Profile = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    var url = "https://codeforces.com/api/user.info?handles=" + props.username;

    {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          const val = res.result[0];
          const obj = {
            dp: val.avatar,
            city: val.city,
            contribution: val.contribution,
            country: val.country,
            friendOfCount: val.friendOfCount,
            maxRank: val.maxRank,
            maxRating: val.maxRating,
            organization: val.organization,
            rank: val.rank,
            rating: val.rating,
            titlePhoto: val.titlePhoto,
          };
          setData(obj);
          console.log(obj);
        })
        .catch((err) => {
          alert("Could not fetch Codeforces data!");
        });
    }
  }, []);


  
  let idx = Math.floor((data.rating-800)/100);
  let idx1 = Math.floor((data.maxRating-800)/100);
  const style = { "color": colors[idx] };
  const mstyle = { "color": colors[idx1] };
  return (
    <>
      <div className="title">
        <h2>Welcome {props.username}!</h2>
      </div>
      <div className="user-container">
        <div className="dp">
          <img src={data.titlePhoto} alt="profile" />
        </div>
        <div className="stats">
          <table>
            <tbody>
              <tr>
                <td>Rating: </td>
                <td style={style}>{data.rating}</td>
              </tr>
              <tr>
                <td>Rank: </td>
                <td style={style}>{data.rank}</td>
              </tr>
              <tr>
                <td>Max Rating: </td>
                <td style={mstyle}>{data.maxRating}</td>
              </tr>
              <tr>
                <td>Max Rank: </td>
                <td style={mstyle}>{data.maxRank}</td>
              </tr>
              <tr>
                <td>Contribution: </td>
                <td style={{"color":"green"}}>{data.contribution}</td>
              </tr>
              <tr>
                <td>Friend Of: </td>
                <td>{data.friendOfCount} users</td>
              </tr>
              <tr>
                <td>Organization: </td>
                <td>{data.organization}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Stats username={props.username} />
    </>
  );
};
export default Profile;
