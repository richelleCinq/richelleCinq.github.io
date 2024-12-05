import '../css/Home.css';

const Home = () => {
  return (
    <>
    <div className="greeting">
        <h1><span>Hello, I'm Richelle!</span>  <span className="textAnimation"></span></h1>
        <div>
          <p className="whatIdo">I'm a graphic designer from Boise. My works include packaging, UX/UI, typography, photography, paper art, animation, and illustration</p>
        </div>
    </div>

    <article className="contentGrid">
      <section className="section">
        <div>
          <img className="abstractImg" src="./images/abstract1.png" alt="abstract circles" />
        </div>
        <div className="description">
          <h2>Web Development</h2>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Justo nisi purus, blandit
            sagittis magnis ex.</p>
        </div>
      </section>
      <section className="section">
        <div>
          <img className="abstractImg" src="./images/abstract3.png" alt="abstract pattern" />
        </div>
        <div className="description">
          <h2>UX/UI</h2>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sed vitae suscipit porttitor
            sapien auctor mattis ante.</p>
        </div>
      </section>
      <section className="section">
        <div>
          <img className="abstractImg" src="./images/abstract2.png" alt="abstract pattern" />
        </div>
        <div className="description">
          <h2>Photography</h2>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti auctor rutrum mi egestas
            tempor saphabi tincidunt.
          </p>
        </div>
      </section>
      <section className="section">
        <div>
          <img className="abstractImg" src="./images/abstract4.png" alt="abstract pattern" />
        </div>
        <div className="description">
          <h2>Packaging</h2>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Platea torquent scelerisque
            magnis ornare; nibh risus mollis.</p>
        </div>
      </section>
      <section className="section">
      <div>
        <img className="abstractImg" src="./images/abstract4.png" alt="abstract pattern" />
      </div>
      <div className="description">
        <h2>Typography</h2>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Platea torquent scelerisque
          magnis ornare; nibh risus mollis.</p>
      </div>
    </section>
    <section className="section">
    <div>
      <img className="abstractImg" src="./images/abstract4.png" alt="abstract pattern" />
    </div>
    <div className="description">
      <h2>Art</h2>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Platea torquent scelerisque
        magnis ornare; nibh risus mollis.</p>
    </div>
  </section>
    </article>
  </>
  )
};

export default Home;