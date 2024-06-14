import { List, useTable, EditButton, ShowButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";

export const SceneList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <div style={{ backgroundImage: `url(The-Hunger2.jpg)`, backgroundSize: 'cover', minHeight: '100vh' }}>

    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="description" title={"Description"} />
        <Table.Column dataIndex="actor" title={"Actor"} />
        <Table.Column dataIndex="stock" title={"Stock"} />
        <Table.Column dataIndex="dateShot" title={"Date Shot"} />
         <Table.Column dataIndex="scene_id" title={"Scene ID"} />
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
    </div>
  );
};