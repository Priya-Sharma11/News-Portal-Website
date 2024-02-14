import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
export default function Adminnavbar() {
  return (
    <>
     
	{/* <nav class="sidebar">
		<div class="sidebar-header">
			<h3>Admin Dashboard</h3>
		</div>
		<ul class="list-unstyled components">
			<li>
				<a href="#">
					<i class="fa fa-tachometer"></i> Dashboard
				</a>
			</li>
			<li class="active">
				<a href="#">
					<i class="fa fa-users"></i> Users
				</a>
			</li>
			<li>
				<Link to="/report">
					Reports
				</Link>
			</li>
			<li>
				<a href="#">
					<i class="fa fa-cogs"></i> Settings
				</a>
			</li>
			<li>
				<a href="#">
					<i class="fa fa-question-circle"></i> Help
				</a>
			</li>
		</ul>
		<ul class="list-unstyled CTAs">
			<li>
				<a href="#" class="download">Download Files</a>
			</li>
			<li>
				<a href="#" class="article">Article</a>
			</li>
		</ul>
	</nav> */}

	<div>
  <nav className="navbar">
    <div className="navbar-logo">
      <img src="logoNewz.png" alt="Logo" />
    </div>
    <ul className="navbar-menu">
      <li><Link to="/admin">Home</Link></li>
      <li><Link to="/Report">Reports</Link></li>
      <li><Link to="/Adminnewzfeeds">Newz feeds</Link></li>
      <li><Link to="/loginpage" className='btn btn-success'>Logout</Link></li>
    </ul>
  </nav>
  <div>

  </div>
</div>

    </>
  )
}
