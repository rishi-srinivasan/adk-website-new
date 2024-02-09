import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/image/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web dev", "Web Des", "UI/UX"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
            // eslint-disable-next-line
        }, delta)


        return () => {clearInterval(ticker)};
        // eslint-disable-next-line
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if (!isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-ite,s-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to WH Allee der Kosmonauten</span>
                        <h1>{`Hi we are ADK `}<span className="wrap">{text}</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet. At natus consequatur hic dolor cupiditate ut aliquid nobis. Aut odit autem est voluptas voluptate rem quam natus aut inventore illum.

                            Aut saepe laborum non consequatur tenetur ea repudiandae nostrum. Sed veritatis Quis sit tempore minus eos magnam consequatur est suscipit dignissimos vel dolorem cumque. Vel similique quas vel laborum quos quo pariatur expedita est minima quibusdam. Aut galisum quis ut praesentium provident est sequi enim At minima eius et maiores soluta At tempore ipsum.

                            Ut molestiae maxime aut itaque voluptatem qui provident nobis hic dolorem incidunt ut dolores iusto. Eum galisum internos aut consequuntur dolor a autem fuga cum nostrum ipsam.
                        </p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}