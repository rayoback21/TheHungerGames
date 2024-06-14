import { List, useTable, EditButton, ShowButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";

export const CharacterList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="name" title={"Name"} />
        <Table.Column dataIndex="actor_name" title={"Actor Name"} />
        <Table.Column dataIndex="age" title={"Age"} />
        <Table.Column dataIndex="gender" title={"Gender"} />
        <Table.Column dataIndex="role" title={"Role"} />
        <Table.Column dataIndex="biography" title={"Biography"} />
        <Table.Column dataIndex="film_id" title={"Film ID"} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record} />
              <ShowButton hideText size="small" recordItemId={record} />
              <DeleteButton hideText size="small" recordItemId={record} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};