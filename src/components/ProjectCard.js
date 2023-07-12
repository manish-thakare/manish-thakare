import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, Url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <a href={Url} target="blank"><div style={{color: "white"}} className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div></a>
      </div>
    </Col>
  )
}
