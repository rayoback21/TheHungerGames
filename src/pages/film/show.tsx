import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const FilmShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <p>{record?.id}</p>
      <Title level={5}>Title</Title>
      <p>{record?.title}</p>
      <Title level={5}>Director</Title>
      <p>{record?.director}</p>
      <Title level={5}>Duration</Title>
      <p>{record?.duration}</p>
      <Title level={5}>Release Year</Title>
      <p>{record?.release_year}</p>
      <Title level={5}>Genre</Title>
      <p>{record?.genre}</p>
      <Title level={5}>Language</Title>
      <p>{record?.language}</p>
      <Title level={5}>Country</Title>
      <p>{record?.country}</p>
      <Title level={5}>Synopsis</Title>
      <p>{record?.synopsis}</p>
    </Show>
  );
};