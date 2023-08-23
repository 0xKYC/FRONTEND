import { useState } from "react";
import { Fade } from "react-awesome-reveal";

import { Col, RadioChangeEvent, Row } from "antd";
import { Radio } from "antd";

import { useMediaQuery } from "core/hooks/useMediaQuery";

import { Service } from "./Service";
import { TagsOptions, servicesData } from "./data";
import { Heading, Wrapper } from "./styles";

export const Services = () => {
  const isMobile = useMediaQuery("(max-width: 330px)");
  const [choosenServices, setChoosenServices] = useState("All");
  const handleServiceChoose = ({ target: { value } }: RadioChangeEvent) => {
    setChoosenServices(value);
  };

  const filteredServices = servicesData.filter((service) => {
    if (choosenServices !== "All") {
      return service.tag === choosenServices;
    } else {
      return servicesData;
    }
  });

  return (
    <Wrapper>
      <Heading>Choose an app you want connect to:</Heading>

      <Radio.Group
        size={isMobile ? "middle" : "large"}
        options={TagsOptions}
        onChange={handleServiceChoose}
        value={choosenServices}
        optionType="button"
        buttonStyle="solid"
      />

      <Row style={{ marginTop: "2rem" }}>
        {filteredServices.map((service) => {
          return (
            <Col lg={8} md={12} xs={24} key={service.title}>
              <Fade duration={700}>
                <Service
                  title={service.title}
                  description={service.description}
                  img={service.img}
                  href={service.href}
                  biggerImg={service.biggerImg}
                />
              </Fade>
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
};
