export default function Footer() {
  return (
    <>
      <footer className="text-center py-3">
        <ul className="nav ml-auto justify-content-center">
            <li className="nav-item">
                <a className="nav-link" href="#about">About me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#work">Work</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">Contact me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./assets/Jill-OReilly-CV-Sep22.pdf" target="_blank">Resume</a>
            </li>
        </ul>
        <p>© 2024 Designed and developed by Jill O'Reilly</p>
    </footer>
    </>
  )
}