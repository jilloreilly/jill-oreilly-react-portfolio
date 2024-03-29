export default function Footer() {
    return (
        <>
            <footer className="text-center mt-5">
                {/* Contact details */}
                <section id="contact" className="container p-3">
                   <div id="contact-info" className="d-flex flex-row justify-content-evenly pt-3">
                      <p><a href="mailto:jill.l.oreilly@gmail.com"><img src="./images/icons/icons8-email-50.png" alt="Email me" /></a></p>
                       <p><a href="https://github.com/jilloreilly" target="_blank"><img src="./images/icons/icons8-github-50.png" alt="Github" /></a></p>
                       <p><a href="https://www.linkedin.com/in/jill-o-reilly/" target="_blank"><img src="./images/icons/icons8-linked-in-50.png" alt="Linked In" /></a></p>
                       <p><a href="./assets/Jill-OReilly-CV.pdf" target="_blank"><img src="./images/icons/icons8-resume-50.png" alt="My Resume" /></a></p>
                  </div>
                </section>
                <p>© 2024 Designed and developed by Jill O'Reilly</p>
            </footer>
        </>
    )
}