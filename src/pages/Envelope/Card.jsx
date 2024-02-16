

function Card() {
    return (
      <div className="card-background">
          <section id="CardPage">
              <div className="love-background">
                  <a href="/"> 
                      {/* sementara nanti kalo ada buat /message ganti aja */}
                      <div className="envelope">
  
                      </div>
                  </a>
                  <div className="text-youhavemessage">
                      <p><b>You have a message !</b></p>
                  </div>
                  <div className="text-click">
                      <p>( click envelope to open )</p>
                  </div>
              </div>
          </section>
      </div>
    );
  }
  
  export default Card;