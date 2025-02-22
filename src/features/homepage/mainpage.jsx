import './mainpage.css';
import {placeholder} from '../placeholder'

function NavBar() {
  return(
    <div>
      <h1>Welcome {placeholder.user.Username}</h1>
    </div>
  );
}

function Banner() {
  return (
    <div className='banner-container'>
      <div className='banner-components'>
        <h3>Notification</h3>
        <h2>{placeholder.notifications.length}</h2>
      </div>
      <div class="vertical-line"></div>
      <div className='banner-components'>
        <h3>Active Patients</h3>
        <h2>{placeholder.patients.length}</h2>
      </div>
    </div>
  )
}

function PatientTable() {
  return (
    <div>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  )
}

export default function MainPage() {
  return (
    <div className="main-container">
      <NavBar />
      <Banner />
      <PatientTable />
    </div>
  );
}
