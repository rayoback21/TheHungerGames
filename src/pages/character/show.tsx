import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const CharacterShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <p>{record?.id}</p>
      <Title level={5}>Name</Title>
      <p>{record?.name}</p>
      <Title level={5}>Actor Name</Title>
      <p>{record?.actor_name}</p>
      <Title level={5}>Age</Title>
      <p>{record?.age}</p>
      <Title level={5}>Gender</Title>
      <p>{record?.gender}</p>
      <Title level={5}>Role</Title>
      <p>{record?.role}</p>
      <Title level={5}>Biography</Title>
      <p>{record?.biography}</p>
      <Title level={5}>Film ID</Title>
      <p>{record?.film_id}</p>
    </Show>
  );
};