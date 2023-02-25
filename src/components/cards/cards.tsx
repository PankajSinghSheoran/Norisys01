import React from "react";
import { Card } from "antd";

const { Meta } = Card;

interface Props {
  image: string;
  title: string;
  alt: string;
  description: string;
  width: string;
}

export default function Cards(props: Props) {
  return (
    <div>
      <Card
        hoverable
        style={{ width: props.width }}
        cover={<img alt={props.alt} src={props.image} />}
      >
        <Meta title={props.title} description={props.description} />
      </Card>
    </div>
  );
}
