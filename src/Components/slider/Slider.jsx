import { Button, Col, Row } from "antd"
import { Link } from "react-router-dom";
import "./__slider.css"
function Slider({ data = [],negative =false ,mt=3,mb=3}) {

  

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft -= 300
    }

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft += 300
    }

    return (
        <Row wrap={false} className={`pt-4 pb-4 mt-${mt} mb-${mb} bg-white slider__parent ${negative && "margin-top-negative"}`} align="middle" style={styles.sliderParent} >
            <Col className="me-3" >
                <Button onClick={slideLeft} style={styles.sliderButton}><b>{"<"}</b></Button>
            </Col>

            <Col className="overflow-hidden">
                <Row wrap={false} id={"slider"} style={styles.sliderCard}>
                    {data.map((category) => (
                        <Col key={category.categoryId} xs={7} md={6} xl={5} className="me-3 slider__card" >
                            <img src={category.coverPhoto} alt="somthing" style={styles.sliderCardImg} />
                            <Link to="/login" className="slider__card__name">{category.categoryName}</Link>
                        </Col>
                    ))}
                </Row>
            </Col>
            <Col className="ms-3" >

                <Button onClick={slideRight} style={styles.sliderButton}><b>{">"}</b></Button>
            </Col>
        </Row>
    )
}

export default Slider


const styles = {
    sliderParent: {
        borderRadius: "7px", zIndex: 10, overflowX: "auto",
        scrollBehavior: "smooth",
        '&::-webkit-scrollbar': { display: "none", }


    },
    sliderButton: { height: "100px" },
    sliderCard: { overflowX: "auto", scrollBehavior: "smooth" },
    sliderCardImg: { width: "100%", height: "170px", objectFit: "cover" }
}