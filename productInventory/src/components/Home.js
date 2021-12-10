import React from 'react'


/*function IsEmpty() {

    if (this.document.form.searching.value == "") {
      alert("empty");
    }
    return true;
  }*/
function Home() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand">Inventory Management</a>
            <form class="form-inline">
            <input name="searching" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        
            </form>
            </nav>
        </div>
    )
}

export default Home
