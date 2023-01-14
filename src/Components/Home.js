import { Card, Table, Button } from "react-bootstrap";

import "./Home.css";
const Home = (props) => {
  return (
    <div>
      <Card style={{ width: "100%", background: "grey", height: "250px" }}>
        <Card.Body className="d-flex justify-content-center">
          <Card.Text>
            <b style={{ fontSize: "50px" }}>The Genrics</b>
            <div class="text-center">
              <button
                type="button"
                classname="btn btn-outline-info"
                style={{ marginTop: "20px", color: "black" }}
              >
                Get Our Latest Album
              </button>
            </div>
            <div class="text-center">
              <button
                type="button"
                classname="btn btn-outline-info"
                style={{ marginTop: "20px", color: "black" }}
              >
                play
              </button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <center>
        <h2>
          <b>Tours</b>
        </h2>
      </center>
      <Table
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <tbody>
          <tr>
            <td>JUL16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <Button variant="primary" size="m " disabled>
                Buy Tickets
              </Button>
            </td>
          </tr>
          <tr>
            <td>JUL19</td>
            <td>TORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <Button variant="primary" size="m " disabled>
                Buy Tickets
              </Button>
            </td>
          </tr>
          <tr>
            <td>JUL22</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button variant="primary" size="m " disabled>
                Buy Tickets
              </Button>
            </td>
          </tr>
          <tr>
            <td>JUL25</td>
            <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td>
              <Button variant="primary" size="m " disabled>
                Buy Tickets
              </Button>
            </td>
          </tr>
          <tr>
            <td>JUL29</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button variant="primary" size="m " disabled>
                Buy Tickets
              </Button>
            </td>
          </tr>
          <tr>
            <td>AUG 06</td>
            <td>CONCORD, CA</td>
            <td>CONCORD PAVILION</td>
            <td>
              <Button variant="primary" size="m " disabled>
                Buy Tickets
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Home;
