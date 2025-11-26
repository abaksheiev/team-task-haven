//  # /tasks/:id
function TaskDetailsPage() {
  return (
    <>
      <h1>TaskDetailsPage</h1>
      <form>
        <fieldset>
          <legend>Simple form</legend>
           <div className="row">
             <div className="col-sm-12 col-md-6">
                <label htmlFor="username">Username</label>
                <input type="" id="Username" placeholder="Username" />
                </div>
           </div>
          <div className="row">
             <div className="col-sm-12 col-md-6">
                <label htmlFor="username">Username</label>
                <input type="text" id="Username" placeholder="Username" />
                </div>
           </div>
        
        </fieldset>
         <fieldset>

          <legend>Comments</legend>
          <label htmlFor="comment">Comment</label>
          <input type="text" id="Username" placeholder="Username" />
         
        </fieldset>
        <input type="reset" value="Reset" />
        <input type="submit" value="Save" />
      </form>
    </>
  );
}

export default TaskDetailsPage;
