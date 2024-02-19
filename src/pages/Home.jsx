export default function Home() {
  return (
    <>
      <div className="container mt-5">
        
        <main>
          <section id="about" className="container">
              <div className="p-3 col-sm-12 col-md-12 col-lg-12 d-flex text-center align-items-center justify-content-center flex-column flex-md-column flex-lg-row">
                  <img src="./src/pages/images/jill-avatar-sm.png"
                      className="m-4 ms-3 float-md-start float-end rounded-top-circle img-fluid"
                      alt="Avatar image of Jill O'Reilly" />
                  <div>
                    <h1>Hi! I'm Jill ...</h1>
                    <p>Welcome to my portfolio website. I'm a front-end developer based in London but originally from Australia. Following a career break to focus on raising my two daughters, I'm now eager to dive back into the world of development.</p>
                    <p>My passion lies in crafting robust and scalable frontend applications that prioritize exceptional user experiences.</p>
                    <p>Feel free to explore my <a href="">project showcase</a> to get a glimpse of some of my work.</p>
                  </div>
              </div>
          </section>
        </main>
      </div>
    </>
  )
  
}
