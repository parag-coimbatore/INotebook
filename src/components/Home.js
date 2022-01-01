import Notes from './Notes';

function Home() {
 
    return (
        <div>
            <div className="container">
                <h1 className="text-center my-3">Add a note</h1>
                {/* form from bootstrap */}
                <form my-3> 
                    <div class="form-group" className="text-center">
                        <h5 for="exampleInputEmail1" >Email address</h5>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group" className="text-center my-3">
                        <h5 for="exampleInputPassword1">Password</h5>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div class="col-md-12 text-center">
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
                    </div>
                    

                </form>
            </div>

            <Notes/>

        </div>
    )
}

export default Home
