import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const SceneShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <p>{record?.id}</p>
      <Title level={5}>Description</Title>
      <p>{record?.description}</p>
      <Title level={5}>Cost</Title>
      <p>{record?.cost}</p>
      <Title level={5}>Actor</Title>
      <p>{record?.actor}</p>
      <Title level={5}>Stock</Title>
      <p>{record?.stock}</p>
      <Title level={5}>Date Shot</Title>
      <p>{record?.date_shot}</p>
      <Title level={5}>Film ID</Title>
      <p>{record?.film_id}</p>
    </Show>
  );
};