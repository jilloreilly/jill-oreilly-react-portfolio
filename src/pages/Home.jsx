export default function Home() {
  return (
    <>
      <div className="container mt-5">
        
        <main>
          <section id="about" class="container">
              <div class="p-3 col-sm-12 col-md-12 col-lg-12 d-flex text-center align-items-center justify-content-center flex-column flex-md-column flex-lg-row">
                  <img src="./src/pages/images/jill-avatar-sm.png"
                      class="m-4 ms-3 float-md-start float-end rounded-top-circle img-fluid"
                      alt="Avatar image of Jill O'Reilly" />
                  <div>
                    <h1>Hi! I'm Jill ...</h1>
                    <p>and welcome to my portfolio website. I'm a front-end developer based in London but originally from Australia. I have had a career break after having my 2 daughters and I'm keen to get back into development. I love HTML, CSS and design and I am excited to learn new technologies like React,node, git and more!</p>
                    <p>Outside of web development I love scuba diving and travelling as well as fashion, reading and fibre art such as cross stitch.</p>
                    <p>Have a look at the showcase below of some of my work from the web development bootcamp as well as projects from my work as a developer.</p>
                  </div>
              </div>
          </section>
        </main>
      </div>
    </>
  )
  
}
