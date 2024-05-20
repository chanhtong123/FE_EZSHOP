import HEADER3 from "../components/h-e-a-d-e-r3";
import FrameComponent from "../components/frame-component";
import Top2 from "../components/top2";
import Bottom1 from "../components/bottom1";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <HEADER3 />
      <section className="input-container-wrapper">
        <FrameComponent />
      </section>
      <footer className="footer3">
        <div className="footer-background2" />
        <Top2 />
        <Bottom1 />
      </footer>
    </div>
  );
};

export default Register;
